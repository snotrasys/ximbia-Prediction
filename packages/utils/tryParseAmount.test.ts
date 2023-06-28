import { ERC20Token, ChainId } from '@pancakeswap/sdk'
import { describe, it, expect } from 'vitest'
import tryParseAmount from './tryParseAmount'

describe('utils/tryParseAmount', () => {
  it('should be undefined when no valid input', () => {
    expect(tryParseAmount()).toBeUndefined()
  })
  it('should be undefined when input is 0', () => {
    expect(tryParseAmount('0.00')).toBeUndefined()
  })

  it('should pared value', () => {
    expect(
      tryParseAmount(
        '100',
        new ERC20Token(
          ChainId.BSC,
          '0x19B4C6961211c54875501caAB3b38E220740f0B8',
          18,
          'CAKE',
          'PancakeSwap Token',
          'https://pancakeswap.finance/',
        ),
      ),
    ).toBeTruthy()
  })
})
