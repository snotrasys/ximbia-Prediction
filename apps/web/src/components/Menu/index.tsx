import { languageList, useTranslation } from '@pancakeswap/localization'
import {
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { Dialog, Menu as Menu1, Transition, Disclosure } from '@headlessui/react'
import { footerLinks, Menu as UikitMenu, NextLinkFromReactRouter, useModal } from '@pancakeswap/uikit'
import USCitizenConfirmModal from 'components/Modal/USCitizenConfirmModal'
import { NetworkSwitcher } from 'components/NetworkSwitcher'
import { useCakeBusdPrice } from 'hooks/useBUSDPrice'
import useTheme from 'hooks/useTheme'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState, useContext, Fragment, useMemo } from 'react'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { usePhishingBanner } from '@pancakeswap/utils/user'
import { IdType } from 'hooks/useUserIsUsCitizenAcknowledgement'
import GlobalSettings from './GlobalSettings'
import { SettingsMode } from './GlobalSettings/types'
import { useMenuItems } from './hooks/useMenuItems'
import UserMenu from './UserMenu'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import ImgS3 from './ImgS3'

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'Xwap', href: '/' },
  { name: 'Xtake', href: '/stake' },
  { name: 'Launchpad', href: '/launchpad' },
  { name: 'Pools', href: '/pool', current: true },
  { name: 'Yield Farm', href: '/farm', current: true },
  { name: 'Ximbia Audit', href: '/', current: true },
  { name: 'Ximbia NFT', href: '/', current: true },
  { name: 'Ximbia Lock', href: '/', current: true },
  { name: 'Market P2P', href: '/', current: true },
  { name: 'Bridge BSC', href: '/', current: true },
]
const teams = [
  {
    id: 1,
    name: 'Whitepaper Español',
    href: 'https://minio-s3.caprover.snotrasys.com/ximbia/whitepaper-ximbia-es.pdf',
    initial: 'W',
    current: false,
  },
  {
    id: 4,
    name: 'Whitepaper English',
    href: 'https://minio-s3.caprover.snotrasys.com/ximbia/whitepaper-ximbia-en.pdf',
    initial: 'W',
    current: false,
  },
  {
    id: 2,
    name: 'Audit Ximbia',
    href: 'https://blocksafu.com/project-detail/0x9945f6221Efee040a12054217504cBC230f0ACC9',
    initial: 'A',
    current: false,
  },
  {
    id: 3,
    name: 'Audit Biotic',
    href: 'https://blocksafu.com/project-detail/0x9945f6221Efee040a12054217504cBC230f0ACC9',
    initial: 'A',
    current: false,
  },
]

