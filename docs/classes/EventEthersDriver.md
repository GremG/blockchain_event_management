[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventEthersDriver

# Class: EventEthersDriver<E, O\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`EventServiceEntity`](EventServiceEntity.md)<`any`\> |
| `O` | extends [`OnChainEventService`](OnChainEventService.md) |

## Implements

- [`EventDriver`](../interfaces/EventDriver.md)<`E`\>

## Table of contents

### Constructors

- [constructor](EventEthersDriver.md#constructor)

### Properties

- [\_contract](EventEthersDriver.md#_contract)
- [\_entityFactory](EventEthersDriver.md#_entityfactory)
- [\_eventId](EventEthersDriver.md#_eventid)
- [\_identityDriver](EventEthersDriver.md#_identitydriver)
- [\_serializer](EventEthersDriver.md#_serializer)

### Methods

- [deleteAll](EventEthersDriver.md#deleteall)
- [deleteById](EventEthersDriver.md#deletebyid)
- [getEventService](EventEthersDriver.md#geteventservice)
- [retrieveAll](EventEthersDriver.md#retrieveall)
- [retrieveById](EventEthersDriver.md#retrievebyid)
- [save](EventEthersDriver.md#save)
- [saveAll](EventEthersDriver.md#saveall)
- [update](EventEthersDriver.md#update)

## Constructors

### constructor

• **new EventEthersDriver**<`E`, `O`\>(`identityDriver`, `provider`, `entityFactory`, `serializer`, `contractAddress`, `eventId`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`EventServiceEntity`](EventServiceEntity.md)<`any`, `E`\> |
| `O` | extends [`OnChainEventService`](OnChainEventService.md)<`O`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityDriver` | `IdentityEthersDriver` |
| `provider` | `JsonRpcProvider` |
| `entityFactory` | [`EntityFactory`](../interfaces/EntityFactory.md)<`O`, `E`\> |
| `serializer` | [`EntitySerializer`](../interfaces/EntitySerializer.md)<`O`\> |
| `contractAddress` | `string` |
| `eventId` | `number` |

#### Defined in

drivers/blockchains/EventEthersDriver.ts:27

## Properties

### \_contract

• `Private` **\_contract**: `EventVerifier`

#### Defined in

drivers/blockchains/EventEthersDriver.ts:19

___

### \_entityFactory

• `Private` **\_entityFactory**: [`EntityFactory`](../interfaces/EntityFactory.md)<`O`, `E`\>

#### Defined in

drivers/blockchains/EventEthersDriver.ts:21

___

### \_eventId

• `Private` **\_eventId**: `number`

#### Defined in

drivers/blockchains/EventEthersDriver.ts:25

___

### \_identityDriver

• `Private` **\_identityDriver**: `IdentityEthersDriver`

#### Defined in

drivers/blockchains/EventEthersDriver.ts:17

___

### \_serializer

• `Private` **\_serializer**: [`EntitySerializer`](../interfaces/EntitySerializer.md)<`O`\>

#### Defined in

drivers/blockchains/EventEthersDriver.ts:23

## Methods

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[EventDriver](../interfaces/EventDriver.md).[deleteAll](../interfaces/EventDriver.md#deleteall)

#### Defined in

drivers/blockchains/EventEthersDriver.ts:131

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

[EventDriver](../interfaces/EventDriver.md).[deleteById](../interfaces/EventDriver.md#deletebyid)

#### Defined in

drivers/blockchains/EventEthersDriver.ts:135

___

### getEventService

▸ `Private` **getEventService**(`id`): `Promise`<`E`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`E`\>

#### Defined in

drivers/blockchains/EventEthersDriver.ts:74

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<`E`[]\>

#### Returns

`Promise`<`E`[]\>

#### Implementation of

[EventDriver](../interfaces/EventDriver.md).[retrieveAll](../interfaces/EventDriver.md#retrieveall)

#### Defined in

drivers/blockchains/EventEthersDriver.ts:85

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

[EventDriver](../interfaces/EventDriver.md).[retrieveById](../interfaces/EventDriver.md#retrievebyid)

#### Defined in

drivers/blockchains/EventEthersDriver.ts:105

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

[EventDriver](../interfaces/EventDriver.md).[save](../interfaces/EventDriver.md#save)

#### Defined in

drivers/blockchains/EventEthersDriver.ts:48

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

[EventDriver](../interfaces/EventDriver.md).[saveAll](../interfaces/EventDriver.md#saveall)

#### Defined in

drivers/blockchains/EventEthersDriver.ts:68

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

[EventDriver](../interfaces/EventDriver.md).[update](../interfaces/EventDriver.md#update)

#### Defined in

drivers/blockchains/EventEthersDriver.ts:115
