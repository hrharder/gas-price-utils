/**
 * Represents the raw JSON response from the ETH Gas Station API.
 * 
 * Source: https://docs.ethgasstation.info/
 */
export interface EthGasStationApiResponse {
    /**
     * Recommended fast(expected to be mined in <2 minutes) gas price in x10 Gwei (divide by 10 to convert it to gwei).
     */
    fast: number;

    /**
     * Recommended fastest(expected to be mined in <30 seconds) gas price in x10 Gwei (divide by 10 to convert it to gwei).
     */
    fastest: number;

    /**
     * Recommended safe(expected to be mined in <30 minutes) gas price in x10 Gwei (divide by 10 to convert it to gwei).
     */
    safeLow: number;

    /**
     * Recommended average(expected to be mined in <5 minutes) gas price in x10 Gwei (divide by 10 to convert it to gwei).
     */
    average: number;

    /**
     * Average time(in seconds) to mine one single block.
     */
    block_time: number;

    /**
     * Latest block number.
     */
    blockNum: number;

    /**
     * Smallest value of(gasUsed / gasLimit) from last 10 blocks.
     */
    speed: number;

    /**
     * Waiting time(in minutes) for safeLow gas price.
     */
    safeLowWait: number;

    /**
     * Waiting time(in minutes) for average gas price.
     */
    avgWait: number;

    /**
     * Waiting time(in minutes) for fast gas price.
     */
    fastWait: number;

    /**
     * Waiting time(in minutes) for fastest gas price.
     */
    fastestWait: number;
}

/**
 * Supported "priority levels" for transactions, corresponding to different gas
 * prices.
 * 
 * See [here](https://docs.ethgasstation.info/) for more information.
 */
export type GasPriority = "average" | "safeLow" | "fastest" | "fast"; 