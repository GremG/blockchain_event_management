[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / StatisticDriver

# Class: StatisticDriver<T, L\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`\> |
| `L` | extends `LogEventType` |

## Table of contents

### Constructors

- [constructor](StatisticDriver.md#constructor)

### Properties

- [\_blockchainDriver](StatisticDriver.md#_blockchaindriver)
- [\_logEventFactory](StatisticDriver.md#_logeventfactory)

### Methods

- [retrieveItemEvents](StatisticDriver.md#retrieveitemevents)

## Constructors

### constructor

• **new StatisticDriver**<`T`, `L`\>(`blockchainDriver`, `logEventFactory`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`, `T`\> |
| `L` | extends `LogEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockchainDriver` | [`EventServiceDriver`](../interfaces/EventServiceDriver.md)<`T`\> |
| `logEventFactory` | `LogEventFactory`<`L`\> |

#### Defined in

drivers/StatisticDriver.ts:16

## Properties

### \_blockchainDriver

• `Private` **\_blockchainDriver**: [`EventServiceDriver`](../interfaces/EventServiceDriver.md)<`T`\>

#### Defined in

drivers/StatisticDriver.ts:12

___

### \_logEventFactory

• `Private` **\_logEventFactory**: `LogEventFactory`<`L`\>

#### Defined in

drivers/StatisticDriver.ts:14

## Methods

### retrieveItemEvents

▸ **retrieveItemEvents**(`collectionAddress`, `tokenId`): `Promise`<`L`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionAddress` | `string` |
| `tokenId` | `number` |

#### Returns

`Promise`<`L`[]\>

#### Defined in

drivers/StatisticDriver.ts:24
