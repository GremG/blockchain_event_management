[@blockchain-lib/event-mgmt](README.md) / Exports

# @blockchain-lib/event-mgmt

## Table of contents

## Packages name
- `blockchain-lib\common`: common library used for various projects.
- `blockchain-lib\event-mgmt`: general version to manage ticketing projects.
- `blockchain-lib\event-boost`: specific version to manage ticketing projects for the Event Boost project.

## Use
Tested node version: `v18.13.0`

The library is published on the private npm registry of the SUPSI ISIN DTI blockchain team.
To use the library in a project, it is necessary to:
1. `npm config set @blockchain-lib/:registry https://gitlab-core.supsi.ch/api/v4/projects/471/packages/npm/` to configure correctly the npm registry.
2. `npm config set -- '//gitlab-core.supsi.ch/api/v4/projects/471/packages/npm/:_authToken' authToken` to configure correctly the npm registry authentication.
3. `npm install`

### Examples
Inside the following folder you can find some examples on how to use the library:
- [QrCodeExamples](https://github.com/GremG/blockchain_event_management/blob/main/docs/examples/qrCodeExamples.ts)


### Enumerations

- [EventServiceStatus](enums/EventServiceStatus.md)
- [EventStatus](enums/EventStatus.md)
- [TicketStatus](enums/TicketStatus.md)

### Classes

- [BasicLogEvent](classes/BasicLogEvent.md)
- [BasicLogEventFactory](classes/BasicLogEventFactory.md)
- [CheckInDriver](classes/CheckInDriver.md)
- [CheckInMetadata](classes/CheckInMetadata.md)
- [CheckInMetadataJsonSerializer](classes/CheckInMetadataJsonSerializer.md)
- [CheckInService](classes/CheckInService.md)
- [ConcreteTicketMetadataBuilder](classes/ConcreteTicketMetadataBuilder.md)
- [DynamoDbException](classes/DynamoDbException.md)
- [Event](classes/Event.md)
- [EventEthersDriver](classes/EventEthersDriver.md)
- [EventFactory](classes/EventFactory.md)
- [EventJsonSerializer](classes/EventJsonSerializer.md)
- [EventManagerEthersDriver](classes/EventManagerEthersDriver.md)
- [EventMgmtCustomNftEthersDriver](classes/EventMgmtCustomNftEthersDriver.md)
- [EventMgmtCustomNftService](classes/EventMgmtCustomNftService.md)
- [EventMgmtMultiRoyaltyNftEthersDriver](classes/EventMgmtMultiRoyaltyNftEthersDriver.md)
- [EventMgmtMultiRoyaltyNftService](classes/EventMgmtMultiRoyaltyNftService.md)
- [EventMgmtSingleRoyaltyNftEthersDriver](classes/EventMgmtSingleRoyaltyNftEthersDriver.md)
- [EventMgmtSingleRoyaltyNftService](classes/EventMgmtSingleRoyaltyNftService.md)
- [EventMgmtTokenEthersDriver](classes/EventMgmtTokenEthersDriver.md)
- [EventMgmtTokenService](classes/EventMgmtTokenService.md)
- [EventService](classes/EventService.md)
- [EventServiceEntity](classes/EventServiceEntity.md)
- [EventServiceEthersDriver](classes/EventServiceEthersDriver.md)
- [EventServiceFactory](classes/EventServiceFactory.md)
- [EventServiceJsonSerializer](classes/EventServiceJsonSerializer.md)
- [EventServiceMongoDBDriver](classes/EventServiceMongoDBDriver.md)
- [EventServiceMySQLDriver](classes/EventServiceMySQLDriver.md)
- [EventServiceService](classes/EventServiceService.md)
- [FilledLogEvent](classes/FilledLogEvent.md)
- [FilledLogEventFactory](classes/FilledLogEventFactory.md)
- [MarketplaceEthersDriver](classes/MarketplaceEthersDriver.md)
- [MarketplaceListing](classes/MarketplaceListing.md)
- [MarketplaceListingFactory](classes/MarketplaceListingFactory.md)
- [MarketplaceService](classes/MarketplaceService.md)
- [OnChainEvent](classes/OnChainEvent.md)
- [OnChainEventJsonSerializer](classes/OnChainEventJsonSerializer.md)
- [OnChainEventService](classes/OnChainEventService.md)
- [OnChainEventServiceJsonSerializer](classes/OnChainEventServiceJsonSerializer.md)
- [PassThroughLogEventFactory](classes/PassThroughLogEventFactory.md)
- [StatisticDriver](classes/StatisticDriver.md)
- [StatisticService](classes/StatisticService.md)
- [Ticket](classes/Ticket.md)
- [TicketAlreadyUsedException](classes/TicketAlreadyUsedException.md)
- [TicketFactory](classes/TicketFactory.md)
- [TicketJsonSerializer](classes/TicketJsonSerializer.md)
- [TicketMetadata](classes/TicketMetadata.md)
- [TicketMetadataJsonSerializer](classes/TicketMetadataJsonSerializer.md)
- [TicketService](classes/TicketService.md)
- [User](classes/User.md)
- [UserDynamoDBDriver](classes/UserDynamoDBDriver.md)
- [UserJsonSerializer](classes/UserJsonSerializer.md)
- [UserService](classes/UserService.md)

### Interfaces

- [DynamoDBConnectionObject](interfaces/DynamoDBConnectionObject.md)
- [EntityDriver](interfaces/EntityDriver.md)
- [EntityFactory](interfaces/EntityFactory.md)
- [EntitySerializer](interfaces/EntitySerializer.md)
- [EventDriver](interfaces/EventDriver.md)
- [EventManagerDriver](interfaces/EventManagerDriver.md)
- [EventMgmtCustomNftDriver](interfaces/EventMgmtCustomNftDriver.md)
- [EventMgmtTokenDriver](interfaces/EventMgmtTokenDriver.md)
- [EventServiceDriver](interfaces/EventServiceDriver.md)
- [MarketplaceDriver](interfaces/MarketplaceDriver.md)
- [TicketMetadataBuilder](interfaces/TicketMetadataBuilder.md)
- [UserDriver](interfaces/UserDriver.md)

### Type Aliases

- [EventMgmtType](modules.md#eventmgmttype)
- [OffChainType](modules.md#offchaintype)
- [OnChainType](modules.md#onchaintype)

## Type Aliases

### EventMgmtType

Ƭ **EventMgmtType**: [`Event`](classes/Event.md)<`any`\> \| [`EventServiceEntity`](classes/EventServiceEntity.md)<`any`\> \| [`Ticket`](classes/Ticket.md)<`any`, `any`, `any`\> \| [`User`](classes/User.md)

#### Defined in

types/EventMgmtType.type.ts:6

___

### OffChainType

Ƭ **OffChainType**: [`Event`](classes/Event.md)<`any`\> \| [`EventServiceEntity`](classes/EventServiceEntity.md)<`any`\> \| [`Ticket`](classes/Ticket.md)<`any`, `any`, `any`\>

#### Defined in

types/OffChainType.type.ts:5

___

### OnChainType

Ƭ **OnChainType**: [`OnChainEvent`](classes/OnChainEvent.md) \| [`OnChainEventService`](classes/OnChainEventService.md) \| `OnChainTicket` \| [`TicketMetadata`](classes/TicketMetadata.md)

#### Defined in

types/OnChainType.type.ts:6
