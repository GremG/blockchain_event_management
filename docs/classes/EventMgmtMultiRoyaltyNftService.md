[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventMgmtMultiRoyaltyNftService

# Class: EventMgmtMultiRoyaltyNftService<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`\> |

## Table of contents

### Constructors

- [constructor](EventMgmtMultiRoyaltyNftService.md#constructor)

### Properties

- [\_eventMgmtMultiRoyaltyNftEthersDriver](EventMgmtMultiRoyaltyNftService.md#_eventmgmtmultiroyaltynftethersdriver)

### Methods

- [getLastSoldPrice](EventMgmtMultiRoyaltyNftService.md#getlastsoldprice)
- [getPrice](EventMgmtMultiRoyaltyNftService.md#getprice)
- [isCompatible](EventMgmtMultiRoyaltyNftService.md#iscompatible)
- [setPrice](EventMgmtMultiRoyaltyNftService.md#setprice)

## Constructors

### constructor

• **new EventMgmtMultiRoyaltyNftService**<`T`\>(`eventMgmtMultiRoyaltyNftEthersDriver`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventMgmtMultiRoyaltyNftEthersDriver` | `EventMgmtSingleRoyaltyNftDriver`<`T`\> |

#### Defined in

services/EventMgmtMultiRoyaltyNftService.ts:7

## Properties

### \_eventMgmtMultiRoyaltyNftEthersDriver

• `Protected` **\_eventMgmtMultiRoyaltyNftEthersDriver**: `EventMgmtSingleRoyaltyNftDriver`<`T`\>

#### Defined in

services/EventMgmtMultiRoyaltyNftService.ts:5

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

services/EventMgmtMultiRoyaltyNftService.ts:19

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

services/EventMgmtMultiRoyaltyNftService.ts:15

___

### isCompatible

▸ **isCompatible**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

services/EventMgmtMultiRoyaltyNftService.ts:23

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

services/EventMgmtMultiRoyaltyNftService.ts:11
