[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EntitySerializer

# Interface: EntitySerializer<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`CheckInMetadataJsonSerializer`](../classes/CheckInMetadataJsonSerializer.md)
- [`EventJsonSerializer`](../classes/EventJsonSerializer.md)
- [`EventServiceJsonSerializer`](../classes/EventServiceJsonSerializer.md)
- [`OnChainEventJsonSerializer`](../classes/OnChainEventJsonSerializer.md)
- [`OnChainEventServiceJsonSerializer`](../classes/OnChainEventServiceJsonSerializer.md)
- [`TicketJsonSerializer`](../classes/TicketJsonSerializer.md)
- [`TicketMetadataJsonSerializer`](../classes/TicketMetadataJsonSerializer.md)
- [`UserJsonSerializer`](../classes/UserJsonSerializer.md)

## Table of contents

### Methods

- [deserialize](EntitySerializer.md#deserialize)
- [serialize](EntitySerializer.md#serialize)

## Methods

### deserialize

▸ **deserialize**(`serializedT`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedT` | `string` |

#### Returns

`T`

#### Defined in

serializers/EntitySerializer.interface.ts:4

___

### serialize

▸ **serialize**(`t`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

#### Returns

`string`

#### Defined in

serializers/EntitySerializer.interface.ts:2
