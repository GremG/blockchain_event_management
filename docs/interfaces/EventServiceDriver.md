[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventServiceDriver

# Interface: EventServiceDriver<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](../classes/Ticket.md)<`any`, `any`, `any`\> |

## Implemented by

- [`EventServiceEthersDriver`](../classes/EventServiceEthersDriver.md)
- [`EventServiceMongoDBDriver`](../classes/EventServiceMongoDBDriver.md)
- [`EventServiceMySQLDriver`](../classes/EventServiceMySQLDriver.md)

## Table of contents

### Methods

- [addCollection](EventServiceDriver.md#addcollection)
- [deleteAll](EventServiceDriver.md#deleteall)
- [deleteById](EventServiceDriver.md#deletebyid)
- [retrieveAll](EventServiceDriver.md#retrieveall)
- [retrieveAllEventUserTickets](EventServiceDriver.md#retrievealleventusertickets)
- [retrieveById](EventServiceDriver.md#retrievebyid)
- [retrieveItemEvents](EventServiceDriver.md#retrieveitemevents)
- [save](EventServiceDriver.md#save)
- [saveAll](EventServiceDriver.md#saveall)
- [setApproval](EventServiceDriver.md#setapproval)
- [update](EventServiceDriver.md#update)

## Methods

### addCollection

▸ **addCollection**(`contractAddress`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

drivers/interfaces/EventServiceDriver.interface.ts:20

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

drivers/interfaces/EventServiceDriver.interface.ts:16

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

#### Defined in

drivers/interfaces/EventServiceDriver.interface.ts:18

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<`T`[]\>

#### Returns

`Promise`<`T`[]\>

#### Defined in

drivers/interfaces/EventServiceDriver.interface.ts:10

___

### retrieveAllEventUserTickets

▸ **retrieveAllEventUserTickets**(): `Promise`<`T`[]\>

#### Returns

`Promise`<`T`[]\>

#### Defined in

drivers/interfaces/EventServiceDriver.interface.ts:22

___

### retrieveById

▸ **retrieveById**(`collectionAddress`, `id`): `Promise`<``null`` \| `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionAddress` | `string` |
| `id` | `number` |

#### Returns

`Promise`<``null`` \| `T`\>

#### Defined in

drivers/interfaces/EventServiceDriver.interface.ts:12

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

#### Defined in

drivers/interfaces/EventServiceDriver.interface.ts:24

___

### save

▸ **save**(`t`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<`number`\>

#### Defined in

drivers/interfaces/EventServiceDriver.interface.ts:6

___

### saveAll

▸ **saveAll**(`ts`): `Promise`<`number`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ts` | `T`[] |

#### Returns

`Promise`<`number`[]\>

#### Defined in

drivers/interfaces/EventServiceDriver.interface.ts:8

___

### setApproval

▸ **setApproval**(`contractAddress`, `collectionAddress`, `tokenId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractAddress` | `string` |
| `collectionAddress` | `string` |
| `tokenId` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

drivers/interfaces/EventServiceDriver.interface.ts:26

___

### update

▸ **update**(`newT`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newT` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

drivers/interfaces/EventServiceDriver.interface.ts:14
