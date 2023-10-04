[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventServiceMongoDBDriver

# Class: EventServiceMongoDBDriver

Represents a MongoDB-based Event Service Driver for managing tickets and events.

## Implements

- [`EventServiceDriver`](../interfaces/EventServiceDriver.md)<[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>\>

## Table of contents

### Constructors

- [constructor](EventServiceMongoDBDriver.md#constructor)

### Properties

- [\_client](EventServiceMongoDBDriver.md#_client)
- [\_collection](EventServiceMongoDBDriver.md#_collection)
- [\_database](EventServiceMongoDBDriver.md#_database)
- [\_eventId](EventServiceMongoDBDriver.md#_eventid)
- [\_eventServiceId](EventServiceMongoDBDriver.md#_eventserviceid)

### Methods

- [addCollection](EventServiceMongoDBDriver.md#addcollection)
- [closeConnection](EventServiceMongoDBDriver.md#closeconnection)
- [deleteAll](EventServiceMongoDBDriver.md#deleteall)
- [deleteById](EventServiceMongoDBDriver.md#deletebyid)
- [getCollection](EventServiceMongoDBDriver.md#getcollection)
- [retrieveAll](EventServiceMongoDBDriver.md#retrieveall)
- [retrieveAllEventUserTickets](EventServiceMongoDBDriver.md#retrievealleventusertickets)
- [retrieveById](EventServiceMongoDBDriver.md#retrievebyid)
- [retrieveItemEvents](EventServiceMongoDBDriver.md#retrieveitemevents)
- [save](EventServiceMongoDBDriver.md#save)
- [saveAll](EventServiceMongoDBDriver.md#saveall)
- [setApproval](EventServiceMongoDBDriver.md#setapproval)
- [update](EventServiceMongoDBDriver.md#update)

## Constructors

### constructor

• **new EventServiceMongoDBDriver**(`connectionUri`, `database`, `collection`, `eventId`, `eventServiceId`)

Creates a new instance of EventServiceMongoDBDriver.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connectionUri` | `string` | The MongoDB connection URI. |
| `database` | `string` | The name of the MongoDB database. |
| `collection` | `string` | The name of the MongoDB collection. |
| `eventId` | `number` | The ID of the event. |
| `eventServiceId` | `number` | The ID of the event service. |

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:49

## Properties

### \_client

• `Private` **\_client**: `MongoClient`

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:27

___

### \_collection

• `Private` **\_collection**: `string`

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:31

___

### \_database

• `Private` **\_database**: `string`

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:29

___

### \_eventId

• `Private` **\_eventId**: `number`

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:33

___

### \_eventServiceId

• `Private` **\_eventServiceId**: `number`

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:35

## Methods

### addCollection

▸ **addCollection**(`contractAddress`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractAddress` | `string` |

#### Returns

`Promise`<`void`\>

**`Throws`**

Not implemented.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[addCollection](../interfaces/EventServiceDriver.md#addcollection)

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:235

___

### closeConnection

▸ `Private` **closeConnection**(): `Promise`<`void`\>

Closes the MongoDB connection.

#### Returns

`Promise`<`void`\>

A promise that resolves when the connection is closed.

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:85

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

Deletes all tickets from the MongoDB collection.

#### Returns

`Promise`<`void`\>

A promise that resolves when all tickets are deleted.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[deleteAll](../interfaces/EventServiceDriver.md#deleteall)

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:205

___

### deleteById

▸ **deleteById**(`collectionAddress`, `id`): `Promise`<`void`\>

Deletes a ticket by its collection address and ID from the MongoDB collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collectionAddress` | `string` | The address of the ticket collection. |
| `id` | `number` | The ID of the ticket to delete. |

#### Returns

`Promise`<`void`\>

A promise that resolves when the ticket is deleted.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[deleteById](../interfaces/EventServiceDriver.md#deletebyid)

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:219

___

### getCollection

▸ `Private` **getCollection**(): `Promise`<`Collection`<`Document`\>\>

Connects to the MongoDB collection.

#### Returns

`Promise`<`Collection`<`Document`\>\>

The MongoDB collection.

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:72

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>[]\>

Retrieves all tickets from the MongoDB collection.

#### Returns

`Promise`<[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>[]\>

An array of tickets.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[retrieveAll](../interfaces/EventServiceDriver.md#retrieveall)

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:129

___

### retrieveAllEventUserTickets

▸ **retrieveAllEventUserTickets**(): `Promise`<[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>[]\>

#### Returns

`Promise`<[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>[]\>

**`Throws`**

Not implemented.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[retrieveAllEventUserTickets](../interfaces/EventServiceDriver.md#retrievealleventusertickets)

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:242

___

### retrieveById

▸ **retrieveById**(`collectionAddress`, `id`): `Promise`<``null`` \| [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>\>

Retrieves a ticket by its collection address and ID from the MongoDB collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collectionAddress` | `string` | The address of the ticket collection. |
| `id` | `number` | The ID of the ticket to retrieve. |

#### Returns

`Promise`<``null`` \| [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>\>

The retrieved ticket or null if it doesn't exist.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[retrieveById](../interfaces/EventServiceDriver.md#retrievebyid)

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:148

___

### retrieveItemEvents

▸ **retrieveItemEvents**(`collectionAddress`, `id`): `Promise`<`Event`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionAddress` | `string` |
| `id` | `number` |

#### Returns

`Promise`<`Event`[]\>

**`Throws`**

Not implemented.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[retrieveItemEvents](../interfaces/EventServiceDriver.md#retrieveitemevents)

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:174

___

### save

▸ **save**(`t`): `Promise`<`number`\>

Saves a single ticket to the MongoDB collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\> | The ticket to save. |

#### Returns

`Promise`<`number`\>

The ID of the saved ticket.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[save](../interfaces/EventServiceDriver.md#save)

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:94

___

### saveAll

▸ **saveAll**(`ts`): `Promise`<`number`[]\>

Saves an array of tickets to the MongoDB collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ts` | [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>[] | The array of tickets to save. |

#### Returns

`Promise`<`number`[]\>

An array of IDs of the saved tickets.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[saveAll](../interfaces/EventServiceDriver.md#saveall)

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:111

___

### setApproval

▸ **setApproval**(`ethAddress`, `collectionAddress`, `tokenId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethAddress` | `string` |
| `collectionAddress` | `string` |
| `tokenId` | `number` |

#### Returns

`Promise`<`void`\>

**`Throws`**

Not implemented.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[setApproval](../interfaces/EventServiceDriver.md#setapproval)

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:249

___

### update

▸ **update**(`newT`): `Promise`<`void`\>

Updates a ticket in the MongoDB collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newT` | [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\> | The updated ticket. |

#### Returns

`Promise`<`void`\>

A promise that resolves when the update is complete.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[update](../interfaces/EventServiceDriver.md#update)

#### Defined in

drivers/dbs/EventServiceMongoDBDriver.ts:183
