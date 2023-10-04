[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / FilledLogEvent

# Class: FilledLogEvent

## Table of contents

### Constructors

- [constructor](FilledLogEvent.md#constructor)

### Properties

- [\_event](FilledLogEvent.md#_event)
- [\_from](FilledLogEvent.md#_from)
- [\_to](FilledLogEvent.md#_to)
- [\_tokenId](FilledLogEvent.md#_tokenid)
- [\_transactionHash](FilledLogEvent.md#_transactionhash)

### Accessors

- [event](FilledLogEvent.md#event)
- [from](FilledLogEvent.md#from)
- [to](FilledLogEvent.md#to)
- [tokenId](FilledLogEvent.md#tokenid)
- [transactionHash](FilledLogEvent.md#transactionhash)

## Constructors

### constructor

• **new FilledLogEvent**(`transactionHash`, `event?`, `tokenId?`, `from?`, `to?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `event?` | `string` |
| `tokenId?` | `string` |
| `from?` | `string` |
| `to?` | `string` |

#### Defined in

response/FilledLogEvent.ts:12

## Properties

### \_event

• `Private` **\_event**: `undefined` \| `string`

#### Defined in

response/FilledLogEvent.ts:4

___

### \_from

• `Private` **\_from**: `undefined` \| `string`

#### Defined in

response/FilledLogEvent.ts:8

___

### \_to

• `Private` **\_to**: `undefined` \| `string`

#### Defined in

response/FilledLogEvent.ts:10

___

### \_tokenId

• `Private` **\_tokenId**: `undefined` \| `string`

#### Defined in

response/FilledLogEvent.ts:6

___

### \_transactionHash

• `Private` **\_transactionHash**: `string`

#### Defined in

response/FilledLogEvent.ts:2

## Accessors

### event

• `get` **event**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

response/FilledLogEvent.ts:24

___

### from

• `get` **from**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

response/FilledLogEvent.ts:32

___

### to

• `get` **to**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

response/FilledLogEvent.ts:36

___

### tokenId

• `get` **tokenId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

response/FilledLogEvent.ts:28

___

### transactionHash

• `get` **transactionHash**(): `string`

#### Returns

`string`

#### Defined in

response/FilledLogEvent.ts:20
