[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventMgmtTokenService

# Class: EventMgmtTokenService<U\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`User`](User.md) |

## Table of contents

### Constructors

- [constructor](EventMgmtTokenService.md#constructor)

### Properties

- [\_eventMgmtTokenEthersDriver](EventMgmtTokenService.md#_eventmgmttokenethersdriver)

### Methods

- [addFunds](EventMgmtTokenService.md#addfunds)
- [getBalance](EventMgmtTokenService.md#getbalance)
- [setApproval](EventMgmtTokenService.md#setapproval)

## Constructors

### constructor

• **new EventMgmtTokenService**<`U`\>(`eventMgmtTokenEthersDriver`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`User`](User.md)<`U`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventMgmtTokenEthersDriver` | [`EventMgmtTokenDriver`](../interfaces/EventMgmtTokenDriver.md) |

#### Defined in

services/EventMgmtTokenService.ts:8

## Properties

### \_eventMgmtTokenEthersDriver

• `Protected` **\_eventMgmtTokenEthersDriver**: [`EventMgmtTokenDriver`](../interfaces/EventMgmtTokenDriver.md)

#### Defined in

services/EventMgmtTokenService.ts:6

## Methods

### addFunds

▸ **addFunds**(`u`, `amount`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `u` | `U` |
| `amount` | `number` |

#### Returns

`Promise`<`number`\>

#### Defined in

services/EventMgmtTokenService.ts:12

___

### getBalance

▸ **getBalance**(`u`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `u` | `U` |

#### Returns

`Promise`<`number`\>

#### Defined in

services/EventMgmtTokenService.ts:16

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

services/EventMgmtTokenService.ts:20
