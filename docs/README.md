[Gas Price Estimation Utilities](README.md) › [Globals](globals.md)

# Gas Price Utilities

# Gas Price Utilities

Simple functions for fetching current reasonable gas prices from the [ETH Gas Station API.](http://ethgasstation.info)

See [`docs/`](./docs/globals.md) for full documentation.

## Index

Listed below are all exports from this package and links to their documentation.

- **Async functions**
    - [`fetchGasPriceData`](./docs/globals.md#fetchgaspricedata) => Raw API data from ETH Gas Station.
    - [`fetchGasPriceInWei`]((./docs/globals.md#fetchgaspriceinwei) ) => Convert ETH Gas Station data to base units by priority level.
- **Sync functions**
    - [`gasStationUnitsToGwei`](./docs/globals.md#gasstationunitstogwei) => Convert units used by ETH Gas Station to the more common gwei.
    - [`gweiToWei`](./docs/globals.md#gweitowei) => Convert gwei values to wei (base units).
    - [`weiToGwei`](./docs/globals.md#weitogwei) => Convert wei (base unit) values to gwei.
- **Constants**
    - [`ETH_GAS_STATION_API_URL`](./docs/globals.md#const-eth_gas_station_api_url) => The ETH Gas Station [API URL.](https://docs.ethgasstation.info/)
    - [`ETH_GAS_STATION_PRIORITIES`](./docs/globals.md#const-eth_gas_station_priorities) => Supported human-readable transaction priority levels.
- **Types**
    - [`EthGasStationApiResponse`](./docs/ethgasstationapiresponse) => Type definition for ETH Gas Station API response data.
    - [`GasPriority`](./docs/globals.md#gaspriority) => Type alias for supported priority levels (fast, average, etc).

## Usage

### Install
```bash
# with yarn
yarn add @habsyr/gas-price-utils

# with npm
npm i --save @habsyr/gas-price-utils
```

### Add to your project

- **ES6 and TypeScript:**
    ```typescript
    import {
        ETH_GAS_STATION_API_URL,
        ETH_GAS_STATION_PRIORITIES,

        fetchGasPriceData,
        fetchGasPriceInWei,

        gasStationUnitsToGwei,
        gweiToWei,
        weiToGwei,
    } from "@habsyr/gas-price-utils";
    ```
- **CommonJS and ES5, etc:**
    ```typescript
    const {
        ETH_GAS_STATION_API_URL,
        ETH_GAS_STATION_PRIORITIES,

        fetchGasPriceData,
        fetchGasPriceInWei,
    
        gasStationUnitsToGwei,
        gweiToWei,
        weiToGwei,
    } = require("@habsyr/gas-price-utils");
    ```

## Functions

Primary exports of this package (see the `docs/` folder for documentation for all exports) used to fetch gas price data from the ETH Gas Station API and perform conversions.

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
