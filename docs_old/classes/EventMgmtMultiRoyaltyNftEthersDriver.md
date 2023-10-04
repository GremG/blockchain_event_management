[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventMgmtMultiRoyaltyNftEthersDriver

# Class: EventMgmtMultiRoyaltyNftEthersDriver<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`\> |

## Implements

- `EventMgmtSingleRoyaltyNftDriver`<`T`\>

## Table of contents

### Constructors

- [constructor](EventMgmtMultiRoyaltyNftEthersDriver.md#constructor)

### Properties

- [\_contract](EventMgmtMultiRoyaltyNftEthersDriver.md#_contract)
- [\_identityDriver](EventMgmtMultiRoyaltyNftEthersDriver.md#_identitydriver)

### Methods

- [addDefaultRoyalty](EventMgmtMultiRoyaltyNftEthersDriver.md#adddefaultroyalty)
- [addTokenRoyalty](EventMgmtMultiRoyaltyNftEthersDriver.md#addtokenroyalty)
- [getLastSoldPrice](EventMgmtMultiRoyaltyNftEthersDriver.md#getlastsoldprice)
- [getPrice](EventMgmtMultiRoyaltyNftEthersDriver.md#getprice)
- [getTokenRoyalty](EventMgmtMultiRoyaltyNftEthersDriver.md#gettokenroyalty)
- [isCompatible](EventMgmtMultiRoyaltyNftEthersDriver.md#iscompatible)
- [setPrice](EventMgmtMultiRoyaltyNftEthersDriver.md#setprice)

## Constructors

### constructor

• **new EventMgmtMultiRoyaltyNftEthersDriver**<`T`\>(`identityDriver`, `provider`, `contractAddress`)

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

drivers/blockchains/EventMgmtMultiRoyaltyNftEthersDriver.ts:19

## Properties

### \_contract

• `Private` **\_contract**: `EventMgmtMultiRoyaltyNft`

#### Defined in

drivers/blockchains/EventMgmtMultiRoyaltyNftEthersDriver.ts:17

___

### \_identityDriver

• `Private` **\_identityDriver**: `IdentityEthersDriver`

#### Defined in

drivers/blockchains/EventMgmtMultiRoyaltyNftEthersDriver.ts:15

## Methods

### addDefaultRoyalty

▸ **addDefaultRoyalty**(`receiver`, `royalty`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `receiver` | `string` |
| `royalty` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

EventMgmtMultiRoyaltyNftDriver.addDefaultRoyalty

#### Defined in

drivers/blockchains/EventMgmtMultiRoyaltyNftEthersDriver.ts:57

___

### addTokenRoyalty

▸ **addTokenRoyalty**(`t`, `receiver`, `royalty`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |
| `receiver` | `string` |
| `royalty` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

EventMgmtMultiRoyaltyNftDriver.addTokenRoyalty

#### Defined in

drivers/blockchains/EventMgmtMultiRoyaltyNftEthersDriver.ts:77

___

### getLastSoldPrice

▸ **getLastSoldPrice**(`t`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<`number`\>

#### Implementation of

EventMgmtMultiRoyaltyNftDriver.getLastSoldPrice

#### Defined in

drivers/blockchains/EventMgmtMultiRoyaltyNftEthersDriver.ts:31

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

EventMgmtMultiRoyaltyNftDriver.getPrice

#### Defined in

drivers/blockchains/EventMgmtMultiRoyaltyNftEthersDriver.ts:39

___

### getTokenRoyalty

▸ **getTokenRoyalty**(`t`, `index`): `Promise`<`TokenRoyalty`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |
| `index` | `number` |

#### Returns

`Promise`<`TokenRoyalty`\>

#### Implementation of

EventMgmtMultiRoyaltyNftDriver.getTokenRoyalty

#### Defined in

drivers/blockchains/EventMgmtMultiRoyaltyNftEthersDriver.ts:47

___

### isCompatible

▸ **isCompatible**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Implementation of

EventMgmtMultiRoyaltyNftDriver.isCompatible

#### Defined in

drivers/blockchains/EventMgmtMultiRoyaltyNftEthersDriver.ts:87

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

EventMgmtMultiRoyaltyNftDriver.setPrice

#### Defined in

drivers/blockchains/EventMgmtMultiRoyaltyNftEthersDriver.ts:67
