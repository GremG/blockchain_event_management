[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventServiceService

# Class: EventServiceService<E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`EventServiceEntity`](EventServiceEntity.md)<`any`\> |

## Table of contents

### Constructors

- [constructor](EventServiceService.md#constructor)

### Properties

- [\_sDriver](EventServiceService.md#_sdriver)

### Methods

- [delete](EventServiceService.md#delete)
- [retrieveAll](EventServiceService.md#retrieveall)
- [retrieveById](EventServiceService.md#retrievebyid)
- [save](EventServiceService.md#save)
- [update](EventServiceService.md#update)

## Constructors

### constructor

• **new EventServiceService**<`E`\>(`sDriver`)

SessionDynamoDB argument

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`EventServiceEntity`](EventServiceEntity.md)<`any`, `E`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sDriver` | [`EventDriver`](../interfaces/EventDriver.md)<`E`\> |

#### Defined in

services/EventServiceService.ts:14

## Properties

### \_sDriver

• `Protected` **\_sDriver**: [`EventDriver`](../interfaces/EventDriver.md)<`E`\>

#### Defined in

services/EventServiceService.ts:9

## Methods

### delete

▸ **delete**(`s`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `E` |

#### Returns

`Promise`<`void`\>

#### Defined in

services/EventServiceService.ts:55

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<`E`[]\>

> Retrieve all the session

#### Returns

`Promise`<`E`[]\>

An array of Session

#### Defined in

services/EventServiceService.ts:31

___

### retrieveById

▸ **retrieveById**(`id`): `Promise`<``null`` \| `E`\>

> Retrieve the session by id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | session id |

#### Returns

`Promise`<``null`` \| `E`\>

An Session

#### Defined in

services/EventServiceService.ts:40

___

### save

▸ **save**(`s`): `Promise`<`number`\>

"Store session in the database."

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `E` | s - the session to be store |

#### Returns

`Promise`<`number`\>

A promise that resolves to void.

#### Defined in

services/EventServiceService.ts:23

___

### update

▸ **update**(`s`): `Promise`<`void`\>

Update session in the database

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `E` | session data |

#### Returns

`Promise`<`void`\>

A promise that resolves to void.

#### Defined in

services/EventServiceService.ts:50
