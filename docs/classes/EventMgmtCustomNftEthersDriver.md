[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventMgmtCustomNftEthersDriver

# Class: EventMgmtCustomNftEthersDriver<T, M\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`\> |
| `M` | extends [`TicketMetadata`](TicketMetadata.md) |

## Implements

- [`EventMgmtCustomNftDriver`](../interfaces/EventMgmtCustomNftDriver.md)<`T`\>

## Table of contents

### Constructors

- [constructor](EventMgmtCustomNftEthersDriver.md#constructor)

### Properties

- [\_contract](EventMgmtCustomNftEthersDriver.md#_contract)
- [\_entityFactory](EventMgmtCustomNftEthersDriver.md#_entityfactory)
- [\_identityDriver](EventMgmtCustomNftEthersDriver.md#_identitydriver)
- [\_serializer](EventMgmtCustomNftEthersDriver.md#_serializer)

### Methods

- [getWrappedTokenId](EventMgmtCustomNftEthersDriver.md#getwrappedtokenid)
- [wrapToken](EventMgmtCustomNftEthersDriver.md#wraptoken)

## Constructors

### constructor

• **new EventMgmtCustomNftEthersDriver**<`T`, `M`\>(`identityDriver`, `provider`, `entityFactory`, `serializer`, `contractAddress`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`, `T`\> |
| `M` | extends [`TicketMetadata`](TicketMetadata.md)<`M`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityDriver` | `IdentityEthersDriver` |
| `provider` | `JsonRpcProvider` |
| `entityFactory` | [`EntityFactory`](../interfaces/EntityFactory.md)<`M`, `T`\> |
| `serializer` | [`EntitySerializer`](../interfaces/EntitySerializer.md)<`M`\> |
| `contractAddress` | `string` |

#### Defined in

drivers/blockchains/EventMgmtCustomNftEthersDriver.ts:26

## Properties

### \_contract

• `Private` **\_contract**: `EventMgmtCustomNft`

#### Defined in

drivers/blockchains/EventMgmtCustomNftEthersDriver.ts:20

___

### \_entityFactory

• `Private` **\_entityFactory**: [`EntityFactory`](../interfaces/EntityFactory.md)<`M`, `T`\>

#### Defined in

drivers/blockchains/EventMgmtCustomNftEthersDriver.ts:22

___

### \_identityDriver

• `Private` **\_identityDriver**: `IdentityEthersDriver`

#### Defined in

drivers/blockchains/EventMgmtCustomNftEthersDriver.ts:18

___

### \_serializer

• `Private` **\_serializer**: [`EntitySerializer`](../interfaces/EntitySerializer.md)<`M`\>

#### Defined in

drivers/blockchains/EventMgmtCustomNftEthersDriver.ts:24

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

#### Implementation of

[EventMgmtCustomNftDriver](../interfaces/EventMgmtCustomNftDriver.md).[getWrappedTokenId](../interfaces/EventMgmtCustomNftDriver.md#getwrappedtokenid)

#### Defined in

drivers/blockchains/EventMgmtCustomNftEthersDriver.ts:57

___

### wrapToken

▸ **wrapToken**(`t`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<`number`\>

#### Implementation of

[EventMgmtCustomNftDriver](../interfaces/EventMgmtCustomNftDriver.md).[wrapToken](../interfaces/EventMgmtCustomNftDriver.md#wraptoken)

#### Defined in

drivers/blockchains/EventMgmtCustomNftEthersDriver.ts:44
