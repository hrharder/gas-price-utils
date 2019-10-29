import assert from "assert";
import BigNumber from "bignumber.js";
import request from "request-promise-native";

import {
    ETH_GAS_STATION_API_URL,

    fetchGasPriceData,
    fetchGasPriceInWei,
    gasStationUnitsToGwei,
    gweiToWei,
    weiToGwei,
} from "../";

// test values: see https://ethgasstation.info/blog/gwei/
const ONE_WEI = new BigNumber("1e0");
const ONE_GWEI = new BigNumber("1e9");
const ONE_ETHER = new BigNumber("1e18");
const NEGATIVE_ONE = new BigNumber(-1);

// note: eth gas station api values are gwei * 10
const ONE_GWEI_TIMES_TEN = new BigNumber(ONE_GWEI).times(10);

// a ~typical gas price value from the API, equal to 12.04 gwei
const TEST_GAS_PRICE_VALUE = new BigNumber(120.4);
const TEST_GAS_PRICE_VALUE_GWEI = TEST_GAS_PRICE_VALUE.dividedBy(10);

// base API URL
const KNOWN_API_URL = "https://ethgasstation.info/json/ethgasAPI.json";

describe("gas-price-estimator unit tests", function (): void {
    describe("#ETH_GAS_STATION_API_URL", () => {
        it("should match the known endpoint", () => {
            assert.deepStrictEqual(ETH_GAS_STATION_API_URL, KNOWN_API_URL, "API URL should match known endpoint");
        });
    });
    describe("#fetchGasPriceData", () => {
        it("should fetch gas price data without throwing", async () => {
            await assert.doesNotReject(fetchGasPriceData());
        });
        it("should match data from a raw HTTP request", async () => {
            const withRequest = JSON.parse(await request(ETH_GAS_STATION_API_URL));
            const withLibrary = await fetchGasPriceData();
            assert.deepStrictEqual(Object.keys(withLibrary), Object.keys(withRequest), "keys from API should match from keys library");
        });
    });

    describe("#fetchGasPriceInWei", () => {
        it("should fetch gas price without throwing", async () => {
            await assert.doesNotReject(fetchGasPriceInWei());
        });
        it("should match the value generated if the conversion is done manually", async () => {
            const testPriority = "fast";
            const rawPrices = await fetchGasPriceData();

            const actual = await fetchGasPriceInWei(testPriority);
            const expected = new BigNumber(rawPrices[testPriority]).dividedBy(10).times("1e9");
            assert(actual.isEqualTo(expected), "price in wei should match manually converted price in gwei");
        });
        it("should not allow usage of an invalid priority", async () => {
            await assert.rejects(fetchGasPriceInWei("foo"));
        });
    });

    describe("#gasStationUnitsToWei", () => {
        it("should correctly convert one gwei times 10 to one gwei", () => {
            const actual = gasStationUnitsToGwei(ONE_GWEI_TIMES_TEN);
            assert(ONE_GWEI.isEqualTo(actual), "one gwei*10 to wei conversion should match function output");
        });
        it("should correctly convert a bignumber value to base units", () => {
            const actual = gasStationUnitsToGwei(TEST_GAS_PRICE_VALUE);
            assert(TEST_GAS_PRICE_VALUE_GWEI.isEqualTo(actual), "manual gwei*10 to wei conversion should match function output");
        });
        it("should correctly convert a string value to base units", () => {
            const actual = gasStationUnitsToGwei(TEST_GAS_PRICE_VALUE.toString());
            assert(TEST_GAS_PRICE_VALUE_GWEI.isEqualTo(actual), "manual gwei*10 to wei conversion should match function output");
        });
        it("should correctly convert a number value to base units", () => {
            const actual = gasStationUnitsToGwei(TEST_GAS_PRICE_VALUE.toNumber());
            assert(TEST_GAS_PRICE_VALUE_GWEI.isEqualTo(actual), "manual gwei*10 to wei conversion should match function output");
        });
        it("should throw when provided a negative number", () => {
            assert.throws(() => gasStationUnitsToGwei(NEGATIVE_ONE));
        });
    });

    describe("#gweiToWei", () => {
        it("should correctly convert a bignumber gwei value to wei", () => {
            const testValue = new BigNumber(361);
            const expected = testValue.times("1e9");
            const actual = gweiToWei(testValue);
            assert(expected.isEqualTo(actual), "converted one gwei should match one wei");
        });
        it("should correctly convert a string gwei value to wei", () => {
            const testValue = new BigNumber(50);
            const expected = testValue.times("1e9");
            const actual = gweiToWei(testValue.toString());
            assert(expected.isEqualTo(actual), "converted one gwei should match one wei");
        });
        it("should correctly convert a number gwei value to wei", () => {
            const testValue = new BigNumber(1);
            const expected = testValue.times("1e9");
            const actual = gweiToWei(testValue.toNumber());
            assert(expected.isEqualTo(actual), "converted one gwei should match one wei");
        });
        it("should throw when provided a negative number", () => {
            assert.throws(() => gweiToWei(NEGATIVE_ONE));
        });
    });

    describe("#weiToGwei", () => {
        it("should correctly convert a bignumber wei value to gwei", () => {
            const testValue = ONE_ETHER.times(3.14);
            const expected = ONE_WEI.times("1e9").times(3.14);
            const actual = weiToGwei(testValue);
            assert(expected.isEqualTo(actual), "converted wei value should match gwei");
        });
        it("should correctly convert a string wei value to gwei", () => {
            const testValue = ONE_ETHER.times(0.05);
            const expected = testValue.dividedBy("1e9");
            const actual = weiToGwei(testValue.toString());
            assert(expected.isEqualTo(actual), "converted wei value should match gwei");
        });
        it("should correctly convert a number wei value to gwei", () => {
            const testValue = ONE_ETHER.times(2.42);
            const expected = testValue.dividedBy("1e9");
            const actual = weiToGwei(testValue.toNumber());
            assert(expected.isEqualTo(actual), "converted wei value should match gwei");
        });
        it("should throw when provided a negative number", () => {
            assert.throws(() => weiToGwei(NEGATIVE_ONE));
        });
    });
});
