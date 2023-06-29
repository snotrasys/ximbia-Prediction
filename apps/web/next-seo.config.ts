import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: 'Ximbia',
  defaultTitle: 'Ximbia',
  description:
    'Discover the most popular AMM on Arbitrum by user count! Earn Ximbia tokens through yield farming, then stake them in Syrup Pools to earn even more rewards. Participate in our Initial Farm Offering (IFO) to get exclusive access to new token launches. Plus, collect unique NFTs and enjoy a platform you can trust, all on ximbia for Arbitrum.',

  openGraph: {
    title: 'Ximbia',
    description:
      'Discover the most popular AMM on Arbitrum by user count! Earn Ximbia tokens through yield farming, then stake them in Syrup Pools to earn even more rewards. Participate in our Initial Farm Offering (IFO) to get exclusive access to new token launches. Plus, collect unique NFTs and enjoy a platform you can trust, all on ximbia for Arbitrum.',
    images: [{ url: 'https://minio-s3.caprover.snotrasys.com/ximbia/logo.png' }],
  },
}
