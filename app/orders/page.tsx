"use client"

import { TopBar } from "@worldcoin/mini-apps-ui-kit-react"
import { useRouter } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"

import { IoChevronForward } from "react-icons/io5"
import { FaChevronLeft, FaRegCalendarAlt } from "react-icons/fa"
import { TbMessageDots } from "react-icons/tb"

export default function PageOrders() {
  const router = useRouter()

  return (
    <section className="min-h-screen">
      <nav className="sticky bg-white border-b top-0 z-10">
        <TopBar
          className="py-0 px-5"
          startAdornment={
            <button
              onClick={() => router.back()}
              className="bg-black/5 size-10 pr-1 rounded-full grid place-items-center"
            >
              <FaChevronLeft className="text-lg" />
            </button>
          }
          title="Your orders"
        />

        <Tabs defaultValue="active">
          <TabsList>
            <TabsTrigger
              className="border-b-2 px-4 py-2 border-transparent data-[state=active]:border-black font-medium"
              value="active"
            >
              <button>Active</button>
            </TabsTrigger>

            <TabsTrigger
              className="border-b-2 px-4 py-2 border-transparent data-[state=active]:border-black font-medium"
              value="everything"
            >
              <button>Everything</button>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </nav>

      <div className="px-4 mt-2">
        <nav className="flex items-center gap-4 mt-4">
          <h2 className="opacity-70 text-xs">Filter by</h2>

          <div className="h-4 w-px bg-black" />

          <Tabs defaultValue="buys">
            <TabsList className="border h-9 flex font-medium overflow-hidden rounded-full">
              <TabsTrigger
                className="h-full text-sm px-5 text-black/50 data-[state=active]:bg-kadexo-green/15 data-[state=active]:text-kadexo-green"
                value="buys"
              >
                <button>Buys</button>
              </TabsTrigger>

              <div className="h-full w-px bg-black/10" />

              <TabsTrigger
                className="h-full text-sm px-5 text-black/50 data-[state=active]:bg-kadexo-red/10 data-[state=active]:text-kadexo-red"
                value="sells"
              >
                <button>Sells</button>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex-grow" />

          <button className="text-lg">
            <FaRegCalendarAlt />
          </button>
        </nav>

        <div className="flex mt-6 mb-12 flex-col gap-5">
          <Order />
          <Order />
          <Order />
        </div>
      </div>
    </section>
  )
}

function Order() {
  return (
    <div className="rounded-2xl bg-black/2 p-6 py-4">
      <div className="-mx-6 px-6 pb-4 flex gap-1 items-center border-b">
        <div>
          <nav className="flex font-medium items-center gap-1">
            <span>Sell</span>
            <span>USDT</span>
          </nav>
          <p className="text-xs">March 1, 2023 - 12:00 PM</p>
        </div>
        <div className="flex-grow" />
        <span>Completed</span>
        <IoChevronForward />
      </div>

      <div className="flex mt-3 flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="opacity-70 text-sm">Amount</span>
          <span className="text-lg font-medium">52.42 EUR</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="opacity-70 text-sm">Price</span>
          <span>0.95 EUR</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="opacity-70 text-sm">Qty sold</span>
          <span>55.00 USDT</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="opacity-70 text-sm">Fees</span>
          <span>0.004 USDT</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="opacity-70 text-sm">Order ID</span>
          <span>2323-2323-2323-2323</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="opacity-70 text-sm">Seller</span>
          <span className="font-medium inline-flex items-center gap-2">
            <span>someone</span>
            <button className="bg-black/3 rounded-full p-2">
              <TbMessageDots className="scale-125" />
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}
