import { ChainId } from 'dxswap-sdk'
import MULTICALL_ABI from './abi.json'

// TODO: Add the missing networks here
const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.ARBITRUM_TESTNET_V3]: '0xb31E9e3446767AaDe9E48C4B1B6D13Cc6eDce172',
  [ChainId.SOKOL]: '0x8BE4eDB1930bdedd94142B09503eB6daC3F2b53D',
  [ChainId.MATIC]: '0xF71F01acBB796Fd83A3C57637039B0b2dc6CAd1e',
  [ChainId.MATIC]: '0xF71F01acBB796Fd83A3C57637039B0b2dc6CAd1e'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
