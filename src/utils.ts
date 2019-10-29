import assert from "assert";
import BigNumber from "bignumber.js";
import request from "request-promise-native";

import { EthGasStationApiResponse, GasPriority } from "./types";

/**
 * The available ETH Gas Station speed priorities as an array.
 */
export const ETH_GAS_STATION_PRIORITIES: GasPriority[] = ["fast", "fastest", "safeLow", "average"];

/**
 * The URL for the ETH Gas Station JSON API.
 */
export const ETH_GAS_STATION_API_URL = "https://ethgasstation.info/json/ethgasAPI.json";

/**
 * Fetch a current gas price from ETH Gas Station in base units for a given priority.
 *
 * This function returns a BigNumber with the gas price corresponding to the specified
 * priority level in ETH base units (wei).
 *
 * To use gwei value, convert with the `weiToGwei` method.
 *
 * @returns A promise that resolves to a BigNumber with gas price in wei.
 */
export async function fetchGasPriceInWei(priority: GasPriority = "fast"): Promise<BigNumber> {
    assert(typeof priority === "string", "priority must be string");
    assert(ETH_GAS_STATION_PRIORITIES.includes(priority), `invalid priority: ${priority}`);

    const gasPriceData = await fetchGasPriceData();
    const gasPriceGwei = gasStationUnitsToGwei(gasPriceData[priority]);
    return gweiToWei(gasPriceGwei);
}

/**
 * Fetch the current gas price data from ETH Gas Station.
 *
 * This function returns the object directly from the API,  in the format described
 * in their [official docs](https://docs.ethgasstation.info/).
 *
 * @returns A promise that resolves to the raw ETH gas station API data.
 */
export async function fetchGasPriceData(): Promise<EthGasStationApiResponse> {
    try {
        const res = await request(ETH_GAS_STATION_API_URL);
        return JSON.parse(res);
    } catch (error) {
        throw new Error(`failed to fetch gas price data from ETH gas station: ${error.message}`);
    }
}

/**
 * Convert a value in gwei (1e9 wei) units to wei (base units).
 *
 * @param gweiValue A positive gwei value as a string, number or BigNumber.
 * @returns The value in wei as a BigNumber.
 */
export function gweiToWei(gweiValue: string | number | BigNumber): BigNumber {
    const bn = new BigNumber(gweiValue);
    assert(bn.isPositive(), "input value must be a positive value in gwei (1e9 wei)");
    return bn.times("1e9");
}

/**
 * Convert a value in wei (base units) to gwei (1e9 wei).
 *
 * @param weiValue A positive wei value as a string, number or BigNumber.
 * @returns The value in wei as a BigNumber.
 */
export function weiToGwei(weiValue: string | number | BigNumber): BigNumber {
    const bn = new BigNumber(weiValue);
    assert(bn.isPositive(), "input value must be a positive value in wei (base units)");
    return bn.dividedBy("1e9");
}

/**
 * Convert a value in the units used by ETH Gas Station (gwei times 10) to the
 * more common gwei (1e9 wei) unit.
 *
 * @param fromValue The value from ETH Gas Station API to convert.
 * @returns The same value as a BigNumber in units of gwei (1e9 wei).
 */
export function gasStationUnitsToGwei(fromValue: string | number | BigNumber): BigNumber {
    const bn = new BigNumber(fromValue);
    assert(bn.isPositive(), "input value must be a positive value in gwei * 10 (1e10 wei)");
    return bn.dividedBy(10);
}
