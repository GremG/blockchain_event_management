[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventMgmtCustomNftDriver

# Interface: EventMgmtCustomNftDriver<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](../classes/Ticket.md)<`any`, `any`, `any`\> |

## Implemented by

- [`EventMgmtCustomNftEthersDriver`](../classes/EventMgmtCustomNftEthersDriver.md)

## Table of contents

### Methods

- [getWrappedTokenId](EventMgmtCustomNftDriver.md#getwrappedtokenid)
- [wrapToken](EventMgmtCustomNftDriver.md#wraptoken)

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

drivers/interfaces/EventMgmtCustomNftDriver.interface.ts:6

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

drivers/interfaces/EventMgmtCustomNftDriver.interface.ts:4
