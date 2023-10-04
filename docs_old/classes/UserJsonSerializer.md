[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / UserJsonSerializer

# Class: UserJsonSerializer

Serializes and deserializes User objects to/from JSON format.

## Implements

- [`EntitySerializer`](../interfaces/EntitySerializer.md)<[`User`](User.md)\>

## Table of contents

### Constructors

- [constructor](UserJsonSerializer.md#constructor)

### Methods

- [deserialize](UserJsonSerializer.md#deserialize)
- [serialize](UserJsonSerializer.md#serialize)

## Constructors

### constructor

• **new UserJsonSerializer**()

## Methods

### deserialize

▸ **deserialize**(`serializedT`): [`User`](User.md)

Deserializes a JSON string into a User object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serializedT` | `string` | The JSON string to deserialize. |

#### Returns

[`User`](User.md)

A new instance of the User class.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[deserialize](../interfaces/EntitySerializer.md#deserialize)

#### Defined in

serializers/offChain/UserJsonSerializer.ts:26

___

### serialize

▸ **serialize**(`u`): `string`

Serializes a User object to a JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `u` | [`User`](User.md) | The User object to serialize. |

#### Returns

`string`

A JSON string representing the serialized User.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[serialize](../interfaces/EntitySerializer.md#serialize)

#### Defined in

serializers/offChain/UserJsonSerializer.ts:15
