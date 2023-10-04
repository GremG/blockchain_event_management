[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / Event

# Class: Event<U\>

Represents a generic event.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `U` | extends [`User`](User.md) | The type of user who owns the event. |

## Table of contents

### Constructors

- [constructor](Event.md#constructor)

### Properties

- [\_description](Event.md#_description)
- [\_endDate](Event.md#_enddate)
- [\_id](Event.md#_id)
- [\_location](Event.md#_location)
- [\_name](Event.md#_name)
- [\_owner](Event.md#_owner)
- [\_startDate](Event.md#_startdate)
- [\_status](Event.md#_status)

### Accessors

- [description](Event.md#description)
- [endDate](Event.md#enddate)
- [id](Event.md#id)
- [location](Event.md#location)
- [name](Event.md#name)
- [owner](Event.md#owner)
- [startDate](Event.md#startdate)
- [status](Event.md#status)

## Constructors

### constructor

• **new Event**<`U`\>(`id`, `name`, `startDate`, `endDate`, `location`, `description`, `owner`, `status?`)

Creates an instance of the Event class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`User`](User.md)<`U`\> |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `undefined` | The ID of the event. |
| `name` | `string` | `undefined` | The name of the event. |
| `startDate` | `Date` | `undefined` | The start date and time of the event. |
| `endDate` | `Date` | `undefined` | The end date and time of the event. |
| `location` | `string` | `undefined` | The location of the event. |
| `description` | `string` | `undefined` | A description of the event. |
| `owner` | `U` | `undefined` | The owner of the event. |
| `status?` | [`EventStatus`](../enums/EventStatus.md) | `EventStatus.Open` | The status of the event (default is EventStatus.Open). |

#### Defined in

entities/offChain/Event.ts:45

## Properties

### \_description

• `Private` **\_description**: `string`

#### Defined in

entities/offChain/Event.ts:28

___

### \_endDate

• `Private` **\_endDate**: `Date`

#### Defined in

entities/offChain/Event.ts:24

___

### \_id

• `Private` **\_id**: `number`

#### Defined in

entities/offChain/Event.ts:18

___

### \_location

• `Private` **\_location**: `string`

#### Defined in

entities/offChain/Event.ts:26

___

### \_name

• `Private` **\_name**: `string`

#### Defined in

entities/offChain/Event.ts:20

___

### \_owner

• `Private` **\_owner**: `U`

#### Defined in

entities/offChain/Event.ts:30

___

### \_startDate

• `Private` **\_startDate**: `Date`

#### Defined in

entities/offChain/Event.ts:22

___

### \_status

• `Private` **\_status**: [`EventStatus`](../enums/EventStatus.md)

#### Defined in

entities/offChain/Event.ts:32

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Defined in

entities/offChain/Event.ts:80

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Defined in

entities/offChain/Event.ts:72

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

entities/offChain/Event.ts:56

• `set` **id**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Defined in

entities/offChain/Event.ts:60

___

### location

• `get` **location**(): `string`

#### Returns

`string`

#### Defined in

entities/offChain/Event.ts:76

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

entities/offChain/Event.ts:64

___

### owner

• `get` **owner**(): `U`

#### Returns

`U`

#### Defined in

entities/offChain/Event.ts:84

• `set` **owner**(`owner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `U` |

#### Returns

`void`

#### Defined in

entities/offChain/Event.ts:88

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Defined in

entities/offChain/Event.ts:68

___

### status

• `get` **status**(): [`EventStatus`](../enums/EventStatus.md)

#### Returns

[`EventStatus`](../enums/EventStatus.md)

#### Defined in

entities/offChain/Event.ts:92

• `set` **status**(`status`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`EventStatus`](../enums/EventStatus.md) |

#### Returns

`void`

#### Defined in

entities/offChain/Event.ts:96
