[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / Ticket

# Class: Ticket<E, U, M\>

Represents a generic ticket.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `E` | extends [`EventServiceEntity`](EventServiceEntity.md)<`any`\> | The type of event service associated with the ticket. |
| `U` | extends [`User`](User.md) | The type of user associated with the ticket. |
| `M` | extends [`TicketMetadata`](TicketMetadata.md) | The type of metadata associated with the ticket. |

## Table of contents

### Constructors

- [constructor](Ticket.md#constructor)

### Properties

- [\_collectionAddress](Ticket.md#_collectionaddress)
- [\_eventService](Ticket.md#_eventservice)
- [\_metadata](Ticket.md#_metadata)
- [\_owner](Ticket.md#_owner)
- [\_status](Ticket.md#_status)
- [\_tokenId](Ticket.md#_tokenid)

### Accessors

- [collectionAddress](Ticket.md#collectionaddress)
- [eventService](Ticket.md#eventservice)
- [metadata](Ticket.md#metadata)
- [owner](Ticket.md#owner)
- [status](Ticket.md#status)
- [tokenId](Ticket.md#tokenid)

## Constructors

### constructor

• **new Ticket**<`E`, `U`, `M`\>(`collectionAddress`, `tokenId`, `eventService`, `owner`, `metadata`, `status?`)

Creates an instance of the Ticket class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`EventServiceEntity`](EventServiceEntity.md)<`any`, `E`\> |
| `U` | extends [`User`](User.md)<`U`\> |
| `M` | extends [`TicketMetadata`](TicketMetadata.md)<`M`\> |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collectionAddress` | `string` | `undefined` | The address of the ticket's collection. |
| `tokenId` | `number` | `undefined` | The ID of the ticket. |
| `eventService` | `E` | `undefined` | The event service associated with the ticket. |
| `owner` | `U` | `undefined` | The owner (user) of the ticket. |
| `metadata` | `M` | `undefined` | The metadata associated with the ticket. |
| `status?` | [`TicketStatus`](../enums/TicketStatus.md) | `TicketStatus.Ready` | The status of the ticket (default is TicketStatus.Ready). |

#### Defined in

entities/offChain/Ticket.ts:41

## Properties

### \_collectionAddress

• `Private` **\_collectionAddress**: `string`

#### Defined in

entities/offChain/Ticket.ts:20

___

### \_eventService

• `Private` **\_eventService**: `E`

#### Defined in

entities/offChain/Ticket.ts:24

___

### \_metadata

• `Private` **\_metadata**: `M`

#### Defined in

entities/offChain/Ticket.ts:28

___

### \_owner

• `Private` **\_owner**: `U`

#### Defined in

entities/offChain/Ticket.ts:26

___

### \_status

• `Private` **\_status**: [`TicketStatus`](../enums/TicketStatus.md)

#### Defined in

entities/offChain/Ticket.ts:30

___

### \_tokenId

• `Private` **\_tokenId**: `number`

#### Defined in

entities/offChain/Ticket.ts:22

## Accessors

### collectionAddress

• `get` **collectionAddress**(): `string`

#### Returns

`string`

#### Defined in

entities/offChain/Ticket.ts:50

• `set` **collectionAddress**(`collectionAddress`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionAddress` | `string` |

#### Returns

`void`

#### Defined in

entities/offChain/Ticket.ts:54

___

### eventService

• `get` **eventService**(): `E`

#### Returns

`E`

#### Defined in

entities/offChain/Ticket.ts:66

• `set` **eventService**(`eventService`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventService` | `E` |

#### Returns

`void`

#### Defined in

entities/offChain/Ticket.ts:70

___

### metadata

• `get` **metadata**(): `M`

#### Returns

`M`

#### Defined in

entities/offChain/Ticket.ts:82

• `set` **metadata**(`metadata`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `M` |

#### Returns

`void`

#### Defined in

entities/offChain/Ticket.ts:86

___

### owner

• `get` **owner**(): `U`

#### Returns

`U`

#### Defined in

entities/offChain/Ticket.ts:74

• `set` **owner**(`owner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `U` |

#### Returns

`void`

#### Defined in

entities/offChain/Ticket.ts:78

___

### status

• `get` **status**(): [`TicketStatus`](../enums/TicketStatus.md)

#### Returns

[`TicketStatus`](../enums/TicketStatus.md)

#### Defined in

entities/offChain/Ticket.ts:90

• `set` **status**(`status`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`TicketStatus`](../enums/TicketStatus.md) |

#### Returns

`void`

#### Defined in

entities/offChain/Ticket.ts:94

___

### tokenId

• `get` **tokenId**(): `number`

#### Returns

`number`

#### Defined in

entities/offChain/Ticket.ts:58

• `set` **tokenId**(`tokenId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `number` |

#### Returns

`void`

#### Defined in

entities/offChain/Ticket.ts:62
