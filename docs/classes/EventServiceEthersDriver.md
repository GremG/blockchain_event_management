[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventServiceEthersDriver

# Class: EventServiceEthersDriver<T, M\>

Represents an Ethereum-based Event Service Driver for managing tickets and events.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`\> | The type of the Ticket. |
| `M` | extends [`TicketMetadata`](TicketMetadata.md) | The type of the TicketMetadata. |

## Implements

- [`EventServiceDriver`](../interfaces/EventServiceDriver.md)<`T`\>

## Table of contents

### Constructors

- [constructor](EventServiceEthersDriver.md#constructor)

### Properties

- [\_contract](EventServiceEthersDriver.md#_contract)
- [\_entityFactory](EventServiceEthersDriver.md#_entityfactory)
- [\_eventId](EventServiceEthersDriver.md#_eventid)
- [\_eventServiceId](EventServiceEthersDriver.md#_eventserviceid)
- [\_identityDriver](EventServiceEthersDriver.md#_identitydriver)
- [\_serializer](EventServiceEthersDriver.md#_serializer)

### Methods

- [addCollection](EventServiceEthersDriver.md#addcollection)
- [deleteAll](EventServiceEthersDriver.md#deleteall)
- [deleteById](EventServiceEthersDriver.md#deletebyid)
- [getTicket](EventServiceEthersDriver.md#getticket)
- [getTickets](EventServiceEthersDriver.md#gettickets)
- [retrieveAll](EventServiceEthersDriver.md#retrieveall)
- [retrieveAllEventUserTickets](EventServiceEthersDriver.md#retrievealleventusertickets)
- [retrieveById](EventServiceEthersDriver.md#retrievebyid)
- [retrieveItemEvents](EventServiceEthersDriver.md#retrieveitemevents)
- [save](EventServiceEthersDriver.md#save)
- [saveAll](EventServiceEthersDriver.md#saveall)
- [setApproval](EventServiceEthersDriver.md#setapproval)
- [transfer](EventServiceEthersDriver.md#transfer)
- [update](EventServiceEthersDriver.md#update)

## Constructors

### constructor

• **new EventServiceEthersDriver**<`T`, `M`\>(`identityDriver`, `provider`, `entityFactory`, `serializer`, `contractAddress`, `eventId`, `eventServiceId`)

Creates a new instance of EventServiceEthersDriver.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`, `T`\> |
| `M` | extends [`TicketMetadata`](TicketMetadata.md)<`M`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identityDriver` | `IdentityEthersDriver` | The identity driver. |
| `provider` | `JsonRpcProvider` | The JSON-RPC provider. |
| `entityFactory` | [`EntityFactory`](../interfaces/EntityFactory.md)<`M`, `T`\> | The entity factory. |
| `serializer` | [`EntitySerializer`](../interfaces/EntitySerializer.md)<`M`\> | The entity serializer. |
| `contractAddress` | `string` | The address of the EventVerifier contract. |
| `eventId` | `number` | The ID of the event. |
| `eventServiceId` | `number` | The ID of the event service. |

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:49

## Properties

### \_contract

• `Private` **\_contract**: `EventVerifier`

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:29

___

### \_entityFactory

• `Private` **\_entityFactory**: [`EntityFactory`](../interfaces/EntityFactory.md)<`M`, `T`\>

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:31

___

### \_eventId

• `Private` **\_eventId**: `number`

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:35

___

### \_eventServiceId

• `Private` **\_eventServiceId**: `number`

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:37

___

### \_identityDriver

• `Private` **\_identityDriver**: `IdentityEthersDriver`

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:27

___

### \_serializer

• `Private` **\_serializer**: [`EntitySerializer`](../interfaces/EntitySerializer.md)<`M`\>

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:33

## Methods

### addCollection

▸ **addCollection**(`contractAddress`): `Promise`<`void`\>

Adds a collection to the event service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractAddress` | `string` | The address of the ticket collection contract to add. |

#### Returns

`Promise`<`void`\>

A promise that resolves when the collection is added to the event service.

**`Throws`**

If an error occurs while adding the collection.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[addCollection](../interfaces/EventServiceDriver.md#addcollection)

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:287

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

**`Throws`**

Not implemented.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[deleteAll](../interfaces/EventServiceDriver.md#deleteall)

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:262

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

**`Throws`**

Not implemented.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[deleteById](../interfaces/EventServiceDriver.md#deletebyid)

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:269

___

### getTicket

▸ `Private` **getTicket**(`collectionAddress`, `id`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionAddress` | `string` |
| `id` | `number` |

#### Returns

`Promise`<`T`\>

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:109

___

### getTickets

▸ `Private` **getTickets**(`eventsId`, `eventsServiceId`, `collectionAddress`, `id`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsId` | `BigNumber`[] |
| `eventsServiceId` | `BigNumber`[] |
| `collectionAddress` | `string` |
| `id` | `number` |

#### Returns

`Promise`<`T`[]\>

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:297

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<`T`[]\>

Retrieves all tickets associated with the event service.

#### Returns

`Promise`<`T`[]\>

An array of tickets.

**`Throws`**

If an error occurs while retrieving the tickets.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[retrieveAll](../interfaces/EventServiceDriver.md#retrieveall)

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:135

___

### retrieveAllEventUserTickets

▸ **retrieveAllEventUserTickets**(): `Promise`<`T`[]\>

Retrieves all tickets owned by the current user associated with the event service.

#### Returns

`Promise`<`T`[]\>

An array of tickets owned by the current user.

**`Throws`**

If an error occurs while retrieving the tickets.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[retrieveAllEventUserTickets](../interfaces/EventServiceDriver.md#retrievealleventusertickets)

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:339

___

### retrieveById

▸ **retrieveById**(`collectionAddress`, `id`): `Promise`<``null`` \| `T`\>

Retrieves a ticket by its collection address and ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collectionAddress` | `string` | The address of the ticket collection. |
| `id` | `number` | The ID of the ticket to retrieve. |

#### Returns

`Promise`<``null`` \| `T`\>

The retrieved ticket or null if it doesn't exist.

**`Throws`**

If an error occurs while retrieving the ticket.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[retrieveById](../interfaces/EventServiceDriver.md#retrievebyid)

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:175

___

### retrieveItemEvents

▸ **retrieveItemEvents**(`collectionAddress`, `id`): `Promise`<`Event`[]\>

Retrieves events associated with a specific ticket.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collectionAddress` | `string` | The address of the ticket collection. |
| `id` | `number` | The ID of the ticket to retrieve events for. |

#### Returns

`Promise`<`Event`[]\>

An array of events associated with the ticket.

**`Throws`**

If an error occurs while retrieving the events.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[retrieveItemEvents](../interfaces/EventServiceDriver.md#retrieveitemevents)

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:379

___

### save

▸ **save**(`t`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<`number`\>

**`Throws`**

Not implemented.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[save](../interfaces/EventServiceDriver.md#save)

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:77

___

### saveAll

▸ **saveAll**(`ts`): `Promise`<`number`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ts` | `T`[] |

#### Returns

`Promise`<`number`[]\>

**`Throws`**

Not implemented.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[saveAll](../interfaces/EventServiceDriver.md#saveall)

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:102

___

### setApproval

▸ **setApproval**(`ethAddress`, `collectionAddress`, `tokenId`): `Promise`<`void`\>

Sets approval for the specified Ethereum address to transfer a specific ticket.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ethAddress` | `string` | The Ethereum address to grant approval to. |
| `collectionAddress` | `string` | The address of the ticket collection. |
| `tokenId` | `number` | The ID of the ticket to approve for transfer. |

#### Returns

`Promise`<`void`\>

A promise that resolves when the approval is set.

**`Throws`**

If an error occurs while setting the approval.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[setApproval](../interfaces/EventServiceDriver.md#setapproval)

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:402

___

### transfer

▸ `Private` **transfer**(`collectionAddress`, `tokenId`, `sender`, `receiver`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionAddress` | `string` |
| `tokenId` | `number` |
| `sender` | `string` |
| `receiver` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:210

___

### update

▸ **update**(`newT`): `Promise`<`void`\>

Updates a ticket, including transferring ownership and updating its status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newT` | `T` | The updated ticket. |

#### Returns

`Promise`<`void`\>

A promise that resolves when the update is complete.

**`Throws`**

If an error occurs during the update process.

#### Implementation of

[EventServiceDriver](../interfaces/EventServiceDriver.md).[update](../interfaces/EventServiceDriver.md#update)

#### Defined in

drivers/blockchains/EventServiceEthersDriver.ts:231
