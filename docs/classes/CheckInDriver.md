[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / CheckInDriver

# Class: CheckInDriver<T\>

Represents a CheckInDriver for handling ticket check-ins.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`\> |

## Table of contents

### Constructors

- [constructor](CheckInDriver.md#constructor)

### Properties

- [\_blockchainDriver](CheckInDriver.md#_blockchaindriver)
- [\_contract](CheckInDriver.md#_contract)
- [\_databaseDriver](CheckInDriver.md#_databasedriver)
- [\_identityDriver](CheckInDriver.md#_identitydriver)
- [\_serializer](CheckInDriver.md#_serializer)

### Methods

- [generateCheckInMetadata](CheckInDriver.md#generatecheckinmetadata)
- [retrieveTicketsFromDatabase](CheckInDriver.md#retrieveticketsfromdatabase)
- [spendService](CheckInDriver.md#spendservice)
- [syncTickets](CheckInDriver.md#synctickets)
- [validateCheckInMetadata](CheckInDriver.md#validatecheckinmetadata)

## Constructors

### constructor

• **new CheckInDriver**<`T`\>(`identityDriver`, `provider`, `blockchainDriver`, `databaseDriver`, `serializer`, `contractAddress`)

Creates a new instance of CheckInDriver.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identityDriver` | `IdentityEthersDriver` | The identity driver. |
| `provider` | `JsonRpcProvider` | The JSON-RPC provider. |
| `blockchainDriver` | [`EventServiceDriver`](../interfaces/EventServiceDriver.md)<`T`\> | The blockchain event service driver. |
| `databaseDriver` | [`EventServiceDriver`](../interfaces/EventServiceDriver.md)<`T`\> | The database event service driver. |
| `serializer` | [`EntitySerializer`](../interfaces/EntitySerializer.md)<[`CheckInMetadata`](CheckInMetadata.md)\> | The serializer for CheckInMetadata. |
| `contractAddress` | `string` | The address of the EventVerifier contract. |

#### Defined in

drivers/CheckInDriver.ts:46

## Properties

### \_blockchainDriver

• `Private` **\_blockchainDriver**: [`EventServiceDriver`](../interfaces/EventServiceDriver.md)<`T`\>

#### Defined in

drivers/CheckInDriver.ts:30

___

### \_contract

• `Private` **\_contract**: `EventVerifier`

#### Defined in

drivers/CheckInDriver.ts:26

___

### \_databaseDriver

• `Private` **\_databaseDriver**: [`EventServiceDriver`](../interfaces/EventServiceDriver.md)<`T`\>

#### Defined in

drivers/CheckInDriver.ts:32

___

### \_identityDriver

• `Private` **\_identityDriver**: `IdentityEthersDriver`

#### Defined in

drivers/CheckInDriver.ts:28

___

### \_serializer

• `Private` **\_serializer**: [`EntitySerializer`](../interfaces/EntitySerializer.md)<[`CheckInMetadata`](CheckInMetadata.md)\>

#### Defined in

drivers/CheckInDriver.ts:34

## Methods

### generateCheckInMetadata

▸ **generateCheckInMetadata**(`collectionAddress`, `tokenId`): `Promise`<[`CheckInMetadata`](CheckInMetadata.md)\>

Generates metadata that contains the ticket ID, the address of the identity that is checking in,
a timestamp, and a signature of the timestamp.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collectionAddress` | `string` | The address of the ticket collection. |
| `tokenId` | `number` | The ID of the ticket that you want to check. |

#### Returns

`Promise`<[`CheckInMetadata`](CheckInMetadata.md)\>

Check-in metadata object.

**`Throws`**

If the ticket doesn't exist or is already spent.

#### Defined in

drivers/CheckInDriver.ts:75

___

### retrieveTicketsFromDatabase

▸ **retrieveTicketsFromDatabase**(): `Promise`<`T`[]\>

Retrieves database tickets.

#### Returns

`Promise`<`T`[]\>

An array of database tickets.

#### Defined in

drivers/CheckInDriver.ts:186

___

### spendService

▸ **spendService**(`checkInMetadata`): `Promise`<`void`\>

Spends a service based on the check-in metadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `checkInMetadata` | [`CheckInMetadata`](CheckInMetadata.md) | The check-in metadata. |

#### Returns

`Promise`<`void`\>

A promise that resolves when the service is spent.

**`Throws`**

If an error occurs during the spending process.

#### Defined in

drivers/CheckInDriver.ts:159

___

### syncTickets

▸ **syncTickets**(): `Promise`<`void`\>

Synchronizes database tickets with blockchain tickets.

#### Returns

`Promise`<`void`\>

A promise that resolves when the synchronization is complete.

#### Defined in

drivers/CheckInDriver.ts:176

___

### validateCheckInMetadata

▸ **validateCheckInMetadata**(`checkInMetadata`): `Promise`<`boolean`\>

Checks the validity of a check-in metadata by asserting tokenId, ownership, and signatures.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `checkInMetadata` | [`CheckInMetadata`](CheckInMetadata.md) | The check-in metadata. |

#### Returns

`Promise`<`boolean`\>

A boolean corresponding to the check result.

#### Defined in

drivers/CheckInDriver.ts:111
