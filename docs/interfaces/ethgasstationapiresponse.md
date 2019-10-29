[Gas Price Estimation Utilities](../README.md) › [Globals](../globals.md) › [EthGasStationApiResponse](ethgasstationapiresponse.md)

# Interface: EthGasStationApiResponse

Represents the raw JSON response from the ETH Gas Station API.

Source: https://docs.ethgasstation.info/

## Hierarchy

* **EthGasStationApiResponse**

## Index

### Properties

* [average](ethgasstationapiresponse.md#average)
* [avgWait](ethgasstationapiresponse.md#avgwait)
* [blockNum](ethgasstationapiresponse.md#blocknum)
* [block_time](ethgasstationapiresponse.md#block_time)
* [fast](ethgasstationapiresponse.md#fast)
* [fastWait](ethgasstationapiresponse.md#fastwait)
* [fastest](ethgasstationapiresponse.md#fastest)
* [fastestWait](ethgasstationapiresponse.md#fastestwait)
* [safeLow](ethgasstationapiresponse.md#safelow)
* [safeLowWait](ethgasstationapiresponse.md#safelowwait)
* [speed](ethgasstationapiresponse.md#speed)

## Properties

###  average

• **average**: *number*

Defined in types.d.ts:25

Recommended average(expected to be mined in <5 minutes) gas price in x10 Gwei (divide by 10 to convert it to gwei).

___

###  avgWait

• **avgWait**: *number*

Defined in types.d.ts:50

Waiting time(in minutes) for average gas price.

___

###  blockNum

• **blockNum**: *number*

Defined in types.d.ts:35

Latest block number.

___

###  block_time

• **block_time**: *number*

Defined in types.d.ts:30

Average time(in seconds) to mine one single block.

___

###  fast

• **fast**: *number*

Defined in types.d.ts:10

Recommended fast(expected to be mined in <2 minutes) gas price in x10 Gwei (divide by 10 to convert it to gwei).

___

###  fastWait

• **fastWait**: *number*

Defined in types.d.ts:55

Waiting time(in minutes) for fast gas price.

___

###  fastest

• **fastest**: *number*

Defined in types.d.ts:15

Recommended fastest(expected to be mined in <30 seconds) gas price in x10 Gwei (divide by 10 to convert it to gwei).

___

###  fastestWait

• **fastestWait**: *number*

Defined in types.d.ts:60

Waiting time(in minutes) for fastest gas price.

___

###  safeLow

• **safeLow**: *number*

Defined in types.d.ts:20

Recommended safe(expected to be mined in <30 minutes) gas price in x10 Gwei (divide by 10 to convert it to gwei).

___

###  safeLowWait

• **safeLowWait**: *number*

Defined in types.d.ts:45

Waiting time(in minutes) for safeLow gas price.

___

###  speed

• **speed**: *number*

Defined in types.d.ts:40

Smallest value of(gasUsed / gasLimit) from last 10 blocks.
