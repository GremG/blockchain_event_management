[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventManagerDriver

# Interface: EventManagerDriver<E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Event`](../classes/Event.md)<`any`\> |

## Hierarchy

- [`EntityDriver`](EntityDriver.md)<`E`\>

  ↳ **`EventManagerDriver`**

## Implemented by

- [`EventManagerEthersDriver`](../classes/EventManagerEthersDriver.md)

## Table of contents

### Methods

- [deleteAll](EventManagerDriver.md#deleteall)
- [deleteById](EventManagerDriver.md#deletebyid)
- [retrieveAll](EventManagerDriver.md#retrieveall)
- [retrieveById](EventManagerDriver.md#retrievebyid)
- [save](EventManagerDriver.md#save)
- [saveAll](EventManagerDriver.md#saveall)
- [update](EventManagerDriver.md#update)

## Methods

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[EntityDriver](EntityDriver.md).[deleteAll](EntityDriver.md#deleteall)

#### Defined in

drivers/interfaces/EventManagerDriver.interface.ts:17

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

drivers/interfaces/EventManagerDriver.interface.ts:19

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<`E`[]\>

#### Returns

`Promise`<`E`[]\>

#### Overrides

[EntityDriver](EntityDriver.md).[retrieveAll](EntityDriver.md#retrieveall)

#### Defined in

drivers/interfaces/EventManagerDriver.interface.ts:11

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

drivers/interfaces/EventManagerDriver.interface.ts:13

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

drivers/interfaces/EventManagerDriver.interface.ts:7

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

drivers/interfaces/EventManagerDriver.interface.ts:9

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

drivers/interfaces/EventManagerDriver.interface.ts:15
