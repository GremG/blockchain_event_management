[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / EventServiceEntity

# Class: EventServiceEntity<E\>

Represents a generic event's service.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `E` | extends [`Event`](Event.md)<`any`\> | The type of event associated with the service. |

## Table of contents

### Constructors

- [constructor](EventServiceEntity.md#constructor)

### Properties

- [\_description](EventServiceEntity.md#_description)
- [\_endDate](EventServiceEntity.md#_enddate)
- [\_event](EventServiceEntity.md#_event)
- [\_id](EventServiceEntity.md#_id)
- [\_name](EventServiceEntity.md#_name)
- [\_startDate](EventServiceEntity.md#_startdate)
- [\_status](EventServiceEntity.md#_status)

### Accessors

- [description](EventServiceEntity.md#description)
- [endDate](EventServiceEntity.md#enddate)
- [event](EventServiceEntity.md#event)
- [id](EventServiceEntity.md#id)
- [name](EventServiceEntity.md#name)
- [startDate](EventServiceEntity.md#startdate)
- [status](EventServiceEntity.md#status)

## Constructors

### constructor

• **new EventServiceEntity**<`E`\>(`id`, `name`, `startDate`, `endDate`, `description`, `event`, `status?`)

Creates an instance of the EventService class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Event`](Event.md)<`any`, `E`\> |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `number` | `undefined` | The ID of the event service. |
| `name` | `string` | `undefined` | The name of the event service. |
| `startDate` | `Date` | `undefined` | The start date and time of the event service. |
| `endDate` | `Date` | `undefined` | The end date and time of the event service. |
| `description` | `string` | `undefined` | A description of the event service. |
| `event` | `E` | `undefined` | The event associated with the service. |
| `status?` | [`EventServiceStatus`](../enums/EventServiceStatus.md) | `EventServiceStatus.Open` | The status of the event service (default is EventServiceStatus.Open). |

#### Defined in

entities/offChain/EventService.ts:43

## Properties

### \_description

• `Private` **\_description**: `string`

#### Defined in

entities/offChain/EventService.ts:27

___

### \_endDate

• `Private` **\_endDate**: `Date`

#### Defined in

entities/offChain/EventService.ts:25

___

### \_event

• `Private` **\_event**: `E`

#### Defined in

entities/offChain/EventService.ts:29

___

### \_id

• `Private` **\_id**: `number`

#### Defined in

entities/offChain/EventService.ts:17

___

### \_name

• `Private` **\_name**: `string`

#### Defined in

entities/offChain/EventService.ts:19

___

### \_startDate

• `Private` **\_startDate**: `Date`

#### Defined in

entities/offChain/EventService.ts:22

___

### \_status

• `Private` **\_status**: [`EventServiceStatus`](../enums/EventServiceStatus.md)

#### Defined in

entities/offChain/EventService.ts:31

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Defined in

entities/offChain/EventService.ts:73

___

### endDate

• `get` **endDate**(): `Date`

#### Returns

`Date`

#### Defined in

entities/offChain/EventService.ts:69

___

### event

• `get` **event**(): `E`

#### Returns

`E`

#### Defined in

entities/offChain/EventService.ts:77

• `set` **event**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |

#### Returns

`void`

#### Defined in

entities/offChain/EventService.ts:81

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

entities/offChain/EventService.ts:53

• `set` **id**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Defined in

entities/offChain/EventService.ts:57

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

entities/offChain/EventService.ts:61

___

### startDate

• `get` **startDate**(): `Date`

#### Returns

`Date`

#### Defined in

entities/offChain/EventService.ts:65

___

### status

• `get` **status**(): [`EventServiceStatus`](../enums/EventServiceStatus.md)

#### Returns

[`EventServiceStatus`](../enums/EventServiceStatus.md)

#### Defined in

entities/offChain/EventService.ts:85

• `set` **status**(`status`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`EventServiceStatus`](../enums/EventServiceStatus.md) |

#### Returns

`void`

#### Defined in

entities/offChain/EventService.ts:89