const social = [
  {
    id: 1,
    name: 'Telegram Canal',
    href: 'https://www.instagram.com/ximbia_dex/',
    initial: 'T',
    current: false,
  },
  {
    id: 4,
    name: 'Telegram Group',
    href: 'https://t.me/ximbiadex_es',
    initial: 'T',
    current: false,
  },
  {
    id: 2,
    name: 'Instagram',
    href: 'https://www.instagram.com/ximbia_dex/',
    initial: 'I',
    current: false,
  },
  {
    id: 3,
    name: 'Twitter',
    href: 'https://twitter.com/ximbiadex',
    initial: 'T',
    current: false,
  },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const LinkComponent = (linkProps) => {
  return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
}

const Navbar = ({ userMenu }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <div className="mb-3">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-[999999]" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5" />
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#230042]  px-9 pb-2">
                    <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <div className="flex h-16 shrink-0 items-center">
                          <ImgS3 src="/xmb-icon.png" alt="" className="mt-4 h-12 w-12 rounded-full bg-black p-3" />
                        </div>
                      </div>
                      <div className="ml-4 mt-6 flex-shrink-0">
                        <div className=" pointer-events-auto  flex w-auto cursor-pointer select-none items-center whitespace-nowrap rounded-full bg-[#9900CC]  text-xs  font-bold text-[#230042] shadow-sm">
                          <button type="button" className="-m-2.5 p-4 " onClick={() => setSidebarOpen(false)}>
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                      <div className=" pointer-events-auto flex w-auto cursor-pointer select-none items-center whitespace-nowrap rounded-md bg-[#9900cb] py-1 text-xs  font-bold text-primary shadow-sm">
                        <div className="flex items-center pl-2 pr-2">
                          <ImgS3 src="/moneda-ximbia.png" alt="" className="h-6 w-6" />
                          <div className="text-bold px-1 py-2 text-white">$0</div>
                        </div>
                      </div>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="mt-1 flex flex-1 flex-col gap-y-7">
                        <div>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <div key={item.name}>
                                <a
                                  href={`https://www.ximbia.io${item.href}`}
                                  className={classNames(
                                    item.current
                                      ? 'text-[#898989] '
                                      : 'text-white hover:bg-indigo-700 hover:text-white',
                                    'border-1 group flex flex-wrap items-center justify-between gap-x-3 border-b border-[#3F008D] p-2 font-redthinker  text-xl font-semibold leading-6 sm:flex-nowrap',
                                  )}
                                >
                                  {item.name}{' '}
                                  {item.current && (
                                    <span className="right-7 hidden  text-sm  text-white ">Coming soon</span>
                                  )}
                                </a>
                              </div>
                            ))}
                          </ul>
                        </div>
                        <Disclosure>
                          {({ open }) => (
                            <>
                              <dt className="text-lg">
                                <Disclosure.Button className="text-md flex w-full items-start justify-between rounded-md py-2 font-bold text-indigo-200">
                                  <h3
                                    className="font-redthinker  text-xl font-semibold leading-6 text-white"
                                    id="projects-headline"
                                  >
                                    Documents
                                  </h3>
                                  <span className="ml-6 flex h-4 items-center">
                                    <ChevronDownIcon
                                      className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-4 w-4 transform')}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Disclosure.Button>
                              </dt>
                              <Disclosure.Panel as="dd" className="bg-green-primary -mt-5 w-full rounded-md p-2">
                                {teams.map((team, i) => (
                                  <div key={JSON.stringify(team)}>
                                    <a
                                      href={team.href}
                                      className={classNames(
                                        team.current ? 'text-white' : 'text-white hover:bg-[#3F008D] hover:text-white',
                                        'group flex rounded-md p-2 text-sm font-semibold leading-6',
                                      )}
                                    >
                                      <span className="font-redthinker text-xl ">{team.name}</span>
                                    </a>
                                  </div>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </ul>
                    </nav>
                    <nav className="-mt-6 mb-40 flex flex-1 flex-col">
                      <ul role="list" className="mt-4 flex flex-1 flex-col gap-y-7">
                        <Disclosure>
                          {({ open }) => (
                            <>
                              <dt className="text-lg">
                                <Disclosure.Button className="text-md flex w-full items-start justify-between rounded-md  font-bold text-indigo-200">
                                  <h3
                                    className="font-redthinker  text-xl font-semibold leading-6 text-white"
                                    id="projects-headline"
                                  >
                                    Social Networks
                                  </h3>
                                  <span className="ml-6 flex h-4 items-center">
                                    <ChevronDownIcon
                                      className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-4 w-4 transform')}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Disclosure.Button>
                              </dt>
                              <Disclosure.Panel as="dd" className="bg-green-primary -mt-5 w-full rounded-md ">
                                {social.map((team, i) => (
                                  <div key={JSON.stringify(team)}>
                                    <a
                                      href={team.href}
                                      className={classNames(
                                        team.current ? 'text-white' : 'text-white hover:bg-[#3F008D] hover:text-white',
                                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                      )}
                                    >
                                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 font-redthinker text-xl  font-medium text-white">
                                        {team.initial}
                                      </span>
                                      <span className="font-redthinker text-xl ">{team.name}</span>
                                    </a>
                                  </div>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="navigation fixed top-0 left-0 z-[99] flex w-full items-center gap-x-6 border-b border-purple-800 px-4 py-4 shadow-sm sm:px-6 ">
          <button type="button" className="-m-2.5 p-2.5 text-indigo-200 " onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            <ImgS3 className="h-10 w-auto" src="/logo.png" alt="" />
          </div>
          <div>{userMenu}</div>
        </div>
      </div>
    </>
  )
}

const Menu = (props) => {
  const { chainId } = useActiveChainId()
  const { isDark, setTheme } = useTheme()
  const cakePriceUsd = useCakeBusdPrice({ forceMainnet: true })
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useRouter()
  const [onUSCitizenModalPresent] = useModal(
    <USCitizenConfirmModal title={t('PancakeSwap Perpetuals')} id={IdType.PERPETUALS} />,
    true,
    false,
    'usCitizenConfirmModal',
  )
  const [showPhishingWarningBanner] = usePhishingBanner()

  const menuItems = useMenuItems(onUSCitizenModalPresent)

  const activeMenuItem = getActiveMenuItem({ menuConfig: menuItems, pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  const toggleTheme = useMemo(() => {
    return () => setTheme(isDark ? 'dark' : 'dark')
  }, [setTheme, isDark])

  const getFooterLinks = useMemo(() => {
    return footerLinks(t)
  }, [t])

  return (
    <>
      <UikitMenu
        linkComponent={LinkComponent}
        rightSide={
          <>
            <UserMenu />
          </>
        }
        Navbar={<Navbar userMenu={<UserMenu />} />}
        chainId={chainId}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={currentLanguage.code}
        langs={languageList}
        setLang={setLanguage}
        cakePriceUsd={cakePriceUsd}
        links={menuItems}
        subLinks={activeMenuItem?.hideSubNav || activeSubMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
        footerLinks={getFooterLinks}
        activeItem={activeMenuItem?.href}
        activeSubItem={activeSubMenuItem?.href}
        buyCakeLabel={t('Buy CAKE')}
        buyCakeLink="https://pancakeswap.finance/swap?outputCurrency=0x9945f6221Efee040a12054217504cBC230f0ACC9&chainId=56"
        {...props}
      />
    </>
  )
}

export default Menu
