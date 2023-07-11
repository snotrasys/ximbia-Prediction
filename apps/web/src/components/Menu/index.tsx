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

import { AiOutlineBarChart } from "react-icons/ai";
import { BiBookBookmark, BiGitCompare, BiLayerPlus, BiSolidFlame, BiWallet, BiSolidLock } from "react-icons/bi";
import {
  BsFillRocketTakeoffFill,
  BsFillSuitClubFill,
  BsFillTrophyFill,
  BsFillHouseHeartFill,
  BsCreditCardFill,
} from "react-icons/bs";
import { RiExchangeDollarLine, RiNftFill } from "react-icons/ri";
import { GiFarmTractor } from "react-icons/gi";
import { SiFuturelearn } from "react-icons/si";
import { FaBitcoin } from "react-icons/fa";

import Tooltip from "./Tooltip";

const navigation = [
  { name: "Home", href: "https://www.ximbia.io/home", icon: HomeIcon, current: false },
  { name: "Buy Crypto", href: "https://www.ximbia.io/xp2p", icon: BsCreditCardFill, current: false },
  { name: "XTools", href: "https://www.ximbia.io/xtools", icon: AiOutlineBarChart, current: false },
  {
    name: "Xwap",
    href: "https://xwap.ximbia.io/",
    icon: AiOutlineBarChart,
    current: false,
  },
  {
    name: "SuperXwap",
    href: "https://www.ximbia.io/xswap",
    icon: BiGitCompare,
    current: false,
  },

  { name: "Xtake", href: "https://www.ximbia.io/stake", icon: BiLayerPlus, current: false },
  {
    name: "Bio Farm",
    href: "https://biofarm.ximbia.io/",
    icon: GiFarmTractor,
    current: false,
  },
  {
    name: "XAcademy",
    href: "https://www.ximbia.io/xacademy",
    icon: BiBookBookmark,
    current: false,
  },
  {
    name: "XPredictions Ximbia",
    href: "https://prediction.ximbia.io/",
    icon: BsFillTrophyFill,
    current: false,
  },
  {
    name: "XPredictions Biotic",
    href: "https://biotic.prediction.ximbia.io/",
    icon: BsFillTrophyFill,
    current: false,
  },
  { name: "XP2P", href: "#", icon: RiExchangeDollarLine, current: true },
  {
    name: "XLaunchpad",
    href: "#",
    icon: BsFillRocketTakeoffFill,
    current: true,
  },
  { name: "XNFT", href: "#", icon: RiNftFill, current: true },
  { name: "XToken", href: "#", icon: FaBitcoin, current: true },
  { name: "Ximbia RET", href: "#", icon: BsFillHouseHeartFill, current: true },
  { name: "XFuturos", href: "#", icon: SiFuturelearn, current: true },
  { name: "XLocks", href: "#", icon: BiSolidLock, current: true },
  { name: "XBurn", href: "#", icon: BiSolidFlame, current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
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

const games = [{ name: "XLottery", href: "#", icon: BsFillSuitClubFill, current: true }];



const LinkComponent = (linkProps) => {
  return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
}

const Navbar = ({ userMenu, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter();
  return (
    <>
       <div>
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
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
                      <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                        <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="background-purple flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4">
                      <div className="mt-10 flex  shrink-0 items-center justify-center">
                        <svg viewBox="0 0 415.67 193.8" focusable="false" className="w-44">
                          <path
                            fill="currentColor"
                            d="M65.89 121.54c-21.31 23.58-42.85 43.23-62.58 69.01 24.27-22.77 45.66-36.09 71.38-55.96l-8.8-13.05zm147.65-63.61l.56-14.48-47.45-18.23c-20.26 16.47-39.78 33.98-58.63 52.42l10.33 25.46c30.62-22.82 58.67-34.34 95.19-45.17z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M87.29 116.82L84.45 12.3l15.34 7.12c-6.87 59 20.85 111.37 66.41 160.33l-78.91-62.93z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M169.18 182.07C115.72 130.08 90.04 69.63 87.94 2L17.59 66.49c44.62 49.16 95.8 86.52 151.59 115.58M62.85 118.02C41.07 142.12 20.17 167.45 0 193.8c24.81-23.27 50.16-45.46 76.45-65.77l-13.6-10.01z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M220.27 44.71l-54.44-25.13c-20.71 16.83-40.65 34.72-59.92 53.57l10.56 26.02c32.75-21.86 67.12-40.47 103.8-54.46"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M409.27 132.08l-4.62-9.39h-17.39l1.76-3.67h13.94l-10.27-21.13-16.58 34.19h-4.4l18.49-37.86h4.99l18.49 37.86h-4.41zm-53.27 0V94.22h4.04v37.86H356zm-27.51-37.86c2.64 0 4.9.94 6.79 2.83 1.88 1.88 2.82 4.17 2.82 6.86 0 3.28-1.32 5.97-3.96 8.07 1.42.88 2.63 2.16 3.63 3.85s1.5 3.58 1.5 5.69c0 3.03-1 5.55-3.01 7.56s-4.5 3.01-7.48 3.01h-23.85V94.22h23.56zm-19.52 3.81v30.23h19c2.35 0 4.15-.6 5.39-1.8 1.25-1.2 1.87-2.83 1.87-4.88 0-2.2-.68-4.01-2.05-5.43-1.37-1.42-2.98-2.13-4.84-2.13h-13.21v-3.67h12.77c1.81 0 3.29-.64 4.44-1.91 1.15-1.27 1.72-2.81 1.72-4.62 0-1.76-.56-3.17-1.69-4.22-1.13-1.05-2.67-1.58-4.62-1.58h-18.78zm-22.67 5.58v28.47h-4.04v-23.33l4.04-5.14zm-36.98-9.39l16.29 19.88 15.92-19.88h4.77l-20.62 25.83-16.36-19.88v31.92h-4.03V94.22h4.03zm-27.36 37.86V94.22H226v37.86h-4.04zM176.1 94.22l9.54 10.71-2.49 3.01-12.4-13.72h5.35zm15.78 18.12l18.05 19.74h-5.36l-15.19-16.66-13.72 16.66h-5.14l31.25-37.86h5.14l-15.03 18.12z"
                          ></path>
                        </svg>
                      </div>
                      <nav className="flex flex-1 flex-col mt-8">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                          <div>
                            <div className="text-xs font-bold leading-6 text-[#9c27b0]">XWALLET</div>
                            <div role="list" className="-mx-2 mt-3 space-y-2">
                              {navigation.map((item) => (
                                <div key={item.name} className="w-full">
                                  {item.current ? (
                                    <Tooltip tooltipText={item.name}>
                                      <div
                                        href={item.href}
                                        className={classNames(
                                          router.pathname === item.href
                                            ? "button-menu bg-[#502c92] text-white"
                                            : "text-indigo-200 hover:bg-[#502c92]/70 hover:text-white",
                                          "group flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-[16px] font-semibold leading-6 opacity-40"
                                        )}
                                      >
                                        <item.icon
                                          className={classNames(
                                            router.pathname === item.href
                                              ? "text-white"
                                              : "text-indigo-200 group-hover:text-white",
                                            "h-6 w-6 shrink-0"
                                          )}
                                          aria-hidden="true"
                                        />
                                        {item.name}{" "}
                                        <span className="inline-flex items-center rounded-md bg-purple-700 px-1.5 py-0.5 text-xs font-bold text-purple-100">
                                          SOON
                                        </span>
                                      </div>
                                    </Tooltip>
                                  ) : (
                                    <Tooltip tooltipText={item.name}>
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          router.pathname === item.href
                                            ? "button-menu bg-[#502c92] text-white"
                                            : "text-indigo-200 hover:bg-[#502c92]/70 hover:text-white",
                                          "group flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-[16px] font-semibold leading-6"
                                        )}
                                      >
                                        <item.icon
                                          className={classNames(
                                            router.pathname === item.href
                                              ? "text-white"
                                              : "text-indigo-200 group-hover:text-white",
                                            "h-6 w-6 shrink-0"
                                          )}
                                          aria-hidden="true"
                                        />
                                        {item.name}
                                      </a>
                                    </Tooltip>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs font-bold leading-6 text-[#9c27b0]">XGAMEA</div>
                            <div role="list" className="-mx-2 mt-2 space-y-1">
                              {games.map((item) => (
                                <div key={item.name} className="w-full">
                                  {item.current ? (
                                    <Tooltip tooltipText={item.name}>
                                      <div
                                        href={item.href}
                                        className={classNames(
                                          router.pathname === item.href
                                            ? "button-menu bg-[#502c92] text-white"
                                            : "text-indigo-200 hover:bg-[#502c92]/70 hover:text-white",
                                          "group flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-[16px] font-semibold leading-6 opacity-40"
                                        )}
                                      >
                                        <item.icon
                                          className={classNames(
                                            router.pathname === item.href
                                              ? "text-white"
                                              : "text-indigo-200 group-hover:text-white",
                                            "h-6 w-6 shrink-0"
                                          )}
                                          aria-hidden="true"
                                        />
                                        {item.name}{" "}
                                        <span className="inline-flex items-center rounded-md bg-purple-700 px-1.5 py-0.5 text-xs font-bold text-purple-100">
                                          SOON
                                        </span>
                                      </div>
                                    </Tooltip>
                                  ) : (
                                    <Tooltip tooltipText={item.name}>
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          router.pathname === item.href
                                            ? "button-menu bg-[#502c92] text-white"
                                            : "text-indigo-200 hover:bg-[#502c92]/70 hover:text-white",
                                          "group flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-[16px] font-semibold leading-6"
                                        )}
                                      >
                                        <item.icon
                                          className={classNames(
                                            router.pathname === item.href
                                              ? "text-white"
                                              : "text-indigo-200 group-hover:text-white",
                                            "h-6 w-6 shrink-0"
                                          )}
                                          aria-hidden="true"
                                        />
                                        {item.name}
                                      </a>
                                    </Tooltip>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="leading-1 group flex items-center gap-x-3 rounded-lg px-2 py-2.5 text-[16px] font-semibold">
                            <ImgS3 alt="" src="/moneda-ximbia.png" className="h-6 w-6" />
                            <div className="text-bold px-1 py-2 text-white">XMB: $ 0</div>
                          </div>
                          <div className="leading-1 group -mt-10 flex items-center gap-x-3 rounded-lg px-2 py-2.5 text-[16px] font-semibold">
                            <ImgS3 alt="" src="/moneda-biotic.png" className="h-6 w-6" />
                            <div className="text-bold px-1 py-2 text-white">BTIC: $ 0</div>
                          </div>
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col ">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="background-purple flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4">
              <div className="mt-7 flex  shrink-0 items-center justify-center">
                <svg viewBox="0 0 415.67 193.8" focusable="false" className="w-44">
                  <path
                    fill="currentColor"
                    d="M65.89 121.54c-21.31 23.58-42.85 43.23-62.58 69.01 24.27-22.77 45.66-36.09 71.38-55.96l-8.8-13.05zm147.65-63.61l.56-14.48-47.45-18.23c-20.26 16.47-39.78 33.98-58.63 52.42l10.33 25.46c30.62-22.82 58.67-34.34 95.19-45.17z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M87.29 116.82L84.45 12.3l15.34 7.12c-6.87 59 20.85 111.37 66.41 160.33l-78.91-62.93z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M169.18 182.07C115.72 130.08 90.04 69.63 87.94 2L17.59 66.49c44.62 49.16 95.8 86.52 151.59 115.58M62.85 118.02C41.07 142.12 20.17 167.45 0 193.8c24.81-23.27 50.16-45.46 76.45-65.77l-13.6-10.01z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M220.27 44.71l-54.44-25.13c-20.71 16.83-40.65 34.72-59.92 53.57l10.56 26.02c32.75-21.86 67.12-40.47 103.8-54.46"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M409.27 132.08l-4.62-9.39h-17.39l1.76-3.67h13.94l-10.27-21.13-16.58 34.19h-4.4l18.49-37.86h4.99l18.49 37.86h-4.41zm-53.27 0V94.22h4.04v37.86H356zm-27.51-37.86c2.64 0 4.9.94 6.79 2.83 1.88 1.88 2.82 4.17 2.82 6.86 0 3.28-1.32 5.97-3.96 8.07 1.42.88 2.63 2.16 3.63 3.85s1.5 3.58 1.5 5.69c0 3.03-1 5.55-3.01 7.56s-4.5 3.01-7.48 3.01h-23.85V94.22h23.56zm-19.52 3.81v30.23h19c2.35 0 4.15-.6 5.39-1.8 1.25-1.2 1.87-2.83 1.87-4.88 0-2.2-.68-4.01-2.05-5.43-1.37-1.42-2.98-2.13-4.84-2.13h-13.21v-3.67h12.77c1.81 0 3.29-.64 4.44-1.91 1.15-1.27 1.72-2.81 1.72-4.62 0-1.76-.56-3.17-1.69-4.22-1.13-1.05-2.67-1.58-4.62-1.58h-18.78zm-22.67 5.58v28.47h-4.04v-23.33l4.04-5.14zm-36.98-9.39l16.29 19.88 15.92-19.88h4.77l-20.62 25.83-16.36-19.88v31.92h-4.03V94.22h4.03zm-27.36 37.86V94.22H226v37.86h-4.04zM176.1 94.22l9.54 10.71-2.49 3.01-12.4-13.72h5.35zm15.78 18.12l18.05 19.74h-5.36l-15.19-16.66-13.72 16.66h-5.14l31.25-37.86h5.14l-15.03 18.12z"
                  ></path>
                </svg>
              </div>
              <nav className="flex flex-1 flex-col mt-8">
                <div role="list" className="flex flex-1 flex-col gap-y-7">
                  <div>
                    <div className="text-xs font-bold leading-6 text-[#9c27b0]">XWALLET</div>
                    <div role="list" className="-mx-2 mt-3 space-y-2">
                      {navigation.map((item) => (
                        <div key={item.name} className="w-full">
                          {item.current ? (
                            <Tooltip tooltipText={item.name}>
                              <div
                                href={item.href}
                                className={classNames(
                                  router.pathname === item.href
                                    ? "button-menu bg-[#502c92] text-white"
                                    : "text-indigo-200 hover:bg-[#502c92]/70 hover:text-white",
                                  "group flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-[16px] font-semibold leading-6 opacity-40"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    router.pathname === item.href
                                      ? "text-white"
                                      : "text-indigo-200 group-hover:text-white",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}{" "}
                                <span className="inline-flex items-center rounded-md bg-purple-700 px-1.5 py-0.5 text-xs font-bold text-purple-100">
                                  SOON
                                </span>
                              </div>
                            </Tooltip>
                          ) : (
                            <Tooltip tooltipText={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  router.pathname === item.href
                                    ? "button-menu bg-[#502c92] text-white"
                                    : "text-indigo-200 hover:bg-[#502c92]/70 hover:text-white",
                                  "group flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-[16px] font-semibold leading-6"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    router.pathname === item.href
                                      ? "text-white"
                                      : "text-indigo-200 group-hover:text-white",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </Tooltip>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-6 text-[#9c27b0]">XGAMEA</div>
                    <div role="list" className="-mx-2 mt-2 space-y-1">
                      {games.map((item) => (
                        <div key={item.name} className="w-full">
                          {item.current ? (
                            <Tooltip tooltipText={item.name}>
                              <div
                                href={item.href}
                                className={classNames(
                                  router.pathname === item.href
                                    ? "button-menu bg-[#502c92] text-white"
                                    : "text-indigo-200 hover:bg-[#502c92]/70 hover:text-white",
                                  "group flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-[16px] font-semibold leading-6 opacity-40"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    router.pathname === item.href
                                      ? "text-white"
                                      : "text-indigo-200 group-hover:text-white",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}{" "}
                                <span className="inline-flex items-center rounded-md bg-purple-700 px-1.5 py-0.5 text-xs font-bold text-purple-100">
                                  SOON
                                </span>
                              </div>
                            </Tooltip>
                          ) : (
                            <Tooltip tooltipText={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  router.pathname === item.href
                                    ? "button-menu bg-[#502c92] text-white"
                                    : "text-indigo-200 hover:bg-[#502c92]/70 hover:text-white",
                                  "group flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-[16px] font-semibold leading-6"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    router.pathname === item.href
                                      ? "text-white"
                                      : "text-indigo-200 group-hover:text-white",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </Tooltip>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/*   <Audited /> */}

                  <div className="leading-1 group flex items-center gap-x-3 rounded-lg px-2 py-2.5 text-[16px] font-semibold">
                    <ImgS3 src="/moneda-ximbia.png" className="h-6 w-6" />
                    <div className="text-bold px-1 py-2 text-white">XMB: $ 0</div>
                  </div>
                  <div className="leading-1 group -mt-10 flex items-center gap-x-3 rounded-lg px-2 py-2.5 text-[16px] font-semibold">
                    <ImgS3 src="/moneda-biotic.png" className="h-6 w-6" />
                    <div className="text-bold px-1 py-2 text-white">BTIC: $ 0</div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div className="lg:pl-72">
            <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-purple-700 bg-[#18011f] px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-200 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Separator */}
              <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

              <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6 ">
                <div className="flex items-center justify-end gap-x-4 lg:gap-x-6">{userMenu}</div>
              </div>
            </div>

            <main>
           
                    {children}
              
            </main>
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
    <Navbar userMenu={<UserMenu />}>


      <UikitMenu
        linkComponent={LinkComponent}
        rightSide={
          <>
            <UserMenu />
          </>
        }

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
          </Navbar>
    </>
  )
}

export default Menu