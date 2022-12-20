import { InjectedConnector } from '@web3-react/injected-connector'
import { AuthereumConnector } from '@web3-react/authereum-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { CustomNetworkConnector } from './CustomNetworkConnector'
import { ChainId } from 'dex-sdk'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

export const INFURA_PROJECT_ID = '0ebf4dd05d6740f482938b8a80860d13'

export const network = new CustomNetworkConnector({
  urls: {
    [ChainId.MAINNET]: `https://data-seed-prebsc-1-s1.binance.org:8545`,
    [ChainId.MATIC]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    [ChainId.MATIC]: 'https://data-seed-prebsc-1-s1.binance.org:8545'
  },
  defaultChainId: ChainId.MATIC
})

export const injected = new InjectedConnector({
  supportedChainIds: [1, ChainId.RINKEBY, ChainId.SOKOL, ChainId.MATIC, ChainId.MATIC]
})

export const walletlink = new WalletLinkConnector({
  supportedChainIds: [ChainId.MAINNET, ChainId.RINKEBY, ChainId.MATIC, ChainId.MATIC],
  url: 'https://data-seed-prebsc-1-s1.binance.org:8545', // XXX
  appName: 'DexSwap'  // XXX
})

// xdai only
export const walletConnectXDAI = new WalletConnectConnector({
  rpc: {
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545'
  },

  qrcode: true,
  
})

// polygon only
export const walletConnectMATIC = new WalletConnectConnector({
  rpc: {
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545'
  },
 
  qrcode: true,
})

// mainnet only
export const authereum = new AuthereumConnector({ chainId: 1 })
