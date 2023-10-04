[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / MarketplaceDriver

# Interface: MarketplaceDriver

## Implemented by

- [`MarketplaceEthersDriver`](../classes/MarketplaceEthersDriver.md)

## Table of contents

### Accessors

- [contractAddress](MarketplaceDriver.md#contractaddress)

### Methods

- [addEthAddressToWhitelist](MarketplaceDriver.md#addethaddresstowhitelist)
- [buyItem](MarketplaceDriver.md#buyitem)
- [delistItem](MarketplaceDriver.md#delistitem)
- [getListing](MarketplaceDriver.md#getlisting)
- [getListingItems](MarketplaceDriver.md#getlistingitems)
- [getPaymentTokenAllowance](MarketplaceDriver.md#getpaymenttokenallowance)
- [getProceeds](MarketplaceDriver.md#getproceeds)
- [listItem](MarketplaceDriver.md#listitem)
- [updateListedItem](MarketplaceDriver.md#updatelisteditem)
- [verifyEthAddressInWhitelist](MarketplaceDriver.md#verifyethaddressinwhitelist)
- [withdrawProceeds](MarketplaceDriver.md#withdrawproceeds)

## Accessors

### contractAddress

• `get` **contractAddress**(): `string`

#### Returns

`string`

#### Defined in

drivers/interfaces/MarketplaceDriver.interface.ts:15

## Methods

### addEthAddressToWhitelist

▸ **addEthAddressToWhitelist**(`ethAddress`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethAddress` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

drivers/interfaces/MarketplaceDriver.interface.ts:13

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

#### Defined in

drivers/interfaces/MarketplaceDriver.interface.ts:7

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

#### Defined in

drivers/interfaces/MarketplaceDriver.interface.ts:6

___

### getListing

▸ **getListing**(`address`, `tokenId`): `Promise`<[`MarketplaceListing`](../classes/MarketplaceListing.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `tokenId` | `number` |

#### Returns

`Promise`<[`MarketplaceListing`](../classes/MarketplaceListing.md)\>

#### Defined in

drivers/interfaces/MarketplaceDriver.interface.ts:10

___

### getListingItems

▸ **getListingItems**(): `Promise`<[`MarketplaceListing`](../classes/MarketplaceListing.md)[]\>

#### Returns

`Promise`<[`MarketplaceListing`](../classes/MarketplaceListing.md)[]\>

#### Defined in

drivers/interfaces/MarketplaceDriver.interface.ts:4

___

### getPaymentTokenAllowance

▸ **getPaymentTokenAllowance**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

drivers/interfaces/MarketplaceDriver.interface.ts:12

___

### getProceeds

▸ **getProceeds**(`seller`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `seller` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

drivers/interfaces/MarketplaceDriver.interface.ts:11

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

#### Defined in

drivers/interfaces/MarketplaceDriver.interface.ts:5

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

#### Defined in

drivers/interfaces/MarketplaceDriver.interface.ts:8

___

### verifyEthAddressInWhitelist

▸ **verifyEthAddressInWhitelist**(`ethAddress`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethAddress` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

drivers/interfaces/MarketplaceDriver.interface.ts:14

___

### withdrawProceeds

▸ **withdrawProceeds**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

drivers/interfaces/MarketplaceDriver.interface.ts:9
