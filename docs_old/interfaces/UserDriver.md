[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / UserDriver

# Interface: UserDriver<U\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`User`](../classes/User.md) |

## Hierarchy

- [`EntityDriver`](EntityDriver.md)<`U`\>

  ↳ **`UserDriver`**

## Implemented by

- [`UserDynamoDBDriver`](../classes/UserDynamoDBDriver.md)

## Table of contents

### Methods

- [deleteAll](UserDriver.md#deleteall)
- [deleteById](UserDriver.md#deletebyid)
- [retrieveAll](UserDriver.md#retrieveall)
- [retrieveById](UserDriver.md#retrievebyid)
- [save](UserDriver.md#save)
- [saveAll](UserDriver.md#saveall)
- [update](UserDriver.md#update)

## Methods

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[EntityDriver](EntityDriver.md).[deleteAll](EntityDriver.md#deleteall)

#### Defined in

drivers/interfaces/UserDriver.interface.ts:10

___

### deleteById

▸ **deleteById**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

[EntityDriver](EntityDriver.md).[deleteById](EntityDriver.md#deletebyid)

#### Defined in

drivers/interfaces/UserDriver.interface.ts:11

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<`U`[]\>

#### Returns

`Promise`<`U`[]\>

#### Overrides

[EntityDriver](EntityDriver.md).[retrieveAll](EntityDriver.md#retrieveall)

#### Defined in

drivers/interfaces/UserDriver.interface.ts:7

___

### retrieveById

▸ **retrieveById**(`id`): `Promise`<``null`` \| `U`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<``null`` \| `U`\>

#### Overrides

[EntityDriver](EntityDriver.md).[retrieveById](EntityDriver.md#retrievebyid)

#### Defined in

drivers/interfaces/UserDriver.interface.ts:8

___

### save

▸ **save**(`t`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `U` |

#### Returns

`Promise`<`string`\>

#### Overrides

[EntityDriver](EntityDriver.md).[save](EntityDriver.md#save)

#### Defined in

drivers/interfaces/UserDriver.interface.ts:5

___

### saveAll

▸ **saveAll**(`ts`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ts` | `U`[] |

#### Returns

`Promise`<`string`[]\>

#### Overrides

[EntityDriver](EntityDriver.md).[saveAll](EntityDriver.md#saveall)

#### Defined in

drivers/interfaces/UserDriver.interface.ts:6

___

### update

▸ **update**(`newT`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newT` | `U` |

#### Returns

`Promise`<`void`\>

#### Overrides

[EntityDriver](EntityDriver.md).[update](EntityDriver.md#update)

#### Defined in

drivers/interfaces/UserDriver.interface.ts:9
