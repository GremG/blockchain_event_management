const NETWORK = 'http://127.0.0.1:8545';
export const USER_PRIVATE_KEY = 'ac0974bec39a17e36ba4a6...';
export const EVENT_VERIFIER_CONTRACT_ADDRESS = '0x...';
export const ENDPOINT_DYNAMODB = 'http://localhost:8001';
export const ENDPOINT_MONGODB = 'localhost:27017';


// @ts-ignore
const main = async () => {
    /* Setup */
    const provider = new ethers.providers.JsonRpcProvider(NETWORK);
    const identityDriver = new IdentityEthersDriver(USER_PRIVATE_KEY, provider);

    // UserDynamoDBDriver is required to define a collection of users that can be have associated tickets
    const userDynamoDBDriver = new UserDynamoDBDriver('localhost', 'accessKeyId', 'secretAccessKey', ENDPOINT_DYNAMODB, 'testUserTableName');
    // Onchain <-> Offchain entities transformation
    const eventFactory = new EventFactory(userDynamoDBDriver);
    const onChainEventJsonSerializer = new OnChainEventJsonSerializer();
    // EventManagerDriver
    const eventManagerEthersDriver = new EventManagerEthersDriver(
        identityDriver,
        provider,
        eventFactory,
        onChainEventJsonSerializer,
        EVENT_VERIFIER_CONTRACT_ADDRESS,
    );

    // Onchain <-> Offchain entities transformation
    const eventServiceFactory = new EventServiceFactory(eventManagerEthersDriver);
    const onChainEventServiceJsonSerializer = new OnChainEventServiceJsonSerializer();
    //SessionManagerDriver
    const eventEthersDriver = new EventEthersDriver(
        identityDriver,
        provider,
        eventServiceFactory,
        onChainEventServiceJsonSerializer,
        EVENT_VERIFIER_CONTRACT_ADDRESS,
        event.id,
    );

    // Onchain <-> Offchain entities transformation
    const ticketFactory = new TicketFactory(eventEthersDriver, userDynamoDBDriver);
    const ticketMetadataJsonSerializer = new TicketMetadataJsonSerializer();
    const eventServiceEthersDriver = new EventServiceEthersDriver(
        identityDriver,
        provider,
        ticketFactory,
        ticketMetadataJsonSerializer,
        EVENT_VERIFIER_CONTRACT_ADDRESS,
        event.id,
        eventServiceEntity.id,
    );
    const ticketService = new TicketService(eventServiceEthersDriver);

    //DB caching
    const eventMongoDBDriver = new EventServiceMongoDBDriver(
        `mongodb://user:user@${ENDPOINT_MONGODB}/?`,
        'event-mgmt',
        'tickets',
        event.id,
        eventServiceEntity.id
    );
    const checkInJSONSerializer = new CheckInMetadataJsonSerializer();
    const checkInDriver = new CheckInDriver(
        identityDriver,
        provider,
        eventServiceEthersDriver,
        eventMongoDBDriver,
        checkInJSONSerializer,
        EVENT_VERIFIER_CONTRACT_ADDRESS,
    );
    const checkInService = new CheckInService(checkInDriver);

    //Generate Proof
    //Get ticket
    const ticket = await ticketService.retrieveByTokenId(ticket.collectionAddress, ticket.tokenId);

    const checkinMetadata = await checkInService.generateProof(ticket.collectionAddress, ticket.tokenId);
    /*
        {
          "eventId": 0,
          "eventServiceId": 0,
          "collectionAddress": "string",
          "tokenId": 0,
          "challenge": "string",
          "signedChallenge": "string"
        }
     */

    //Verify proof
    const resp = await checkInService.validateProof(checkinMetadata);

    //Spend ticket
    const resp1 = await checkInService.spendTicket(checkinMetadata);

    //Verify and spend ticket
    const resp2 = await checkInService.validateAndSpendTicket(checkinMetadata)
}
