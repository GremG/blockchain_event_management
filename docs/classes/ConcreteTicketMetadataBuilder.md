[@blockchain-lib/event-mgmt](../README.md) / [Exports](../modules.md) / ConcreteTicketMetadataBuilder

# Class: ConcreteTicketMetadataBuilder

Concrete implementation of the TicketMetadataBuilder interface.

**`Implements`**

## Implements

- [`TicketMetadataBuilder`](../interfaces/TicketMetadataBuilder.md)

## Table of contents

### Constructors

- [constructor](ConcreteTicketMetadataBuilder.md#constructor)

### Properties

- [\_metadata](ConcreteTicketMetadataBuilder.md#_metadata)

### Methods

- [buildCollectionAddress](ConcreteTicketMetadataBuilder.md#buildcollectionaddress)
- [buildDescription](ConcreteTicketMetadataBuilder.md#builddescription)
- [buildEventServiceId](ConcreteTicketMetadataBuilder.md#buildeventserviceid)
- [buildImageUri](ConcreteTicketMetadataBuilder.md#buildimageuri)
- [getResult](ConcreteTicketMetadataBuilder.md#getresult)
- [reset](ConcreteTicketMetadataBuilder.md#reset)

## Constructors

### constructor

• **new ConcreteTicketMetadataBuilder**()

## Properties

### \_metadata

• `Protected` **\_metadata**: [`TicketMetadata`](TicketMetadata.md)

#### Defined in

builders/ConcreteTicketMetadataBuilder.ts:10

## Methods

### buildCollectionAddress

▸ **buildCollectionAddress**(`collectionAddress`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionAddress` | `string` |

#### Returns

`void`

#### Defined in

builders/ConcreteTicketMetadataBuilder.ts:32

___

### buildDescription

▸ **buildDescription**(`description`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

`void`

#### Implementation of

[TicketMetadataBuilder](../interfaces/TicketMetadataBuilder.md).[buildDescription](../interfaces/TicketMetadataBuilder.md#builddescription)

#### Defined in

builders/ConcreteTicketMetadataBuilder.ts:24

___

### buildEventServiceId

▸ **buildEventServiceId**(`eventServiceId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventServiceId` | `number` |

#### Returns

`void`

#### Defined in

builders/ConcreteTicketMetadataBuilder.ts:28

___

### buildImageUri

▸ **buildImageUri**(`imageUri`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageUri` | `string` |

#### Returns

`void`

#### Implementation of

[TicketMetadataBuilder](../interfaces/TicketMetadataBuilder.md).[buildImageUri](../interfaces/TicketMetadataBuilder.md#buildimageuri)

#### Defined in

builders/ConcreteTicketMetadataBuilder.ts:20

___

### getResult

▸ **getResult**(): [`TicketMetadata`](TicketMetadata.md)

Gets the built TicketMetadata instance.

#### Returns

[`TicketMetadata`](TicketMetadata.md)

The built TicketMetadata instance.

#### Defined in

builders/ConcreteTicketMetadataBuilder.ts:41

___

### reset

▸ **reset**(): `void`

Resets the internal metadata instance.

#### Returns

`void`

#### Implementation of

[TicketMetadataBuilder](../interfaces/TicketMetadataBuilder.md).[reset](../interfaces/TicketMetadataBuilder.md#reset)

#### Defined in

builders/ConcreteTicketMetadataBuilder.ts:16
