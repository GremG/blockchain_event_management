[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / TicketMetadataJsonSerializer

# Class: TicketMetadataJsonSerializer

Serializes and deserializes TicketMetadata objects to/from JSON format.

## Implements

- [`EntitySerializer`](../interfaces/EntitySerializer.md)<[`TicketMetadata`](TicketMetadata.md)\>

## Table of contents

### Constructors

- [constructor](TicketMetadataJsonSerializer.md#constructor)

### Methods

- [deserialize](TicketMetadataJsonSerializer.md#deserialize)
- [serialize](TicketMetadataJsonSerializer.md#serialize)

## Constructors

### constructor

• **new TicketMetadataJsonSerializer**()

## Methods

### deserialize

▸ **deserialize**(`serializedTicketMetadata`): [`TicketMetadata`](TicketMetadata.md)

Deserializes a JSON string into a TicketMetadata object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serializedTicketMetadata` | `string` | The JSON string to deserialize. |

#### Returns

[`TicketMetadata`](TicketMetadata.md)

A new instance of the TicketMetadata class.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[deserialize](../interfaces/EntitySerializer.md#deserialize)

#### Defined in

serializers/offChain/TicketMetadataJsonSerializer.ts:31

___

### serialize

▸ **serialize**(`ticketMetadata`): `string`

Serializes a TicketMetadata object to a JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ticketMetadata` | [`TicketMetadata`](TicketMetadata.md) | The TicketMetadata object to serialize. |

#### Returns

`string`

A JSON string representing the serialized TicketMetadata.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[serialize](../interfaces/EntitySerializer.md#serialize)

#### Defined in

serializers/offChain/TicketMetadataJsonSerializer.ts:17
