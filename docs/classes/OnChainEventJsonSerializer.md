[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / OnChainEventJsonSerializer

# Class: OnChainEventJsonSerializer

Serializes and deserializes OnChainEvent objects to/from JSON format.

## Implements

- [`EntitySerializer`](../interfaces/EntitySerializer.md)<[`OnChainEvent`](OnChainEvent.md)\>

## Table of contents

### Constructors

- [constructor](OnChainEventJsonSerializer.md#constructor)

### Methods

- [deserialize](OnChainEventJsonSerializer.md#deserialize)
- [serialize](OnChainEventJsonSerializer.md#serialize)

## Constructors

### constructor

• **new OnChainEventJsonSerializer**()

## Methods

### deserialize

▸ **deserialize**(`serializedT`): [`OnChainEvent`](OnChainEvent.md)

Deserializes a JSON string into an OnChainEvent object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serializedT` | `string` | The JSON string to deserialize. |

#### Returns

[`OnChainEvent`](OnChainEvent.md)

A new instance of the OnChainEvent class.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[deserialize](../interfaces/EntitySerializer.md#deserialize)

#### Defined in

serializers/onChain/OnChainEventJsonSerializer.ts:30

___

### serialize

▸ **serialize**(`e`): `string`

Serializes an OnChainEvent object to a JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`OnChainEvent`](OnChainEvent.md) | The OnChainEvent object to serialize. |

#### Returns

`string`

A JSON string representing the serialized OnChainEvent.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[serialize](../interfaces/EntitySerializer.md#serialize)

#### Defined in

serializers/onChain/OnChainEventJsonSerializer.ts:15
