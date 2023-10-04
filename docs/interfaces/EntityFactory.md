[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EntityFactory

# Interface: EntityFactory<T, S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`OnChainType`](../modules.md#onchaintype) |
| `S` | extends [`OffChainType`](../modules.md#offchaintype) |

## Implemented by

- [`EventFactory`](../classes/EventFactory.md)
- [`EventServiceFactory`](../classes/EventServiceFactory.md)
- [`TicketFactory`](../classes/TicketFactory.md)

## Table of contents

### Methods

- [createOffChainEntity](EntityFactory.md#createoffchainentity)
- [createOnChainEntity](EntityFactory.md#createonchainentity)

## Methods

### createOffChainEntity

▸ **createOffChainEntity**(`id`, `ownerEthAddress`, `t`, `status?`): `Promise`<`S`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |
| `ownerEthAddress` | `string` |
| `t` | `T` |
| `status?` | `number` |

#### Returns

`Promise`<`S`\>

#### Defined in

factories/entities/EntityFactory.interface.ts:8

___

### createOnChainEntity

▸ **createOnChainEntity**(`s`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `S` |

#### Returns

`T`

#### Defined in

factories/entities/EntityFactory.interface.ts:6
