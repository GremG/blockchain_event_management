[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / CheckInService

# Class: CheckInService<T\>

Service that handles the check-in procedure for tickets.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`\> | The type of ticket handled by this service. |

## Table of contents

### Constructors

- [constructor](CheckInService.md#constructor)

### Properties

- [\_checkInDriver](CheckInService.md#_checkindriver)

### Methods

- [generateProof](CheckInService.md#generateproof)
- [retrieveTicketsFromDatabase](CheckInService.md#retrieveticketsfromdatabase)
- [spendTicket](CheckInService.md#spendticket)
- [syncTickets](CheckInService.md#synctickets)
- [validateAndSpendTicket](CheckInService.md#validateandspendticket)
- [validateProof](CheckInService.md#validateproof)

## Constructors

### constructor

• **new CheckInService**<`T`\>(`checkInDriver`)

Creates an instance of CheckInService.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Ticket`](Ticket.md)<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `checkInDriver` | [`CheckInDriver`](CheckInDriver.md)<`T`\> | The check-in driver to use for interacting with the check-in process. |

#### Defined in

services/CheckInService.ts:17

## Properties

### \_checkInDriver

• `Protected` **\_checkInDriver**: [`CheckInDriver`](CheckInDriver.md)<`T`\>

#### Defined in

services/CheckInService.ts:11

## Methods

### generateProof

▸ **generateProof**(`eventContractAddress`, `tokenId`): `Promise`<[`CheckInMetadata`](CheckInMetadata.md)\>

Generates a proof for event check-in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventContractAddress` | `string` | The contract address of the event to validate. |
| `tokenId` | `number` | The ID of the ticket to be checked in. |

#### Returns

`Promise`<[`CheckInMetadata`](CheckInMetadata.md)\>

An object containing the proof.

#### Defined in

services/CheckInService.ts:27

___

### retrieveTicketsFromDatabase

▸ **retrieveTicketsFromDatabase**(): `Promise`<`T`[]\>

Retrieves tickets from the database.

#### Returns

`Promise`<`T`[]\>

An array of tickets.

#### Defined in

services/CheckInService.ts:76

___

### spendTicket

▸ **spendTicket**(`checkInMetadata`): `Promise`<`void`\>

Spends a ticket using check-in metadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `checkInMetadata` | [`CheckInMetadata`](CheckInMetadata.md) | The check-in metadata to spend the ticket. |

#### Returns

`Promise`<`void`\>

#### Defined in

services/CheckInService.ts:45

___

### syncTickets

▸ **syncTickets**(): `Promise`<`void`\>

Synchronizes database tickets with blockchain tickets.

#### Returns

`Promise`<`void`\>

#### Defined in

services/CheckInService.ts:68

___

### validateAndSpendTicket

▸ **validateAndSpendTicket**(`checkInMetadata`): `Promise`<`boolean`\>

Validates and spends a ticket using check-in metadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `checkInMetadata` | [`CheckInMetadata`](CheckInMetadata.md) | The check-in metadata to validate and spend the ticket. |

#### Returns

`Promise`<`boolean`\>

The validation result.

#### Defined in

services/CheckInService.ts:54

___

### validateProof

▸ **validateProof**(`proof`): `Promise`<`boolean`\>

Validates a proof for event check-in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proof` | [`CheckInMetadata`](CheckInMetadata.md) | The proof for event check-in. |

#### Returns

`Promise`<`boolean`\>

The validation result.

#### Defined in

services/CheckInService.ts:36
