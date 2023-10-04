[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / StatisticService

# Class: StatisticService<T, L\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`\> |
| `L` | extends `LogEventType` |

## Table of contents

### Constructors

- [constructor](StatisticService.md#constructor)

### Properties

- [\_statisticDriver](StatisticService.md#_statisticdriver)

### Methods

- [retrieveItemEvents](StatisticService.md#retrieveitemevents)

## Constructors

### constructor

• **new StatisticService**<`T`, `L`\>(`statisticDriver`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`, `T`\> |
| `L` | extends `LogEventType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `statisticDriver` | [`StatisticDriver`](StatisticDriver.md)<`T`, `L`\> |

#### Defined in

services/StatisticService.ts:10

## Properties

### \_statisticDriver

• `Protected` **\_statisticDriver**: [`StatisticDriver`](StatisticDriver.md)<`T`, `L`\>

#### Defined in

services/StatisticService.ts:8

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

services/StatisticService.ts:14
