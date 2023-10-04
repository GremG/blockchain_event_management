[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventFactory

# Class: EventFactory

Represents a factory for creating on-chain and off-chain entities related to events.

## Implements

- [`EntityFactory`](../interfaces/EntityFactory.md)<[`OnChainEvent`](OnChainEvent.md), [`Event`](Event.md)<[`User`](User.md)\>\>

## Table of contents

### Constructors

- [constructor](EventFactory.md#constructor)

### Properties

- [\_uDriver](EventFactory.md#_udriver)

### Methods

- [createOffChainEntity](EventFactory.md#createoffchainentity)
- [createOnChainEntity](EventFactory.md#createonchainentity)

## Constructors

### constructor

• **new EventFactory**(`uDriver`)

Creates an instance of EventFactory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uDriver` | [`UserDriver`](../interfaces/UserDriver.md)<[`User`](User.md)\> | The user driver used for retrieving user information. |

#### Defined in

factories/entities/EventFactory.ts:20

## Properties

### \_uDriver

• `Private` **\_uDriver**: [`UserDriver`](../interfaces/UserDriver.md)<[`User`](User.md)\>

#### Defined in

factories/entities/EventFactory.ts:14

## Methods

### createOffChainEntity

▸ **createOffChainEntity**(`id`, `ownerEthAddress`, `t`, `status`): `Promise`<[`Event`](Event.md)<[`User`](User.md)\>\>

Creates an off-chain entity (Event) from an on-chain entity (OnChainEvent).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The ID of the off-chain event. |
| `ownerEthAddress` | `string` | The Ethereum address of the event owner. |
| `t` | [`OnChainEvent`](OnChainEvent.md) | The on-chain event. |
| `status` | `number` | The status of the event. |

#### Returns

`Promise`<[`Event`](Event.md)<[`User`](User.md)\>\>

A promise that resolves to the corresponding off-chain event.

**`Throws`**

If there is an error creating the off-chain event.

#### Implementation of

[EntityFactory](../interfaces/EntityFactory.md).[createOffChainEntity](../interfaces/EntityFactory.md#createoffchainentity)

#### Defined in

factories/entities/EventFactory.ts:42

___

### createOnChainEntity

▸ **createOnChainEntity**(`s`): [`OnChainEvent`](OnChainEvent.md)

Creates an on-chain entity (OnChainEvent) from an off-chain entity (Event).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | [`Event`](Event.md)<[`User`](User.md)\> | The off-chain event. |

#### Returns

[`OnChainEvent`](OnChainEvent.md)

The corresponding on-chain event.

#### Implementation of

[EntityFactory](../interfaces/EntityFactory.md).[createOnChainEntity](../interfaces/EntityFactory.md#createonchainentity)

#### Defined in

factories/entities/EventFactory.ts:29
