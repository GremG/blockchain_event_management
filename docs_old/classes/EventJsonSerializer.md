[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventJsonSerializer

# Class: EventJsonSerializer

Serializes and deserializes Event objects to/from JSON format.

## Implements

- [`EntitySerializer`](../interfaces/EntitySerializer.md)<[`Event`](Event.md)<[`User`](User.md)\>\>

## Table of contents

### Constructors

- [constructor](EventJsonSerializer.md#constructor)

### Methods

- [deserialize](EventJsonSerializer.md#deserialize)
- [serialize](EventJsonSerializer.md#serialize)

## Constructors

### constructor

• **new EventJsonSerializer**()

## Methods

### deserialize

▸ **deserialize**(`serializedT`): [`Event`](Event.md)<[`User`](User.md)\>

Deserializes a JSON string into an Event object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serializedT` | `string` | The JSON string to deserialize. |

#### Returns

[`Event`](Event.md)<[`User`](User.md)\>

A new instance of the Event class.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[deserialize](../interfaces/EntitySerializer.md#deserialize)

#### Defined in

serializers/offChain/EventJsonSerializer.ts:45

___

### serialize

▸ **serialize**(`e`): `string`

Serializes an Event object to a JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`Event`](Event.md)<[`User`](User.md)\> | The Event object to serialize. |

#### Returns

`string`

A JSON string representing the serialized Event.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[serialize](../interfaces/EntitySerializer.md#serialize)

#### Defined in

serializers/offChain/EventJsonSerializer.ts:18
