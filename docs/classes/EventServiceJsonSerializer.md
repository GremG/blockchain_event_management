[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventServiceJsonSerializer

# Class: EventServiceJsonSerializer

Serializes and deserializes EventService objects to/from JSON format.

## Implements

- [`EntitySerializer`](../interfaces/EntitySerializer.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>\>

## Table of contents

### Constructors

- [constructor](EventServiceJsonSerializer.md#constructor)

### Methods

- [deserialize](EventServiceJsonSerializer.md#deserialize)
- [serialize](EventServiceJsonSerializer.md#serialize)

## Constructors

### constructor

• **new EventServiceJsonSerializer**()

## Methods

### deserialize

▸ **deserialize**(`serializedT`): [`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>

Deserializes a JSON string into an EventService object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serializedT` | `string` | The JSON string to deserialize. |

#### Returns

[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>

A new instance of the EventService class.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[deserialize](../interfaces/EntitySerializer.md#deserialize)

#### Defined in

serializers/offChain/EventServiceJsonSerializer.ts:45

___

### serialize

▸ **serialize**(`e`): `string`

Serializes an EventService object to a JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\> | The EventService object to serialize. |

#### Returns

`string`

A JSON string representing the serialized EventService.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[serialize](../interfaces/EntitySerializer.md#serialize)

#### Defined in

serializers/offChain/EventServiceJsonSerializer.ts:19
