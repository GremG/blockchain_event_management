[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / MarketplaceService

# Class: MarketplaceService<E, T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`EventServiceEntity`](EventServiceEntity.md)<`any`\> |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`\> |

## Table of contents

### Constructors

- [constructor](MarketplaceService.md#constructor)

### Properties

- [\_bDriver](MarketplaceService.md#_bdriver)
- [\_marketplaceDriver](MarketplaceService.md#_marketplacedriver)
- [\_tokenDriver](MarketplaceService.md#_tokendriver)

### Methods

- [addUserToWhitelist](MarketplaceService.md#addusertowhitelist)
- [buyItem](MarketplaceService.md#buyitem)
- [delistItem](MarketplaceService.md#delistitem)
- [getListing](MarketplaceService.md#getlisting)
- [getListingItems](MarketplaceService.md#getlistingitems)
- [getPaymentTokenAllowance](MarketplaceService.md#getpaymenttokenallowance)
- [getProceeds](MarketplaceService.md#getproceeds)
- [listItem](MarketplaceService.md#listitem)
- [updateListedItem](MarketplaceService.md#updatelisteditem)
- [verifyUserInWhitelist](MarketplaceService.md#verifyuserinwhitelist)
- [withdrawProceeds](MarketplaceService.md#withdrawproceeds)

## Constructors

### constructor

• **new MarketplaceService**<`E`, `T`\>(`marketplaceDriver`, `bDriver`, `tokenDriver`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`EventServiceEntity`](EventServiceEntity.md)<`any`, `E`\> |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketplaceDriver` | [`MarketplaceDriver`](../interfaces/MarketplaceDriver.md) |
| `bDriver` | [`EventServiceDriver`](../interfaces/EventServiceDriver.md)<`T`\> |
| `tokenDriver` | [`EventMgmtTokenDriver`](../interfaces/EventMgmtTokenDriver.md) |

#### Defined in

services/MarketplaceService.ts:18

## Properties

### \_bDriver

• `Protected` **\_bDriver**: [`EventServiceDriver`](../interfaces/EventServiceDriver.md)<`T`\>

#### Defined in

services/MarketplaceService.ts:14

___

### \_marketplaceDriver

• `Protected` **\_marketplaceDriver**: [`MarketplaceDriver`](../interfaces/MarketplaceDriver.md)

#### Defined in

services/MarketplaceService.ts:12

___

### \_tokenDriver

• `Protected` **\_tokenDriver**: [`EventMgmtTokenDriver`](../interfaces/EventMgmtTokenDriver.md)

#### Defined in

services/MarketplaceService.ts:16

## Methods

### addUserToWhitelist

▸ **addUserToWhitelist**(`u`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `u` | [`User`](User.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

services/MarketplaceService.ts:66

___

### buyItem

▸ **buyItem**(`t`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<`string`\>

#### Defined in

services/MarketplaceService.ts:38

___

### delistItem

▸ **delistItem**(`t`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<`string`\>

#### Defined in

services/MarketplaceService.ts:34

___

### getListing

▸ **getListing**(`t`): `Promise`<[`MarketplaceListing`](MarketplaceListing.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`Promise`<[`MarketplaceListing`](MarketplaceListing.md)\>

#### Defined in

services/MarketplaceService.ts:54

___

### getListingItems

▸ **getListingItems**(): `Promise`<[`MarketplaceListing`](MarketplaceListing.md)[]\>

#### Returns

`Promise`<[`MarketplaceListing`](MarketplaceListing.md)[]\>

#### Defined in

services/MarketplaceService.ts:24

___

### getPaymentTokenAllowance

▸ **getPaymentTokenAllowance**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

services/MarketplaceService.ts:62

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

services/MarketplaceService.ts:58

___

### listItem

▸ **listItem**(`t`, `price`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |
| `price` | `number` |

#### Returns

`Promise`<`string`\>

#### Defined in

services/MarketplaceService.ts:28

___

### updateListedItem

▸ **updateListedItem**(`t`, `price`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |
| `price` | `number` |

#### Returns

`Promise`<`string`\>

#### Defined in

services/MarketplaceService.ts:46

___

### verifyUserInWhitelist

▸ **verifyUserInWhitelist**(`u`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `u` | [`User`](User.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

services/MarketplaceService.ts:70

___

### withdrawProceeds

▸ **withdrawProceeds**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

services/MarketplaceService.ts:50
