import { memo, useEffect, useRef, useState } from 'react'
import { useAccount } from 'wagmi'
import styled, { css, keyframes } from 'styled-components'
import { Button, CloseIcon, IconButton, TrophyGoldIcon } from '@pancakeswap/uikit'
import { CSSTransition } from 'react-transition-group'
import { useTranslation } from '@pancakeswap/localization'
import { getBetHistory } from 'state/predictions/helpers'
import { useGetPredictionsStatus, useIsHistoryPaneOpen } from 'state/predictions/hooks'
import useLocalDispatch from 'contexts/LocalRedux/useLocalDispatch'
import { setHistoryPaneState } from 'state/predictions'
import { useConfig } from '../context/ConfigProvider'

/**
 * @see https://github.com/animate-css/animate.css/tree/main/source
 */
const bounceInKeyframe = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`

const bounceOutKeyframe = keyframes`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`

const bounceInAnimation = css`
  animation: ${bounceInKeyframe} 1s;
`

const bounceOutAnimation = css`
  animation: ${bounceOutKeyframe} 1s;
`

const Wrapper = styled.div`
  align-items: center;
  bottom: 72px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  left: 0;
  padding-left: 16px;
  padding-right: 16px;
  position: absolute;
  width: 100%;
  z-index: 50;

  &.popup-enter-active {
    ${bounceInAnimation}
  }

  &.popup-enter-done {
    bottom: 72px;
  }

  &.popup-exit-done {
    bottom: -2000px;
  }

  &.popup-exit-active {
    ${bounceOutAnimation}
  }

  ${({ theme }) => theme.mediaQueries.md} {
    bottom: 16px;
    justify-content: flex-end;

    &.popup-enter-done {
      bottom: 16px;
    }
  }
`

const Popup = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 32px;
  color: #ffffff;
  display: flex;
  max-width: 320px;
  padding: 16px 8px;
`

const CollectWinningsPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const ref = useRef(null)
  const timer = useRef(null)
  const { address: account } = useAccount()
  const predictionStatus = useGetPredictionsStatus()
  const isHistoryPaneOpen = useIsHistoryPaneOpen()
  const dispatch = useLocalDispatch()
  const { api, token } = useConfig()

  const handleOpenHistory = () => {
    dispatch(setHistoryPaneState(true))
  }

  const handleClick = () => {
    setIsOpen(false)
    clearInterval(timer.current)
  }

  // Check user's history for unclaimed winners
  useEffect(() => {
    let isCancelled = false
    if (account) {
      timer.current = setInterval(async () => {
        const bets = await getBetHistory(
          { user: account.toLowerCase(), claimed: false },
          undefined,
          undefined,
          api,
          token.symbol,
        )

        if (!isCancelled) {
          // Filter out bets that were not winners
          const winnerBets = bets.filter((bet) => {
            return bet.position === bet.round.position
          })

          if (!isHistoryPaneOpen) {
            setIsOpen(winnerBets.length > 0)
          }
        }
      }, 30000)
    }

    return () => {
      clearInterval(timer.current)
      isCancelled = true
    }
  }, [account, timer, predictionStatus, setIsOpen, isHistoryPaneOpen, api, token.symbol])

  // Any time the history pane is open make sure the popup closes
  useEffect(() => {
    if (isHistoryPaneOpen) {
      setIsOpen(false)
    }
  }, [isHistoryPaneOpen, setIsOpen])

  return (
    <CSSTransition in={isOpen} unmountOnExit nodeRef={ref} timeout={1000} classNames="popup">
      <Wrapper ref={ref}>
        <Popup>
          <div style={{ flex: 'none' }} className="mr-[8px]">
            <svg
              className="mb-[24px] text-yellow-400 fill-yellow-400"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              height="64px"
              width="64px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path>
            </svg>
          </div>

          <Button style={{ flex: 1 }} onClick={handleOpenHistory}>
            {t('Collect Winnings')}
          </Button>
          <IconButton variant="text" onClick={handleClick}>
            <CloseIcon color="primary" width="24px" />
          </IconButton>
        </Popup>
      </Wrapper>
    </CSSTransition>
  )
}

export default memo(CollectWinningsPopup)
