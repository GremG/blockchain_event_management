[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / OnChainEventService

# Class: OnChainEventService

Represents a generic on-chain event service associated with an event.

## Table of contents

### Constructors

- [constructor](OnChainEventService.md#constructor)

### Properties

- [\_description](OnChainEventService.md#_description)
- [\_endDate](OnChainEventService.md#_enddate)
- [\_eventId](OnChainEventService.md#_eventid)
- [\_name](OnChainEventService.md#_name)
- [\_startDate](OnChainEventService.md#_startdate)

### Accessors

- [description](OnChainEventService.md#description)
- [endDate](OnChainEventService.md#enddate)
- [eventId](OnChainEventService.md#eventid)
- [name](OnChainEventService.md#name)
- [startDate](OnChainEventService.md#startdate)

## Constructors

### constructor

• **new OnChainEventService**(`name`, `startDate`, `endDate`, `description`, `eventId`)

Creates an instance of OnChainEventService.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the event service. |
| `startDate` | `Date` | The start date of the event service. |
| `endDate` | `Date` | The end date of the event service. |
| `description` | `string` | The description of the event service. |
| `eventId` | `number` | The ID of the associated event. |

#### Defined in

entities/onChain/OnChainEventService.ts:25

## Properties

### \_description

• `Private` **\_description**: `string`

#### Defined in

entities/onChain/OnChainEventService.ts:13

___

### \_endDate

• `Private` **\_endDate**: `Date`

#### Defined in

entities/onChain/OnChainEventService.ts:11

___

### \_eventId

• `Private` **\_eventId**: `number`

#### Defined in

entities/onChain/OnChainEventService.ts:15

___

### \_name

• `Private` **\_name**: `string`

#### Defined in

entities/onChain/OnChainEventService.ts:5

___

### \_startDate

• `Private` **\_startDate**: `Date`

#### Defined in

entities/onChain/OnChainEventService.ts:8

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Defined in

entities/onChain/OnChainEventService.ts:45

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Defined in

entities/onChain/OnChainEventService.ts:41

___

### eventId

• `get` **eventId**(): `number`

#### Returns

`number`

#### Defined in

entities/onChain/OnChainEventService.ts:49

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

entities/onChain/OnChainEventService.ts:33

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Defined in

entities/onChain/OnChainEventService.ts:37
