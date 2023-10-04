[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventMgmtSingleRoyaltyNftEthersDriver

# Class: EventMgmtSingleRoyaltyNftEthersDriver<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`\> |

## Implements

- `EventMgmtSingleRoyaltyNftDriver`<`T`\>

## Table of contents

### Constructors

- [constructor](EventMgmtSingleRoyaltyNftEthersDriver.md#constructor)

### Properties

- [\_contract](EventMgmtSingleRoyaltyNftEthersDriver.md#_contract)
- [\_identityDriver](EventMgmtSingleRoyaltyNftEthersDriver.md#_identitydriver)

### Methods

- [getLastSoldPrice](EventMgmtSingleRoyaltyNftEthersDriver.md#getlastsoldprice)
- [getPrice](EventMgmtSingleRoyaltyNftEthersDriver.md#getprice)
- [getTokenRoyalty](EventMgmtSingleRoyaltyNftEthersDriver.md#gettokenroyalty)
- [isCompatible](EventMgmtSingleRoyaltyNftEthersDriver.md#iscompatible)
- [setDefaultRoyalty](EventMgmtSingleRoyaltyNftEthersDriver.md#setdefaultroyalty)
- [setPrice](EventMgmtSingleRoyaltyNftEthersDriver.md#setprice)
- [setTokenRoyalty](EventMgmtSingleRoyaltyNftEthersDriver.md#settokenroyalty)

## Constructors

### constructor

• **new EventMgmtSingleRoyaltyNftEthersDriver**<`T`\>(`identityDriver`, `provider`, `contractAddress`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityDriver` | `IdentityEthersDriver` |
| `provider` | `JsonRpcProvider` |
| `contractAddress` | `string` |

#### Defined in

drivers/blockchains/EventMgmtSingleRoyaltyNftEthersDriver.ts:22

## Properties

### \_contract

• `Private` **\_contract**: `EventMgmtSingleRoyaltyNft`

#### Defined in

drivers/blockchains/EventMgmtSingleRoyaltyNftEthersDriver.ts:20

___

### \_identityDriver

• `Private` **\_identityDriver**: `IdentityEthersDriver`

#### Defined in

drivers/blockchains/EventMgmtSingleRoyaltyNftEthersDriver.ts:18

## Methods

### getLastSoldPrice

▸ **getLastSoldPrice**(`t`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<`number`\>

#### Implementation of

EventMgmtSingleRoyaltyNftDriver.getLastSoldPrice

#### Defined in

drivers/blockchains/EventMgmtSingleRoyaltyNftEthersDriver.ts:34

___

### getPrice

▸ **getPrice**(`t`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<`number`\>

#### Implementation of

EventMgmtSingleRoyaltyNftDriver.getPrice

#### Defined in

drivers/blockchains/EventMgmtSingleRoyaltyNftEthersDriver.ts:42

___

### getTokenRoyalty

▸ **getTokenRoyalty**(`t`): `Promise`<`TokenRoyalty`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<`TokenRoyalty`\>

#### Implementation of

EventMgmtSingleRoyaltyNftDriver.getTokenRoyalty

#### Defined in

drivers/blockchains/EventMgmtSingleRoyaltyNftEthersDriver.ts:50

___

### isCompatible

▸ **isCompatible**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Implementation of

EventMgmtSingleRoyaltyNftDriver.isCompatible

#### Defined in

drivers/blockchains/EventMgmtSingleRoyaltyNftEthersDriver.ts:90

___

### setDefaultRoyalty

▸ **setDefaultRoyalty**(`receiver`, `royalty`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiver` | `string` |
| `royalty` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

EventMgmtSingleRoyaltyNftDriver.setDefaultRoyalty

#### Defined in

drivers/blockchains/EventMgmtSingleRoyaltyNftEthersDriver.ts:60

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

#### Implementation of

EventMgmtSingleRoyaltyNftDriver.setPrice

#### Defined in

drivers/blockchains/EventMgmtSingleRoyaltyNftEthersDriver.ts:70

___

### setTokenRoyalty

▸ **setTokenRoyalty**(`t`, `receiver`, `royalty`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |
| `receiver` | `string` |
| `royalty` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

EventMgmtSingleRoyaltyNftDriver.setTokenRoyalty

#### Defined in

drivers/blockchains/EventMgmtSingleRoyaltyNftEthersDriver.ts:80
