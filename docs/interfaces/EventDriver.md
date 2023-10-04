[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventDriver

# Interface: EventDriver<E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`EventServiceEntity`](../classes/EventServiceEntity.md)<`any`\> |

## Hierarchy

- [`EntityDriver`](EntityDriver.md)<`E`\>

  ↳ **`EventDriver`**

## Implemented by

- [`EventEthersDriver`](../classes/EventEthersDriver.md)

## Table of contents

### Methods

- [deleteAll](EventDriver.md#deleteall)
- [deleteById](EventDriver.md#deletebyid)
- [retrieveAll](EventDriver.md#retrieveall)
- [retrieveById](EventDriver.md#retrievebyid)
- [save](EventDriver.md#save)
- [saveAll](EventDriver.md#saveall)
- [update](EventDriver.md#update)

## Methods

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[EntityDriver](EntityDriver.md).[deleteAll](EntityDriver.md#deleteall)

#### Defined in

drivers/interfaces/EventDriver.interface.ts:19

___

### deleteById

▸ **deleteById**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`void`\>

#### Overrides

[EntityDriver](EntityDriver.md).[deleteById](EntityDriver.md#deletebyid)

#### Defined in

drivers/interfaces/EventDriver.interface.ts:21

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<`E`[]\>

#### Returns

`Promise`<`E`[]\>

#### Overrides

[EntityDriver](EntityDriver.md).[retrieveAll](EntityDriver.md#retrieveall)

#### Defined in

drivers/interfaces/EventDriver.interface.ts:13

___

### retrieveById

▸ **retrieveById**(`id`): `Promise`<``null`` \| `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<``null`` \| `E`\>

#### Overrides

[EntityDriver](EntityDriver.md).[retrieveById](EntityDriver.md#retrievebyid)

#### Defined in

drivers/interfaces/EventDriver.interface.ts:15

___

### save

▸ **save**(`t`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `E` |

#### Returns

`Promise`<`number`\>

#### Overrides

[EntityDriver](EntityDriver.md).[save](EntityDriver.md#save)

#### Defined in

drivers/interfaces/EventDriver.interface.ts:9

___

### saveAll

▸ **saveAll**(`ts`): `Promise`<`number`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ts` | `E`[] |

#### Returns

`Promise`<`number`[]\>

#### Overrides

[EntityDriver](EntityDriver.md).[saveAll](EntityDriver.md#saveall)

#### Defined in

drivers/interfaces/EventDriver.interface.ts:11

___

### update

▸ **update**(`newT`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newT` | `E` |

#### Returns

`Promise`<`void`\>

#### Overrides

[EntityDriver](EntityDriver.md).[update](EntityDriver.md#update)

#### Defined in

drivers/interfaces/EventDriver.interface.ts:17
