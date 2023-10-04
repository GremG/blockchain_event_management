[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventService

# Class: EventService<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Event`](Event.md)<`any`\> |

## Table of contents

### Constructors

- [constructor](EventService.md#constructor)

### Properties

- [\_eDriver](EventService.md#_edriver)

### Methods

- [delete](EventService.md#delete)
- [retrieveAll](EventService.md#retrieveall)
- [retrieveById](EventService.md#retrievebyid)
- [save](EventService.md#save)
- [update](EventService.md#update)

## Constructors

### constructor

• **new EventService**<`T`\>(`eDriver`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Event`](Event.md)<`any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eDriver` | [`EventManagerDriver`](../interfaces/EventManagerDriver.md)<`T`\> | EventManagerDriver |

#### Defined in

services/EventService.ts:13

## Properties

### \_eDriver

• `Protected` **\_eDriver**: [`EventManagerDriver`](../interfaces/EventManagerDriver.md)<`T`\>

#### Defined in

services/EventService.ts:8

## Methods

### delete

▸ **delete**(`e`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

services/EventService.ts:44

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<`T`[]\>

> Retrieve all the Event

#### Returns

`Promise`<`T`[]\>

An array of Event

#### Defined in

services/EventService.ts:32

___

### retrieveById

▸ **retrieveById**(`id`): `Promise`<``null`` \| `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<``null`` \| `T`\>

#### Defined in

services/EventService.ts:36

___

### save

▸ **save**(`e`): `Promise`<`number`\>

"Create a new Event object and store it in the database."
The first parameter is the Event object to be stored. The second parameter is the owner of the Event object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `T` | Event - the object to be created |

#### Returns

`Promise`<`number`\>

A promise that resolves to void.

#### Defined in

services/EventService.ts:24

___

### update

▸ **update**(`newE`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newE` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

services/EventService.ts:40
