[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventMgmtCustomNftService

# Class: EventMgmtCustomNftService<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`\> |

## Table of contents

### Constructors

- [constructor](EventMgmtCustomNftService.md#constructor)

### Properties

- [\_eventMgmtCustomNftEthersDriver](EventMgmtCustomNftService.md#_eventmgmtcustomnftethersdriver)

### Methods

- [getWrappedTokenId](EventMgmtCustomNftService.md#getwrappedtokenid)
- [wrapToken](EventMgmtCustomNftService.md#wraptoken)

## Constructors

### constructor

• **new EventMgmtCustomNftService**<`T`\>(`eventMgmtCustomNftEthersDriver`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventMgmtCustomNftEthersDriver` | [`EventMgmtCustomNftDriver`](../interfaces/EventMgmtCustomNftDriver.md)<`T`\> |

#### Defined in

services/EventMgmtCustomNftService.ts:8

## Properties

### \_eventMgmtCustomNftEthersDriver

• `Protected` **\_eventMgmtCustomNftEthersDriver**: [`EventMgmtCustomNftDriver`](../interfaces/EventMgmtCustomNftDriver.md)<`T`\>

#### Defined in

services/EventMgmtCustomNftService.ts:6

## Methods

### getWrappedTokenId

▸ **getWrappedTokenId**(`collectionAddress`, `tokenId`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionAddress` | `string` |
| `tokenId` | `number` |

#### Returns

`Promise`<`number`\>

#### Defined in

services/EventMgmtCustomNftService.ts:16

___

### wrapToken

▸ **wrapToken**(`t`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<`number`\>

#### Defined in

services/EventMgmtCustomNftService.ts:12
