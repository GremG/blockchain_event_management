[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventMgmtTokenEthersDriver

# Class: EventMgmtTokenEthersDriver

## Implements

- [`EventMgmtTokenDriver`](../interfaces/EventMgmtTokenDriver.md)

## Table of contents

### Constructors

- [constructor](EventMgmtTokenEthersDriver.md#constructor)

### Properties

- [\_contract](EventMgmtTokenEthersDriver.md#_contract)
- [\_identityDriver](EventMgmtTokenEthersDriver.md#_identitydriver)

### Methods

- [addFunds](EventMgmtTokenEthersDriver.md#addfunds)
- [getBalance](EventMgmtTokenEthersDriver.md#getbalance)
- [setApproval](EventMgmtTokenEthersDriver.md#setapproval)

## Constructors

### constructor

• **new EventMgmtTokenEthersDriver**(`identityDriver`, `provider`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityDriver` | `IdentityEthersDriver` |
| `provider` | `JsonRpcProvider` |
| `contractAddress` | `string` |

#### Defined in

drivers/blockchains/EventMgmtTokenEthersDriver.ts:18

## Properties

### \_contract

• `Private` **\_contract**: `Contract`

#### Defined in

drivers/blockchains/EventMgmtTokenEthersDriver.ts:16

___

### \_identityDriver

• `Private` **\_identityDriver**: `IdentityEthersDriver`

#### Defined in

drivers/blockchains/EventMgmtTokenEthersDriver.ts:14

## Methods

### addFunds

▸ **addFunds**(`address`, `amount`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `amount` | `number` |

#### Returns

`Promise`<`number`\>

#### Implementation of

[EventMgmtTokenDriver](../interfaces/EventMgmtTokenDriver.md).[addFunds](../interfaces/EventMgmtTokenDriver.md#addfunds)

#### Defined in

drivers/blockchains/EventMgmtTokenEthersDriver.ts:30

___

### getBalance

▸ **getBalance**(`address`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`number`\>

#### Implementation of

[EventMgmtTokenDriver](../interfaces/EventMgmtTokenDriver.md).[getBalance](../interfaces/EventMgmtTokenDriver.md#getbalance)

#### Defined in

drivers/blockchains/EventMgmtTokenEthersDriver.ts:42

___

### setApproval

▸ **setApproval**(`spender`, `amount`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `amount` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[EventMgmtTokenDriver](../interfaces/EventMgmtTokenDriver.md).[setApproval](../interfaces/EventMgmtTokenDriver.md#setapproval)

#### Defined in

drivers/blockchains/EventMgmtTokenEthersDriver.ts:50
