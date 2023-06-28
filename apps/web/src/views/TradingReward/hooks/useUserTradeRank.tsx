import useSWR from 'swr'
import { useAccount } from 'wagmi'
import { TRADING_REWARD_API } from 'config/constants/endpoints'

const initialState = {
  topTradersIndex: 0,
  totalUsers: 0,
}

export const useUserTradeRank = ({ campaignId }: { campaignId: string }) => {
  const { address: account } = useAccount()
  const { data } = useSWR(
    campaignId && account && ['/user-trade-rank', campaignId, account],
    async () => {
      try {
        const response = await fetch(
          `${TRADING_REWARD_API}/rank_index/campaignId/${campaignId}/address/${account}/type/tt`,
        )
        const result = await response.json()
        return {
          topTradersIndex: result?.data?.topTradersIndex ?? 0,
          totalUsers: result?.data?.totalUsers ?? 0,
        }
      } catch (error) {
        console.info(`Fetch User Rank Error: ${error}`)
        return initialState
      }
    },
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
      fallbackData: initialState,
    },
  )

  return data
}
