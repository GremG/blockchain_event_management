[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / TicketFactory

# Class: TicketFactory

Represents a factory for creating on-chain and off-chain ticket entities.

## Implements

- [`EntityFactory`](../interfaces/EntityFactory.md)<[`TicketMetadata`](TicketMetadata.md), [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>\>

## Table of contents

### Constructors

- [constructor](TicketFactory.md#constructor)

### Properties

- [\_eDriver](TicketFactory.md#_edriver)
- [\_uDriver](TicketFactory.md#_udriver)

### Methods

- [createOffChainEntity](TicketFactory.md#createoffchainentity)
- [createOnChainEntity](TicketFactory.md#createonchainentity)

## Constructors

### constructor

• **new TicketFactory**(`eDriver`, `uDriver`)

Creates an instance of TicketFactory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eDriver` | [`EntityDriver`](../interfaces/EntityDriver.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>\> | The entity driver for event services. |
| `uDriver` | [`EntityDriver`](../interfaces/EntityDriver.md)<[`User`](User.md)\> | The entity driver for users. |

#### Defined in

factories/entities/TicketFactory.ts:27

## Properties

### \_eDriver

• `Private` **\_eDriver**: [`EntityDriver`](../interfaces/EntityDriver.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>\>

#### Defined in

factories/entities/TicketFactory.ts:18

___

### \_uDriver

• `Private` **\_uDriver**: [`EntityDriver`](../interfaces/EntityDriver.md)<[`User`](User.md)\>

#### Defined in

factories/entities/TicketFactory.ts:20

## Methods

### createOffChainEntity

▸ **createOffChainEntity**(`id`, `ownerEthAddress`, `t`, `status`): `Promise`<[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>\>

Creates an off-chain ticket entity from on-chain ticket metadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The ID of the off-chain ticket entity. |
| `ownerEthAddress` | `string` | The Ethereum address of the ticket owner. |
| `t` | [`TicketMetadata`](TicketMetadata.md) | The on-chain ticket metadata. |
| `status` | `number` | The status of the ticket entity. |

#### Returns

`Promise`<[`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\>\>

A promise that resolves to the corresponding off-chain ticket entity.

**`Throws`**

If there is an error creating the off-chain ticket entity.

#### Implementation of

[EntityFactory](../interfaces/EntityFactory.md).[createOffChainEntity](../interfaces/EntityFactory.md#createoffchainentity)

#### Defined in

factories/entities/TicketFactory.ts:51

___

### createOnChainEntity

▸ **createOnChainEntity**(`t`): [`TicketMetadata`](TicketMetadata.md)

Creates an on-chain entity (TicketMetadata) from an off-chain ticket entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`Ticket`](Ticket.md)<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>, [`User`](User.md), [`TicketMetadata`](TicketMetadata.md)\> | The off-chain ticket entity. |

#### Returns

[`TicketMetadata`](TicketMetadata.md)

The corresponding on-chain ticket metadata.

#### Implementation of

[EntityFactory](../interfaces/EntityFactory.md).[createOnChainEntity](../interfaces/EntityFactory.md#createonchainentity)

#### Defined in

factories/entities/TicketFactory.ts:37
