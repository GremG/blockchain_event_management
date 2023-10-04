[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / BasicLogEvent

# Class: BasicLogEvent

## Table of contents

### Constructors

- [constructor](BasicLogEvent.md#constructor)

### Properties

- [\_event](BasicLogEvent.md#_event)
- [\_tokenId](BasicLogEvent.md#_tokenid)
- [\_transactionHash](BasicLogEvent.md#_transactionhash)

### Accessors

- [event](BasicLogEvent.md#event)
- [tokenId](BasicLogEvent.md#tokenid)
- [transactionHash](BasicLogEvent.md#transactionhash)

## Constructors

### constructor

• **new BasicLogEvent**(`transactionHash`, `event?`, `tokenId?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `event?` | `string` |
| `tokenId?` | `string` |

#### Defined in

response/BasicLogEvent.ts:8

## Properties

### \_event

• `Private` **\_event**: `undefined` \| `string`

#### Defined in

response/BasicLogEvent.ts:4

___

### \_tokenId

• `Private` **\_tokenId**: `undefined` \| `string`

#### Defined in

response/BasicLogEvent.ts:6

___

### \_transactionHash

• `Private` **\_transactionHash**: `string`

#### Defined in

response/BasicLogEvent.ts:2

## Accessors

### event

• `get` **event**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

response/BasicLogEvent.ts:18

___

### tokenId

• `get` **tokenId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

response/BasicLogEvent.ts:22

___

### transactionHash

• `get` **transactionHash**(): `string`

#### Returns

`string`

#### Defined in

response/BasicLogEvent.ts:14
