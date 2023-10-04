[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventServiceMySQLDriver

# Class: EventServiceMySQLDriver

## Implements

- [`EventServiceDriver`](../interfaces/EventServiceDriver.md)<[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>\>

## Table of contents

### Constructors

- [constructor](EventServiceMySQLDriver.md#constructor)

### Methods

- [addCollection](EventServiceMySQLDriver.md#addcollection)
- [deleteAll](EventServiceMySQLDriver.md#deleteall)
- [deleteById](EventServiceMySQLDriver.md#deletebyid)
- [retrieveAll](EventServiceMySQLDriver.md#retrieveall)
- [retrieveAllEventUserTickets](EventServiceMySQLDriver.md#retrievealleventusertickets)
- [retrieveById](EventServiceMySQLDriver.md#retrievebyid)
- [retrieveItemEvents](EventServiceMySQLDriver.md#retrieveitemevents)
- [save](EventServiceMySQLDriver.md#save)
- [saveAll](EventServiceMySQLDriver.md#saveall)
- [setApproval](EventServiceMySQLDriver.md#setapproval)
- [update](EventServiceMySQLDriver.md#update)

## Constructors

### constructor

• **new EventServiceMySQLDriver**()

## Methods

### addCollection

▸ **addCollection**(`contractAddress`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[addCollection](../interfaces/EventServiceDriver.md#addcollection)

#### Defined in

drivers/dbs/EventServiceMySQLDriver.ts:46

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[deleteAll](../interfaces/EventServiceDriver.md#deleteall)

#### Defined in

drivers/dbs/EventServiceMySQLDriver.ts:38

___

### deleteById

▸ **deleteById**(`collectionAddress`, `id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionAddress` | `string` |
| `id` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[deleteById](../interfaces/EventServiceDriver.md#deletebyid)

#### Defined in

drivers/dbs/EventServiceMySQLDriver.ts:42

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>[]\>

#### Returns

`Promise`<[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>[]\>

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[retrieveAll](../interfaces/EventServiceDriver.md#retrieveall)

#### Defined in

drivers/dbs/EventServiceMySQLDriver.ts:22

___

### retrieveAllEventUserTickets

▸ **retrieveAllEventUserTickets**(): `Promise`<[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>[]\>

#### Returns

`Promise`<[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>[]\>

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[retrieveAllEventUserTickets](../interfaces/EventServiceDriver.md#retrievealleventusertickets)

#### Defined in

drivers/dbs/EventServiceMySQLDriver.ts:50

___

### retrieveById

▸ **retrieveById**(`collectionAddress`, `id`): `Promise`<``null`` \| [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionAddress` | `string` |
| `id` | `number` |

#### Returns

`Promise`<``null`` \| [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>\>

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[retrieveById](../interfaces/EventServiceDriver.md#retrievebyid)

#### Defined in

drivers/dbs/EventServiceMySQLDriver.ts:26

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

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[retrieveItemEvents](../interfaces/EventServiceDriver.md#retrieveitemevents)

#### Defined in

drivers/dbs/EventServiceMySQLDriver.ts:30

___

### save

▸ **save**(`t`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\> |

#### Returns

`Promise`<`number`\>

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[save](../interfaces/EventServiceDriver.md#save)

#### Defined in

drivers/dbs/EventServiceMySQLDriver.ts:14

___

### saveAll

▸ **saveAll**(`ts`): `Promise`<`number`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ts` | [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>[] |

#### Returns

`Promise`<`number`[]\>

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[saveAll](../interfaces/EventServiceDriver.md#saveall)

#### Defined in

drivers/dbs/EventServiceMySQLDriver.ts:18

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

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[setApproval](../interfaces/EventServiceDriver.md#setapproval)

#### Defined in

drivers/dbs/EventServiceMySQLDriver.ts:54

___

### update

▸ **update**(`newT`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newT` | [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[update](../interfaces/EventServiceDriver.md#update)

#### Defined in

drivers/dbs/EventServiceMySQLDriver.ts:34
