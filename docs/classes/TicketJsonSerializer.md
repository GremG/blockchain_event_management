[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / TicketJsonSerializer

# Class: TicketJsonSerializer

Serializes and deserializes Ticket objects to/from JSON format.

## Implements

- [`EntitySerializer`](../interfaces/EntitySerializer.md)<[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>\>

## Table of contents

### Constructors

- [constructor](TicketJsonSerializer.md#constructor)

### Methods

- [deserialize](TicketJsonSerializer.md#deserialize)
- [serialize](TicketJsonSerializer.md#serialize)

## Constructors

### constructor

• **new TicketJsonSerializer**()

## Methods

### deserialize

▸ **deserialize**(`serializedT`): [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>

Deserializes a JSON string into a Ticket object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serializedT` | `string` | The JSON string to deserialize. |

#### Returns

[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>

A new instance of the Ticket class.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[deserialize](../interfaces/EntitySerializer.md#deserialize)

#### Defined in

serializers/offChain/TicketJsonSerializer.ts:56

___

### serialize

▸ **serialize**(`t`): `string`

Serializes a Ticket object to a JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\> | The Ticket object to serialize. |

#### Returns

`string`

A JSON string representing the serialized Ticket.

#### Implementation of

[EntitySerializer](../interfaces/EntitySerializer.md).[serialize](../interfaces/EntitySerializer.md#serialize)

#### Defined in

serializers/offChain/TicketJsonSerializer.ts:23
