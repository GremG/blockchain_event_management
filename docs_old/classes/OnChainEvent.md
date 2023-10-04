[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / OnChainEvent

# Class: OnChainEvent

Represents a generic on-chain event.

## Table of contents

### Constructors

- [constructor](OnChainEvent.md#constructor)

### Properties

- [\_description](OnChainEvent.md#_description)
- [\_endDate](OnChainEvent.md#_enddate)
- [\_location](OnChainEvent.md#_location)
- [\_name](OnChainEvent.md#_name)
- [\_startDate](OnChainEvent.md#_startdate)

### Accessors

- [description](OnChainEvent.md#description)
- [endDate](OnChainEvent.md#enddate)
- [location](OnChainEvent.md#location)
- [name](OnChainEvent.md#name)
- [startDate](OnChainEvent.md#startdate)

## Constructors

### constructor

• **new OnChainEvent**(`name`, `startDate`, `endDate`, `location`, `description`)

Creates an instance of OnChainEvent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the event. |
| `startDate` | `Date` | The start date of the event. |
| `endDate` | `Date` | The end date of the event. |
| `location` | `string` | The location of the event. |
| `description` | `string` | The description of the event. |

#### Defined in

entities/onChain/OnChainEvent.ts:23

## Properties

### \_description

• `Private` **\_description**: `string`

#### Defined in

entities/onChain/OnChainEvent.ts:13

___

### \_endDate

• `Private` **\_endDate**: `Date`

#### Defined in

entities/onChain/OnChainEvent.ts:9

___

### \_location

• `Private` **\_location**: `string`

#### Defined in

entities/onChain/OnChainEvent.ts:11

___

### \_name

• `Private` **\_name**: `string`

#### Defined in

entities/onChain/OnChainEvent.ts:5

___

### \_startDate

• `Private` **\_startDate**: `Date`

#### Defined in

entities/onChain/OnChainEvent.ts:7

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Defined in

entities/onChain/OnChainEvent.ts:47

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Defined in

entities/onChain/OnChainEvent.ts:39

___

### location

• `get` **location**(): `string`

#### Returns

`string`

#### Defined in

entities/onChain/OnChainEvent.ts:43

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

entities/onChain/OnChainEvent.ts:31

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Defined in

entities/onChain/OnChainEvent.ts:35
