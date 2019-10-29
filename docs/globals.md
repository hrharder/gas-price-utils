[Gas Price Estimation Utilities](README.md) › [Globals](globals.md)

# Gas Price Utilities

## Index

### Interfaces

* [EthGasStationApiResponse](interfaces/ethgasstationapiresponse.md)

### Type aliases

* [GasPriority](globals.md#gaspriority)

### Variables

* [ETH_GAS_STATION_API_URL](globals.md#const-eth_gas_station_api_url)
* [ETH_GAS_STATION_PRIORITIES](globals.md#const-eth_gas_station_priorities)

### Functions

* [fetchGasPriceData](globals.md#fetchgaspricedata)
* [fetchGasPriceInWei](globals.md#fetchgaspriceinwei)
* [gasStationUnitsToGwei](globals.md#gasstationunitstogwei)
* [gweiToWei](globals.md#gweitowei)
* [weiToGwei](globals.md#weitogwei)

## Type aliases

###  GasPriority

Ƭ **GasPriority**: *"average" | "safeLow" | "fastest" | "fast"*

Defined in types.d.ts:69

Supported "priority levels" for transactions, corresponding to different gas
prices.

See [here](https://docs.ethgasstation.info/) for more information.

## Variables

### `Const` ETH_GAS_STATION_API_URL

• **ETH_GAS_STATION_API_URL**: *"https://ethgasstation.info/json/ethgasAPI.json"* = "https://ethgasstation.info/json/ethgasAPI.json"

Defined in utils.ts:15

The URL for the ETH Gas Station JSON API.

___

### `Const` ETH_GAS_STATION_PRIORITIES

• **ETH_GAS_STATION_PRIORITIES**: *[GasPriority](globals.md#gaspriority)[]* =  ["fast", "fastest", "safeLow", "average"]

Defined in utils.ts:10

The available ETH Gas Station speed priorities as an array.

## Functions

###  fetchGasPriceData

▸ **fetchGasPriceData**(): *Promise‹[EthGasStationApiResponse](interfaces/ethgasstationapiresponse.md)›*

Defined in utils.ts:44

Fetch the current gas price data from ETH Gas Station.

This function returns the object directly from the API,  in the format described
in their [official docs](https://docs.ethgasstation.info/).

**Returns:** *Promise‹[EthGasStationApiResponse](interfaces/ethgasstationapiresponse.md)›*

A promise that resolves to the raw ETH gas station API data.

___

###  fetchGasPriceInWei

▸ **fetchGasPriceInWei**(`priority`: [GasPriority](globals.md#gaspriority)): *Promise‹BigNumber›*

Defined in utils.ts:27

Fetch a current gas price from ETH Gas Station in base units for a given priority.

This function returns a BigNumber with the gas price corresponding to the specified
priority level in ETH base units (wei).

To use gwei value, convert with the `weiToGwei` method.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`priority` | [GasPriority](globals.md#gaspriority) | "fast" |

**Returns:** *Promise‹BigNumber›*

A promise that resolves to a BigNumber with gas price in wei.

___

###  gasStationUnitsToGwei

▸ **gasStationUnitsToGwei**(`fromValue`: string | number | BigNumber): *BigNumber*

Defined in utils.ts:84

Convert a value in the units used by ETH Gas Station (gwei times 10) to the
more common gwei (1e9 wei) unit.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fromValue` | string &#124; number &#124; BigNumber | The value from ETH Gas Station API to convert. |

**Returns:** *BigNumber*

The same value as a BigNumber in units of gwei (1e9 wei).

___

###  gweiToWei

▸ **gweiToWei**(`gweiValue`: string | number | BigNumber): *BigNumber*

Defined in utils.ts:59

Convert a value in gwei (1e9 wei) units to wei (base units).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gweiValue` | string &#124; number &#124; BigNumber | A positive gwei value as a string, number or BigNumber. |

**Returns:** *BigNumber*

The value in wei as a BigNumber.

___

###  weiToGwei

▸ **weiToGwei**(`weiValue`: string | number | BigNumber): *BigNumber*

Defined in utils.ts:71

Convert a value in wei (base units) to gwei (1e9 wei).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`weiValue` | string &#124; number &#124; BigNumber | A positive wei value as a string, number or BigNumber. |

**Returns:** *BigNumber*

The value in wei as a BigNumber.
