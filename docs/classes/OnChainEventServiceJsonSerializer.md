[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / OnChainEventServiceJsonSerializer

# Class: OnChainEventServiceJsonSerializer

Serializes and deserializes OnChainEventService objects to/from JSON format.

## Implements

- [`EntitySerializer`](../interfaces/EntitySerializer.md)<[`OnChainEventService`](OnChainEventService.md)\>

## Table of contents

### Constructors

- [constructor](OnChainEventServiceJsonSerializer.md#constructor)

### Methods

- [deserialize](OnChainEventServiceJsonSerializer.md#deserialize)
- [serialize](OnChainEventServiceJsonSerializer.md#serialize)

## Constructors

### constructor

• **new OnChainEventServiceJsonSerializer**()

## Methods

### deserialize

▸ **deserialize**(`serializedT`): [`OnChainEventService`](OnChainEventService.md)

Deserializes a JSON string into an OnChainEventService object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serializedT` | `string` | The JSON string to deserialize. |

#### Returns

[`OnChainEventService`](OnChainEventService.md)

A new instance of the OnChainEventService class.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[deserialize](../interfaces/EntitySerializer.md#deserialize)

#### Defined in

serializers/onChain/OnChainEventServiceJsonSerializer.ts:30

___

### serialize

▸ **serialize**(`e`): `string`

Serializes an OnChainEventService object to a JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`OnChainEventService`](OnChainEventService.md) | The OnChainEventService object to serialize. |

#### Returns

`string`

A JSON string representing the serialized OnChainEventService.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[serialize](../interfaces/EntitySerializer.md#serialize)

#### Defined in

serializers/onChain/OnChainEventServiceJsonSerializer.ts:15
