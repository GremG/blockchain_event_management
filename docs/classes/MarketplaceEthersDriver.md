[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / MarketplaceEthersDriver

# Class: MarketplaceEthersDriver

## Implements

- [`MarketplaceDriver`](../interfaces/MarketplaceDriver.md)

## Table of contents

### Constructors

- [constructor](MarketplaceEthersDriver.md#constructor)

### Properties

- [\_contract](MarketplaceEthersDriver.md#_contract)
- [\_contractAddress](MarketplaceEthersDriver.md#_contractaddress)
- [\_identityDriver](MarketplaceEthersDriver.md#_identitydriver)
- [\_listingFactory](MarketplaceEthersDriver.md#_listingfactory)

### Accessors

- [contractAddress](MarketplaceEthersDriver.md#contractaddress)

### Methods

- [addEthAddressToWhitelist](MarketplaceEthersDriver.md#addethaddresstowhitelist)
- [buyItem](MarketplaceEthersDriver.md#buyitem)
- [delistItem](MarketplaceEthersDriver.md#delistitem)
- [getListing](MarketplaceEthersDriver.md#getlisting)
- [getListingItems](MarketplaceEthersDriver.md#getlistingitems)
- [getPaymentTokenAllowance](MarketplaceEthersDriver.md#getpaymenttokenallowance)
- [getProceeds](MarketplaceEthersDriver.md#getproceeds)
- [listItem](MarketplaceEthersDriver.md#listitem)
- [updateListedItem](MarketplaceEthersDriver.md#updatelisteditem)
- [verifyEthAddressInWhitelist](MarketplaceEthersDriver.md#verifyethaddressinwhitelist)
- [withdrawProceeds](MarketplaceEthersDriver.md#withdrawproceeds)

## Constructors

### constructor

• **new MarketplaceEthersDriver**(`identityDriver`, `provider`, `listingFactory`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityDriver` | `IdentityEthersDriver` |
| `provider` | `JsonRpcProvider` |
| `listingFactory` | [`MarketplaceListingFactory`](MarketplaceListingFactory.md) |
| `contractAddress` | `string` |

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:26

## Properties

### \_contract

• `Private` **\_contract**: `Marketplace`

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:20

___

### \_contractAddress

• `Private` **\_contractAddress**: `string`

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:24

___

### \_identityDriver

• `Private` **\_identityDriver**: `IdentityEthersDriver`

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:18

___

### \_listingFactory

• `Private` **\_listingFactory**: [`MarketplaceListingFactory`](MarketplaceListingFactory.md)

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:22

## Accessors

### contractAddress

• `get` **contractAddress**(): `string`

#### Returns

`string`

#### Implementation of

MarketplaceDriver.contractAddress

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:195

## Methods

### addEthAddressToWhitelist

▸ **addEthAddressToWhitelist**(`ethAddress`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethAddress` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[MarketplaceDriver](../interfaces/MarketplaceDriver.md).[addEthAddressToWhitelist](../interfaces/MarketplaceDriver.md#addethaddresstowhitelist)

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:173

___

### buyItem

▸ **buyItem**(`address`, `tokenId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `tokenId` | `number` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[MarketplaceDriver](../interfaces/MarketplaceDriver.md).[buyItem](../interfaces/MarketplaceDriver.md#buyitem)

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:97

___

### delistItem

▸ **delistItem**(`address`, `tokenId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `tokenId` | `number` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[MarketplaceDriver](../interfaces/MarketplaceDriver.md).[delistItem](../interfaces/MarketplaceDriver.md#delistitem)

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:83

___

### getListing

▸ **getListing**(`address`, `tokenId`): `Promise`<[`MarketplaceListing`](MarketplaceListing.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `tokenId` | `number` |

#### Returns

`Promise`<[`MarketplaceListing`](MarketplaceListing.md)\>

#### Implementation of

[MarketplaceDriver](../interfaces/MarketplaceDriver.md).[getListing](../interfaces/MarketplaceDriver.md#getlisting)

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:140

___

### getListingItems

▸ **getListingItems**(): `Promise`<[`MarketplaceListing`](MarketplaceListing.md)[]\>

#### Returns

`Promise`<[`MarketplaceListing`](MarketplaceListing.md)[]\>

#### Implementation of

[MarketplaceDriver](../interfaces/MarketplaceDriver.md).[getListingItems](../interfaces/MarketplaceDriver.md#getlistingitems)

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:43

___

### getPaymentTokenAllowance

▸ **getPaymentTokenAllowance**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Implementation of

[MarketplaceDriver](../interfaces/MarketplaceDriver.md).[getPaymentTokenAllowance](../interfaces/MarketplaceDriver.md#getpaymenttokenallowance)

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:165

___

### getProceeds

▸ **getProceeds**(`seller`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `seller` | `string` |

#### Returns

`Promise`<`number`\>

#### Implementation of

[MarketplaceDriver](../interfaces/MarketplaceDriver.md).[getProceeds](../interfaces/MarketplaceDriver.md#getproceeds)

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:153

___

### listItem

▸ **listItem**(`address`, `tokenId`, `price`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `tokenId` | `number` |
| `price` | `number` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[MarketplaceDriver](../interfaces/MarketplaceDriver.md).[listItem](../interfaces/MarketplaceDriver.md#listitem)

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:68

___

### updateListedItem

▸ **updateListedItem**(`address`, `tokenId`, `price`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `tokenId` | `number` |
| `price` | `number` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[MarketplaceDriver](../interfaces/MarketplaceDriver.md).[updateListedItem](../interfaces/MarketplaceDriver.md#updatelisteditem)

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:114

___

### verifyEthAddressInWhitelist

▸ **verifyEthAddressInWhitelist**(`ethAddress`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethAddress` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[MarketplaceDriver](../interfaces/MarketplaceDriver.md).[verifyEthAddressInWhitelist](../interfaces/MarketplaceDriver.md#verifyethaddressinwhitelist)

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:185

___

### withdrawProceeds

▸ **withdrawProceeds**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Implementation of

[MarketplaceDriver](../interfaces/MarketplaceDriver.md).[withdrawProceeds](../interfaces/MarketplaceDriver.md#withdrawproceeds)

#### Defined in

drivers/blockchains/MarketplaceEthersDriver.ts:129
