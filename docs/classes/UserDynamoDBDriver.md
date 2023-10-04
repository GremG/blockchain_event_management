[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / UserDynamoDBDriver

# Class: UserDynamoDBDriver

## Implements

- [`UserDriver`](../interfaces/UserDriver.md)<[`User`](User.md)\>

## Table of contents

### Constructors

- [constructor](UserDynamoDBDriver.md#constructor)

### Properties

- [\_client](UserDynamoDBDriver.md#_client)
- [\_tableName](UserDynamoDBDriver.md#_tablename)

### Methods

- [createTableIfNotExist](UserDynamoDBDriver.md#createtableifnotexist)
- [deleteAll](UserDynamoDBDriver.md#deleteall)
- [deleteById](UserDynamoDBDriver.md#deletebyid)
- [getUser](UserDynamoDBDriver.md#getuser)
- [retrieveAll](UserDynamoDBDriver.md#retrieveall)
- [retrieveById](UserDynamoDBDriver.md#retrievebyid)
- [save](UserDynamoDBDriver.md#save)
- [saveAll](UserDynamoDBDriver.md#saveall)
- [update](UserDynamoDBDriver.md#update)

## Constructors

### constructor

• **new UserDynamoDBDriver**(`region`, `accessKeyId`, `secretAccessKey`, `endpoint?`, `tableName?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `region` | `string` | `undefined` |
| `accessKeyId` | `string` | `undefined` |
| `secretAccessKey` | `string` | `undefined` |
| `endpoint?` | `string` | `undefined` |
| `tableName` | `string` | `'EventMgmtUser'` |

#### Defined in

drivers/dbs/UserDynamoDBDriver.ts:21

## Properties

### \_client

• `Private` **\_client**: `DynamoDBClient`

#### Defined in

drivers/dbs/UserDynamoDBDriver.ts:17

___

### \_tableName

• `Private` **\_tableName**: `string`

#### Defined in

drivers/dbs/UserDynamoDBDriver.ts:19

## Methods

### createTableIfNotExist

▸ `Private` **createTableIfNotExist**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

drivers/dbs/UserDynamoDBDriver.ts:36

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[UserDriver](../interfaces/UserDriver.md).[deleteAll](../interfaces/UserDriver.md#deleteall)

#### Defined in

drivers/dbs/UserDynamoDBDriver.ts:158

___

### deleteById

▸ **deleteById**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[UserDriver](../interfaces/UserDriver.md).[deleteById](../interfaces/UserDriver.md#deletebyid)

#### Defined in

drivers/dbs/UserDynamoDBDriver.ts:168

___

### getUser

▸ `Private` **getUser**(`i`): `Promise`<[`User`](User.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `any` |

#### Returns

`Promise`<[`User`](User.md)\>

#### Defined in

drivers/dbs/UserDynamoDBDriver.ts:100

___

### retrieveAll

▸ **retrieveAll**(): `Promise`<[`User`](User.md)[]\>

#### Returns

`Promise`<[`User`](User.md)[]\>

#### Implementation of

[UserDriver](../interfaces/UserDriver.md).[retrieveAll](../interfaces/UserDriver.md#retrieveall)

#### Defined in

drivers/dbs/UserDynamoDBDriver.ts:108

___

### retrieveById

▸ **retrieveById**(`id`): `Promise`<``null`` \| [`User`](User.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<``null`` \| [`User`](User.md)\>

#### Implementation of

[UserDriver](../interfaces/UserDriver.md).[retrieveById](../interfaces/UserDriver.md#retrievebyid)

#### Defined in

drivers/dbs/UserDynamoDBDriver.ts:128

___

### save

▸ **save**(`t`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`User`](User.md) |

#### Returns

`Promise`<`string`\>

#### Implementation of

[UserDriver](../interfaces/UserDriver.md).[save](../interfaces/UserDriver.md#save)

#### Defined in

drivers/dbs/UserDynamoDBDriver.ts:72

___

### saveAll

▸ **saveAll**(`ts`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ts` | [`User`](User.md)[] |

#### Returns

`Promise`<`string`[]\>

#### Implementation of

[UserDriver](../interfaces/UserDriver.md).[saveAll](../interfaces/UserDriver.md#saveall)

#### Defined in

drivers/dbs/UserDynamoDBDriver.ts:92

___

### update

▸ **update**(`newT`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newT` | [`User`](User.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[UserDriver](../interfaces/UserDriver.md).[update](../interfaces/UserDriver.md#update)

#### Defined in

drivers/dbs/UserDynamoDBDriver.ts:154
