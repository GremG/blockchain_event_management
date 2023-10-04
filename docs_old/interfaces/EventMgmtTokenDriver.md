[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventMgmtTokenDriver

# Interface: EventMgmtTokenDriver

## Implemented by

- [`EventMgmtTokenEthersDriver`](../classes/EventMgmtTokenEthersDriver.md)

## Table of contents

### Methods

- [addFunds](EventMgmtTokenDriver.md#addfunds)
- [getBalance](EventMgmtTokenDriver.md#getbalance)
- [setApproval](EventMgmtTokenDriver.md#setapproval)

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

#### Defined in

drivers/interfaces/EventMgmtTokenDriver.interface.ts:2

___

### getBalance

▸ **getBalance**(`address`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

drivers/interfaces/EventMgmtTokenDriver.interface.ts:3

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

#### Defined in

drivers/interfaces/EventMgmtTokenDriver.interface.ts:4
