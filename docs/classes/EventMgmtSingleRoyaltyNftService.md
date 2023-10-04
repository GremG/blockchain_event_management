[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventMgmtSingleRoyaltyNftService

# Class: EventMgmtSingleRoyaltyNftService<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`\> |

## Table of contents

### Constructors

- [constructor](EventMgmtSingleRoyaltyNftService.md#constructor)

### Properties

- [\_eventMgmtSingleRoyaltyNftEthersDriver](EventMgmtSingleRoyaltyNftService.md#_eventmgmtsingleroyaltynftethersdriver)

### Methods

- [getLastSoldPrice](EventMgmtSingleRoyaltyNftService.md#getlastsoldprice)
- [getPrice](EventMgmtSingleRoyaltyNftService.md#getprice)
- [isCompatible](EventMgmtSingleRoyaltyNftService.md#iscompatible)
- [setPrice](EventMgmtSingleRoyaltyNftService.md#setprice)

## Constructors

### constructor

• **new EventMgmtSingleRoyaltyNftService**<`T`\>(`eventMgmtSingleRoyaltyNftEthersDriver`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventMgmtSingleRoyaltyNftEthersDriver` | `EventMgmtSingleRoyaltyNftDriver`<`T`\> |

#### Defined in

services/EventMgmtSingleRoyaltyNftService.ts:7

## Properties

### \_eventMgmtSingleRoyaltyNftEthersDriver

• `Protected` **\_eventMgmtSingleRoyaltyNftEthersDriver**: `EventMgmtSingleRoyaltyNftDriver`<`T`\>

#### Defined in

services/EventMgmtSingleRoyaltyNftService.ts:5

## Methods

### getLastSoldPrice

▸ **getLastSoldPrice**(`t`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<`number`\>

#### Defined in

services/EventMgmtSingleRoyaltyNftService.ts:19

___

### getPrice

▸ **getPrice**(`t`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<`number`\>

#### Defined in

services/EventMgmtSingleRoyaltyNftService.ts:15

___

### isCompatible

▸ **isCompatible**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

services/EventMgmtSingleRoyaltyNftService.ts:23

___

### setPrice

▸ **setPrice**(`t`, `price`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |
| `price` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

services/EventMgmtSingleRoyaltyNftService.ts:11
