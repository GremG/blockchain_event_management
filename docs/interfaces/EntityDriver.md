[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EntityDriver

# Interface: EntityDriver<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EventMgmtType`](../modules.md#eventmgmttype) |

## Hierarchy

- **`EntityDriver`**

  ↳ [`EventManagerDriver`](EventManagerDriver.md)

  ↳ [`EventDriver`](EventDriver.md)

  ↳ [`UserDriver`](UserDriver.md)

## Table of contents

### Methods

- [deleteAll](EntityDriver.md#deleteall)
- [deleteById](EntityDriver.md#deletebyid)
- [retrieveAll](EntityDriver.md#retrieveall)
- [retrieveById](EntityDriver.md#retrievebyid)
- [save](EntityDriver.md#save)
- [saveAll](EntityDriver.md#saveall)
- [update](EntityDriver.md#update)

## Methods

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

drivers/interfaces/EntityDriver.interface.ts:9

___

### deleteById

▸ **deleteById**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

drivers/interfaces/EntityDriver.interface.ts:10

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<`T`[]\>

#### Returns

`Promise`<`T`[]\>

#### Defined in

drivers/interfaces/EntityDriver.interface.ts:6

___

### retrieveById

▸ **retrieveById**(`id`): `Promise`<``null`` \| `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`Promise`<``null`` \| `T`\>

#### Defined in

drivers/interfaces/EntityDriver.interface.ts:7

___

### save

▸ **save**(`t`): `Promise`<`string` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<`string` \| `number`\>

#### Defined in

drivers/interfaces/EntityDriver.interface.ts:4

___

### saveAll

▸ **saveAll**(`ts`): `Promise`<`string`[] \| `number`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ts` | `T`[] |

#### Returns

`Promise`<`string`[] \| `number`[]\>

#### Defined in

drivers/interfaces/EntityDriver.interface.ts:5

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

drivers/interfaces/EntityDriver.interface.ts:8
