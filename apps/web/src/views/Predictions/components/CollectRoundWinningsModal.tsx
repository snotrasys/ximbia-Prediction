import { Token } from '@pancakeswap/sdk'
import {
  AutoRenewIcon,
  Box,
  Button,
  Flex,
  Heading,
  InjectedModalProps,
  ModalBody,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  Skeleton,
  Text,
  TrophyGoldIcon,
  useToast,
} from '@pancakeswap/uikit'
import { AnyAction, AsyncThunkAction } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import styled from 'styled-components'

import { useTranslation } from '@pancakeswap/localization'
import { Address, useAccount } from 'wagmi'
import { ToastDescriptionWithTx } from 'components/Toast'
import useBUSDPrice from 'hooks/useBUSDPrice'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import useCatchTxError from 'hooks/useCatchTxError'
import { usePredictionsContract } from 'hooks/useContract'
import { fetchNodeHistory, markAsCollected } from 'state/predictions'
import { REWARD_RATE } from 'state/predictions/config'
import { Bet } from 'state/types'
import { formatNumber } from '@pancakeswap/utils/formatBalance'
import { multiplyPriceByAmount } from 'utils/prices'
import { getPayout } from './History/helpers'

interface CollectRoundWinningsModalProps extends InjectedModalProps {
  onSuccess?: () => Promise<void>
  dispatch: (action: AnyAction | AsyncThunkAction<any, { account: string }, any>) => void
  history: Bet[]
  isLoadingHistory: boolean
  predictionsAddress: Address
  token: Token
  isV1Claim?: boolean
}

const Modal = styled(ModalContainer)`
  overflow: visible;
`

const BunnyDecoration = styled.div`
  position: absolute;
  top: -116px; // line up bunny at the top of the modal
  left: 0px;
  text-align: center;
  width: 100%;
`

interface ClaimableRounds {
  epochs: number[]
  total: number
}

const calculateClaimableRounds = (history): ClaimableRounds => {
  if (!history) {
    return { epochs: [], total: 0 }
  }

  return history.reduce(
    (accum: ClaimableRounds, bet: Bet) => {
      if (!bet.claimed && bet.position === bet.round.position) {
        const betPayout = getPayout(bet, REWARD_RATE)
        return {
          ...accum,
          epochs: [...accum.epochs, bet.round.epoch],
          total: accum.total + betPayout,
        }
      }

      return accum
    },
    { epochs: [], total: 0 },
  )
}

const CollectRoundWinningsModal: React.FC<React.PropsWithChildren<CollectRoundWinningsModalProps>> = ({
  onDismiss,
  onSuccess,
  history,
  isLoadingHistory,
  dispatch,
  predictionsAddress,
  token,
  isV1Claim,
}) => {
  const { address: account } = useAccount()
  const { t } = useTranslation()
  const { toastSuccess } = useToast()
  const { fetchWithCatchTxError, loading: isPendingTx } = useCatchTxError()
  const { callWithGasPrice } = useCallWithGasPrice()
  const predictionsContract = usePredictionsContract(predictionsAddress, token.symbol)
  const bnbBusdPrice = useBUSDPrice(token)

  const { epochs, total } = calculateClaimableRounds(history)
  const totalBnb = multiplyPriceByAmount(bnbBusdPrice, total)

  const isLoading = isLoadingHistory || !epochs?.length

  useEffect(() => {
    // Fetch history if they have not opened the history pane yet
    if (history.length === 0 && !isV1Claim) {
      dispatch(fetchNodeHistory({ account }))
    }
  }, [account, history, dispatch, isV1Claim])

  const handleClick = async () => {
    const receipt = await fetchWithCatchTxError(() => {
      return callWithGasPrice(predictionsContract as any, 'claim', [epochs])
    })
    if (receipt?.status) {
      if (!isV1Claim) {
        // Immediately mark rounds as claimed
        dispatch(
          markAsCollected(
            epochs.reduce((accum, epoch) => {
              return { ...accum, [epoch]: true }
            }, {}),
          ),
        )
      }

      await onSuccess?.()

      toastSuccess(
        t('Winnings collected!'),
        <ToastDescriptionWithTx txHash={receipt.transactionHash}>
          {t('Your prizes have been sent to your wallet')}
        </ToastDescriptionWithTx>,
      )
      onDismiss()
    }
  }

  return (
    <Modal minWidth="288px" position="relative" mt="124px">
      <ModalHeader>
        <ModalTitle>
          <Heading>{t('Collect Winnings')}</Heading>
        </ModalTitle>
        <ModalCloseButton onDismiss={onDismiss} />
      </ModalHeader>
      <ModalBody p="24px">
        <div className="flex justify-center">
          <svg
            className="mb-[24px] text-yellow-400 fill-yellow-400"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 576 512"
            height="96px"
            width="96px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path>
          </svg>
        </div>
        <Flex alignItems="start" justifyContent="space-between" mb="8px">
          <Text>{t('Collecting')}</Text>
          <Box style={{ textAlign: 'right' }}>
            <Text>{`${formatNumber(total, 0, 4)} XMB`}</Text>
            <Text fontSize="12px" color="textSubtle">
              {`~$${totalBnb.toFixed(2)}`}
            </Text>
          </Box>
        </Flex>
        <Flex alignItems="start" justifyContent="center" mb="24px">
          {isLoading ? (
            <Skeleton height="21" width="140px" />
          ) : (
            <Text color="textSubtle" fontSize="14px">
              {epochs.length === 1
                ? t('From round %round%', { round: epochs[0] })
                : t('From rounds %rounds%', { rounds: epochs.join(', ') })}
            </Text>
          )}
        </Flex>
        <Button
          width="100%"
          mb="8px"
          onClick={handleClick}
          isLoading={isPendingTx || isLoading}
          endIcon={isPendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
        >
          {t('Confirm')}
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default CollectRoundWinningsModal
