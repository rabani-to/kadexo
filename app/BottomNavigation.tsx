"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Fragment } from "react"
import { FaAd } from "react-icons/fa"
import { MdCandlestickChart, MdPeopleAlt } from "react-icons/md"

import { TiHome } from "react-icons/ti"

export default function BottomNavigation() {
  return (
    <Tabs defaultValue="market" asChild>
      <Fragment>
        <TabsList asChild>
          <nav className="w-full sticky bottom-0 !bg-black/90 border-t border-black backdrop-blur rounded-none h-auto grid grid-cols-4">
            <TabsTrigger
              className="grid place-items-center p-1.5 h-12 rounded-none text-white !bg-transparent text-white/40 data-[state=active]:text-yellow-400"
              value="market"
            >
              <div className="size-5 grid place-items-center">
                <TiHome className="text-xl" />
              </div>
              <strong className="text-xs">Market</strong>
            </TabsTrigger>

            <TabsTrigger
              className="grid place-items-center p-1.5 h-12 rounded-none text-white !bg-transparent text-white/40 data-[state=active]:text-yellow-400"
              value="orders"
            >
              <div className="size-5 grid place-items-center">
                <MdCandlestickChart className="text-xl scale-105" />
              </div>
              <strong className="text-xs">Orders</strong>
            </TabsTrigger>

            <TabsTrigger
              className="grid place-items-center p-1.5 h-12 rounded-none text-white !bg-transparent text-white/40 data-[state=active]:text-yellow-400"
              value="ads"
            >
              <div className="size-5 grid place-items-center">
                <FaAd className="text-xl" />
              </div>
              <strong className="text-xs">Ads</strong>
            </TabsTrigger>

            <TabsTrigger
              className="grid place-items-center p-1.5 h-12 rounded-none text-white !bg-transparent text-white/40 data-[state=active]:text-yellow-400"
              value="profile"
            >
              <div className="size-5 grid place-items-center">
                <MdPeopleAlt className="text-xl" />
              </div>
              <strong className="text-xs">Profile</strong>
            </TabsTrigger>
          </nav>
        </TabsList>
      </Fragment>
    </Tabs>
  )
}
