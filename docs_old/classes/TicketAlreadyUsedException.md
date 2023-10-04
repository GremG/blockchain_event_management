[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / TicketAlreadyUsedException

# Class: TicketAlreadyUsedException

## Hierarchy

- `Error`

  ↳ **`TicketAlreadyUsedException`**

## Table of contents

### Constructors

- [constructor](TicketAlreadyUsedException.md#constructor)

### Properties

- [message](TicketAlreadyUsedException.md#message)
- [name](TicketAlreadyUsedException.md#name)
- [stack](TicketAlreadyUsedException.md#stack)
- [prepareStackTrace](TicketAlreadyUsedException.md#preparestacktrace)
- [stackTraceLimit](TicketAlreadyUsedException.md#stacktracelimit)

### Methods

- [captureStackTrace](TicketAlreadyUsedException.md#capturestacktrace)

## Constructors

### constructor

• **new TicketAlreadyUsedException**(`ticketId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ticketId` | `number` |

#### Overrides

Error.constructor

#### Defined in

exceptions/TicketAlreadyUsedException.ts:4

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
