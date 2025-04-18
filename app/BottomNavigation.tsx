"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment } from "react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { FaAd } from "react-icons/fa"
import { MdCandlestickChart, MdPeopleAlt } from "react-icons/md"
import { TiHome } from "react-icons/ti"

const ROUTES = {
  market: {
    href: "/",
    value: "market",
  },
  orders: {
    href: "/orders",
    value: "orders",
  },
  ads: {
    href: "/ads",
    value: "ads",
  },
  profile: {
    href: "/profile",
    value: "profile",
  },
} as const

export default function BottomNavigation() {
  const pathname = usePathname()

  const activePathValue =
    Object.values(ROUTES).find((route) => {
      return pathname === route.href
    })?.value || ROUTES.market.value

  return (
    <Tabs value={activePathValue} asChild>
      <Fragment>
        <TabsList asChild>
          <nav className="w-full shrink-0 [&_a]:shrink-0 sticky bottom-0 !bg-black/90 border-t border-black backdrop-blur rounded-none h-auto grid grid-cols-4">
            <TabsTrigger
              asChild
              className="grid place-items-center p-1.5 h-12 rounded-none text-white !bg-transparent text-white/40 data-[state=active]:text-yellow-400"
              value={ROUTES.market.value}
            >
              <Link href={ROUTES.market.href}>
                <div className="size-5 grid place-items-center">
                  <TiHome className="text-xl" />
                </div>
                <span className="text-xs">Market</span>
              </Link>
            </TabsTrigger>

            <TabsTrigger
              asChild
              className="grid place-items-center p-1.5 h-12 rounded-none text-white !bg-transparent text-white/40 data-[state=active]:text-yellow-400"
              value={ROUTES.orders.value}
            >
              <Link href={ROUTES.orders.href}>
                <div className="size-5 grid place-items-center">
                  <MdCandlestickChart className="text-xl scale-105" />
                </div>
                <span className="text-xs">Orders</span>
              </Link>
            </TabsTrigger>

            <TabsTrigger
              asChild
              className="grid place-items-center p-1.5 h-12 rounded-none text-white !bg-transparent text-white/40 data-[state=active]:text-yellow-400"
              value={ROUTES.ads.value}
            >
              <Link href={ROUTES.ads.href}>
                <div className="size-5 grid place-items-center">
                  <FaAd className="text-xl" />
                </div>
                <span className="text-xs">Ads</span>
              </Link>
            </TabsTrigger>

            <TabsTrigger
              asChild
              className="grid place-items-center p-1.5 h-12 rounded-none text-white !bg-transparent text-white/40 data-[state=active]:text-yellow-400"
              value={ROUTES.profile.value}
            >
              <Link href={ROUTES.profile.href}>
                <div className="size-5 grid place-items-center">
                  <MdPeopleAlt className="text-xl" />
                </div>
                <span className="text-xs">Profile</span>
              </Link>
            </TabsTrigger>
          </nav>
        </TabsList>
      </Fragment>
    </Tabs>
  )
}
