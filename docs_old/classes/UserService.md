[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / UserService

# Class: UserService<U\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`User`](User.md) |

## Table of contents

### Constructors

- [constructor](UserService.md#constructor)

### Properties

- [\_uDriver](UserService.md#_udriver)

### Methods

- [retrieveAll](UserService.md#retrieveall)
- [retrieveById](UserService.md#retrievebyid)
- [save](UserService.md#save)

## Constructors

### constructor

• **new UserService**<`U`\>(`uDriver`)

UserDriver

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`User`](User.md)<`U`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `uDriver` | [`UserDriver`](../interfaces/UserDriver.md)<`U`\> |

#### Defined in

services/UserService.ts:15

## Properties

### \_uDriver

• `Protected` **\_uDriver**: [`UserDriver`](../interfaces/UserDriver.md)<`U`\>

#### Defined in

services/UserService.ts:10

## Methods

### retrieveAll

▸ **retrieveAll**(): `Promise`<`U`[]\>

> Retrieve all the users

#### Returns

`Promise`<`U`[]\>

An array of User

#### Defined in

services/UserService.ts:32

___

### retrieveById

▸ **retrieveById**(`id`): `Promise`<``null`` \| `U`\>

> Retrieve the user by id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | user id |

#### Returns

`Promise`<``null`` \| `U`\>

An User

#### Defined in

services/UserService.ts:41

___

### save

▸ **save**(`u`): `Promise`<`string`\>

"Store user in the database."

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `u` | `U` | u - the user to be store |

#### Returns

`Promise`<`string`\>

A promise that resolves to void.

#### Defined in

services/UserService.ts:24
