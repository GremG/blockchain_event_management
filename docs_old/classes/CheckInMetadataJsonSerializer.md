[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / CheckInMetadataJsonSerializer

# Class: CheckInMetadataJsonSerializer

Serializes and deserializes CheckInMetadata objects to/from JSON format.

## Implements

- [`EntitySerializer`](../interfaces/EntitySerializer.md)<[`CheckInMetadata`](CheckInMetadata.md)\>

## Table of contents

### Constructors

- [constructor](CheckInMetadataJsonSerializer.md#constructor)

### Methods

- [deserialize](CheckInMetadataJsonSerializer.md#deserialize)
- [serialize](CheckInMetadataJsonSerializer.md#serialize)

## Constructors

### constructor

• **new CheckInMetadataJsonSerializer**()

## Methods

### deserialize

▸ **deserialize**(`serializedMetadata`): [`CheckInMetadata`](CheckInMetadata.md)

Deserializes a JSON string into a CheckInMetadata object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serializedMetadata` | `string` | The JSON string to deserialize. |

#### Returns

[`CheckInMetadata`](CheckInMetadata.md)

A new instance of the CheckInMetadata class.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[deserialize](../interfaces/EntitySerializer.md#deserialize)

#### Defined in

serializers/offChain/CheckInMetadataJsonSerializer.ts:31

___

### serialize

▸ **serialize**(`checkInMetadata`): `string`

Serializes a CheckInMetadata object to a JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `checkInMetadata` | [`CheckInMetadata`](CheckInMetadata.md) | The CheckInMetadata object to serialize. |

#### Returns

`string`

A JSON string representing the serialized CheckInMetadata.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[serialize](../interfaces/EntitySerializer.md#serialize)

#### Defined in

serializers/offChain/CheckInMetadataJsonSerializer.ts:15
