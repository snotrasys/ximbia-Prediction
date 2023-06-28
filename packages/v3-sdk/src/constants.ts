import { ChainId } from '@pancakeswap/sdk'
import { Address, Hash } from 'viem'

const FACTORY_ADDRESS = '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865'

/**
 * To compute Pool address use DEPLOYER_ADDRESSES instead
 */
export const FACTORY_ADDRESSES = {
  [ChainId.ETHEREUM]: FACTORY_ADDRESS,
  [ChainId.GOERLI]: FACTORY_ADDRESS,
  [ChainId.BSC]: FACTORY_ADDRESS,
  [ChainId.BSC_TESTNET]: FACTORY_ADDRESS,
  // TODO: new chains
  [ChainId.ARBITRUM_ONE]: FACTORY_ADDRESS,
  [ChainId.ARBITRUM_GOERLI]: '0xBA40c83026213F9cbc79998752721a0312bdB74a',
  [ChainId.POLYGON_ZKEVM]: FACTORY_ADDRESS,
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0x2430dbd123BC40f8Be6110065a448C1aA0619Cb1',
  [ChainId.ZKSYNC]: '0x',
  [ChainId.ZKSYNC_TESTNET]: '0x57d01Fbde077C04381a28840A24aCbEeF8314062',
  [ChainId.LINEA_TESTNET]: '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E',
} as const satisfies Record<ChainId, Address>

const DEPLOYER_ADDRESS = '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9'

export const DEPLOYER_ADDRESSES = {
  [ChainId.ETHEREUM]: DEPLOYER_ADDRESS,
  [ChainId.GOERLI]: DEPLOYER_ADDRESS,
  [ChainId.BSC]: DEPLOYER_ADDRESS,
  [ChainId.BSC_TESTNET]: DEPLOYER_ADDRESS,
  // TODO: new chains
  [ChainId.ARBITRUM_ONE]: DEPLOYER_ADDRESS,
  [ChainId.ARBITRUM_GOERLI]: '0xbC465fbf687e4184103b67Ed86557A8155FA4343',
  [ChainId.POLYGON_ZKEVM]: DEPLOYER_ADDRESS,
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0x86808Be3f426C9B4c8C706bCDe29dBC036A1259B',
  [ChainId.ZKSYNC]: '0x',
  [ChainId.ZKSYNC_TESTNET]: '0x71df5b7ea5355180EAb2A54de8aA534016040008',
  [ChainId.LINEA_TESTNET]: '0xdAecee3C08e953Bd5f89A5Cc90ac560413d709E3',
} as const satisfies Record<ChainId, Address>

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

const POOL_INIT_CODE_HASH = '0x6ce8eb472fa82df5469c6ab6d485f17c3ad13c8cd7af59b3d4a8026c5ce0f7e2'

export const POOL_INIT_CODE_HASHES = {
  [ChainId.ETHEREUM]: POOL_INIT_CODE_HASH,
  [ChainId.GOERLI]: POOL_INIT_CODE_HASH,
  [ChainId.BSC]: POOL_INIT_CODE_HASH,
  [ChainId.BSC_TESTNET]: POOL_INIT_CODE_HASH,
  [ChainId.ARBITRUM_ONE]: POOL_INIT_CODE_HASH,
  [ChainId.ARBITRUM_GOERLI]: POOL_INIT_CODE_HASH,
  [ChainId.POLYGON_ZKEVM]: POOL_INIT_CODE_HASH,
  [ChainId.POLYGON_ZKEVM_TESTNET]: POOL_INIT_CODE_HASH,
  // TODO: new chains
  [ChainId.ZKSYNC]: '0x01001487f1c11a662dda518635f8e1f03a41f505cbf7d981c899ba11bf847a8a',
  [ChainId.ZKSYNC_TESTNET]: '0x01001487f1c11a662dda518635f8e1f03a41f505cbf7d981c899ba11bf847a8a',
  [ChainId.LINEA_TESTNET]: POOL_INIT_CODE_HASH,
} as const satisfies Record<ChainId, Hash>

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 2500,
  HIGH = 10000,
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 50,
  [FeeAmount.HIGH]: 200,
}
