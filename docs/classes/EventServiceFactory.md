[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventServiceFactory

# Class: EventServiceFactory

Represents a factory for creating on-chain and off-chain entities related to event services.

## Implements

- [`EntityFactory`](../interfaces/EntityFactory.md)<[`OnChainEventService`](OnChainEventService.md), [`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>\>

## Table of contents

### Constructors

- [constructor](EventServiceFactory.md#constructor)

### Properties

- [\_eDriver](EventServiceFactory.md#_edriver)

### Methods

- [createOffChainEntity](EventServiceFactory.md#createoffchainentity)
- [createOnChainEntity](EventServiceFactory.md#createonchainentity)

## Constructors

### constructor

• **new EventServiceFactory**(`eDriver`)

Creates an instance of EventServiceFactory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eDriver` | [`EventManagerDriver`](../interfaces/EventManagerDriver.md)<[`Event`](Event.md)<[`User`](User.md)\>\> | The event manager driver used for retrieving event information. |

#### Defined in

factories/entities/EventServiceFactory.ts:21

## Properties

### \_eDriver

• `Private` **\_eDriver**: [`EventManagerDriver`](../interfaces/EventManagerDriver.md)<[`Event`](Event.md)<[`User`](User.md)\>\>

#### Defined in

factories/entities/EventServiceFactory.ts:15

## Methods

### createOffChainEntity

▸ **createOffChainEntity**(`id`, `ownerEthAddress`, `t`, `status`): `Promise`<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>\>

Creates an off-chain entity (EventService) from an on-chain entity (OnChainEventService).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The ID of the off-chain event service. |
| `ownerEthAddress` | `string` | The Ethereum address of the event service owner. |
| `t` | [`OnChainEventService`](OnChainEventService.md) | The on-chain event service. |
| `status` | `number` | The status of the event service. |

#### Returns

`Promise`<[`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\>\>

A promise that resolves to the corresponding off-chain event service.

**`Throws`**

If there is an error creating the off-chain event service.

#### Implementation of

[EntityFactory](../interfaces/EntityFactory.md).[createOffChainEntity](../interfaces/EntityFactory.md#createoffchainentity)

#### Defined in

factories/entities/EventServiceFactory.ts:43

___

### createOnChainEntity

▸ **createOnChainEntity**(`s`): [`OnChainEventService`](OnChainEventService.md)

Creates an on-chain entity (OnChainEventService) from an off-chain entity (EventService).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | [`EventServiceEntity`](EventServiceEntity.md)<[`Event`](Event.md)<[`User`](User.md)\>\> | The off-chain event service. |

#### Returns

[`OnChainEventService`](OnChainEventService.md)

The corresponding on-chain event service.

#### Implementation of

[EntityFactory](../interfaces/EntityFactory.md).[createOnChainEntity](../interfaces/EntityFactory.md#createonchainentity)

#### Defined in

factories/entities/EventServiceFactory.ts:30
