[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventManagerEthersDriver

# Class: EventManagerEthersDriver<E, O\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Event`](Event.md)<`any`\> |
| `O` | extends [`OnChainEvent`](OnChainEvent.md) |

## Implements

- [`EventManagerDriver`](../interfaces/EventManagerDriver.md)<`E`\>

## Table of contents

### Constructors

- [constructor](EventManagerEthersDriver.md#constructor)

### Properties

- [\_contract](EventManagerEthersDriver.md#_contract)
- [\_entityFactory](EventManagerEthersDriver.md#_entityfactory)
- [\_identityDriver](EventManagerEthersDriver.md#_identitydriver)
- [\_serializer](EventManagerEthersDriver.md#_serializer)

### Methods

- [deleteAll](EventManagerEthersDriver.md#deleteall)
- [deleteById](EventManagerEthersDriver.md#deletebyid)
- [getEvent](EventManagerEthersDriver.md#getevent)
- [retrieveAll](EventManagerEthersDriver.md#retrieveall)
- [retrieveById](EventManagerEthersDriver.md#retrievebyid)
- [save](EventManagerEthersDriver.md#save)
- [saveAll](EventManagerEthersDriver.md#saveall)
- [update](EventManagerEthersDriver.md#update)

## Constructors

### constructor

• **new EventManagerEthersDriver**<`E`, `O`\>(`identityDriver`, `provider`, `entityFactory`, `serializer`, `contractAddress`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Event`](Event.md)<`any`, `E`\> |
| `O` | extends [`OnChainEvent`](OnChainEvent.md)<`O`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityDriver` | `IdentityEthersDriver` |
| `provider` | `JsonRpcProvider` |
| `entityFactory` | [`EntityFactory`](../interfaces/EntityFactory.md)<`O`, `E`\> |
| `serializer` | [`EntitySerializer`](../interfaces/EntitySerializer.md)<`O`\> |
| `contractAddress` | `string` |

#### Defined in

drivers/blockchains/EventManagerEthersDriver.ts:26

## Properties

### \_contract

• `Protected` **\_contract**: `EventVerifier`

#### Defined in

drivers/blockchains/EventManagerEthersDriver.ts:20

___

### \_entityFactory

• `Protected` **\_entityFactory**: [`EntityFactory`](../interfaces/EntityFactory.md)<`O`, `E`\>

#### Defined in

drivers/blockchains/EventManagerEthersDriver.ts:22

___

### \_identityDriver

• `Protected` **\_identityDriver**: `IdentityEthersDriver`

#### Defined in

drivers/blockchains/EventManagerEthersDriver.ts:18

___

### \_serializer

• `Protected` **\_serializer**: [`EntitySerializer`](../interfaces/EntitySerializer.md)<`O`\>

#### Defined in

drivers/blockchains/EventManagerEthersDriver.ts:24

## Methods

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[EventManagerDriver](../interfaces/EventManagerDriver.md).[deleteAll](../interfaces/EventManagerDriver.md#deleteall)

#### Defined in

drivers/blockchains/EventManagerEthersDriver.ts:122

___

### deleteById

▸ **deleteById**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[EventManagerDriver](../interfaces/EventManagerDriver.md).[deleteById](../interfaces/EventManagerDriver.md#deletebyid)

#### Defined in

drivers/blockchains/EventManagerEthersDriver.ts:126

___

### getEvent

▸ `Private` **getEvent**(`eventId`): `Promise`<`E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventId` | `number` |

#### Returns

`Promise`<`E`\>

#### Defined in

drivers/blockchains/EventManagerEthersDriver.ts:70

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<`E`[]\>

It retrieves all the events from the blockchain and returns them as an array of
BlockchainEntity objects

#### Returns

`Promise`<`E`[]\>

An array of BlockchainEntity<EventData>

#### Implementation of

[EventManagerDriver](../interfaces/EventManagerDriver.md).[retrieveAll](../interfaces/EventManagerDriver.md#retrieveall)

#### Defined in

drivers/blockchains/EventManagerEthersDriver.ts:83

___

### retrieveById

▸ **retrieveById**(`id`): `Promise`<``null`` \| `E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<``null`` \| `E`\>

#### Implementation of

[EventManagerDriver](../interfaces/EventManagerDriver.md).[retrieveById](../interfaces/EventManagerDriver.md#retrievebyid)

#### Defined in

drivers/blockchains/EventManagerEthersDriver.ts:99

___

### save

▸ **save**(`t`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `E` |

#### Returns

`Promise`<`number`\>

#### Implementation of

[EventManagerDriver](../interfaces/EventManagerDriver.md).[save](../interfaces/EventManagerDriver.md#save)

#### Defined in

drivers/blockchains/EventManagerEthersDriver.ts:44

___

### saveAll

▸ **saveAll**(`ts`): `Promise`<`number`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ts` | `E`[] |

#### Returns

`Promise`<`number`[]\>

#### Implementation of

[EventManagerDriver](../interfaces/EventManagerDriver.md).[saveAll](../interfaces/EventManagerDriver.md#saveall)

#### Defined in

drivers/blockchains/EventManagerEthersDriver.ts:64

___

### update

▸ **update**(`newT`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newT` | `E` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[EventManagerDriver](../interfaces/EventManagerDriver.md).[update](../interfaces/EventManagerDriver.md#update)

#### Defined in

drivers/blockchains/EventManagerEthersDriver.ts:108
