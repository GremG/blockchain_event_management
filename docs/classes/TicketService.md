[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / TicketService

# Class: TicketService<T, E, U, M\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`E`, `U`, `M`\> |
| `E` | extends [`EventServiceEntity`](EventServiceEntity.md)<`any`\> |
| `U` | extends [`User`](User.md) |
| `M` | extends [`TicketMetadata`](TicketMetadata.md) |

## Table of contents

### Constructors

- [constructor](TicketService.md#constructor)

### Properties

- [\_tDriver](TicketService.md#_tdriver)

### Methods

- [addCollection](TicketService.md#addcollection)
- [retrieveAll](TicketService.md#retrieveall)
- [retrieveAllEventUserTickets](TicketService.md#retrievealleventusertickets)
- [retrieveByTokenId](TicketService.md#retrievebytokenid)
- [transfer](TicketService.md#transfer)

## Constructors

### constructor

• **new TicketService**<`T`, `E`, `U`, `M`\>(`tDriver`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`E`, `U`, `M`, `T`\> |
| `E` | extends [`EventServiceEntity`](EventServiceEntity.md)<`any`, `E`\> |
| `U` | extends [`User`](User.md)<`U`\> |
| `M` | extends [`TicketMetadata`](TicketMetadata.md)<`M`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tDriver` | [`EventServiceDriver`](../interfaces/EventServiceDriver.md)<`T`\> | EventDriver |

#### Defined in

services/TicketService.ts:19

## Properties

### \_tDriver

• `Protected` **\_tDriver**: [`EventServiceDriver`](../interfaces/EventServiceDriver.md)<`T`\>

#### Defined in

services/TicketService.ts:14

## Methods

### addCollection

▸ **addCollection**(`collectionAddress`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

services/TicketService.ts:52

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<`T`[]\>

> Retrieve all the Ticket

#### Returns

`Promise`<`T`[]\>

An array of Ticket

#### Defined in

services/TicketService.ts:27

___

### retrieveAllEventUserTickets

▸ **retrieveAllEventUserTickets**(): `Promise`<`T`[]\>

#### Returns

`Promise`<`T`[]\>

#### Defined in

services/TicketService.ts:31

___

### retrieveByTokenId

▸ **retrieveByTokenId**(`collectionAddress`, `tokenId`): `Promise`<``null`` \| `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionAddress` | `string` |
| `tokenId` | `number` |

#### Returns

`Promise`<``null`` \| `T`\>

#### Defined in

services/TicketService.ts:35

___

### transfer

▸ **transfer**(`t`, `receiver`): `Promise`<`void`\>

"Transfer a Ticket object and store it in the database."
The first parameter is the Ticket id object to be transferd. The second parameter is the owner of the Ticket object. The third is the receiver of the Ticket object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `T` |  |
| `receiver` | `U` | The receiver of the object. |

#### Returns

`Promise`<`void`\>

A promise that resolves to void.

#### Defined in

services/TicketService.ts:46
