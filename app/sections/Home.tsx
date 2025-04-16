"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Fragment, PropsWithChildren } from "react"

import { LuTimer } from "react-icons/lu"
import { MdVerified } from "react-icons/md"

export default function SectionHome() {
  return (
    <main className="min-h-screen">
      <Tabs asChild defaultValue="buy" className="w-full">
        <Fragment>
          <TabsList asChild>
            <nav className="w-full bg-white border-b p-0.5 rounded-none h-auto grid grid-cols-2">
              <TabsTrigger
                className="text-lg py-2 rounded-lg data-[state=active]:text-white data-[state=active]:bg-kadexo-green"
                value="buy"
              >
                <strong>Buy</strong>
              </TabsTrigger>
              <TabsTrigger
                className="text-lg py-2 rounded-lg data-[state=active]:text-white data-[state=active]:bg-kadexo-red"
                value="sell"
              >
                <strong>Sell</strong>
              </TabsTrigger>
            </nav>
          </TabsList>
        </Fragment>
      </Tabs>
      <div className="grid mb-24">
        <Seller />
        <Seller />
        <Seller />
        <Seller />
      </div>
    </main>
  )
}

function Seller() {
  return (
    <div className="border-b p-4 pb-8 border-black/5">
      <nav className="flex items-center">
        <div className="flex items-center gap-1">
          <div className="relative mr-1">
            <figure className="bg-black rounded-lg overflow-hidden size-6"></figure>
            <div className="absolute border border-white bg-kadexo-green size-2 rounded-full -bottom-0.5 -right-0.5" />
          </div>
          <h2>Fastdeals XYZ</h2>
          <MdVerified className="text-kadexo-green" />
        </div>

        <div className="flex-grow" />

        <div className="flex items-center gap-1 text-xs opacity-70">
          <LuTimer />
          <span>3 minutes</span>
        </div>
      </nav>

      <nav className="mt-1 opacity-70 text-sm">320 Order(s) | 100%</nav>

      <div className="mt-3 grid gap-1">
        <div>
          <span className="opacity-70 mr-1 text-sm">EUR</span>{" "}
          <strong className="text-2xl">0.750</strong>
        </div>
        <div className="text-sm">
          <span className="opacity-70">Available:</span>{" "}
          <span>106.6667 USDT</span>
        </div>
        <div className="text-sm">
          <span className="opacity-70 text-sm">Limits:</span>{" "}
          <span>2.000 - 5.000 EUR</span>
        </div>
      </div>

      <nav className="flex items-end justify-between mt-5 gap-8">
        <div className="flex mb-0.5 gap-2.5 flex-wrap">
          <TransferType color="#10298e">BBVA</TransferType>
          <TransferType color="#102981">SEPA Instant</TransferType>
          <TransferType color="#63aa99">N26</TransferType>
          <TransferType color="#000">Revolut</TransferType>
          <TransferType color="#99e778">Wise</TransferType>
        </div>

        <button className="bg-kadexo-green shrink-0 rounded-md py-1.5 w-32 font-semibold text-white">
          Buy
        </button>
      </nav>
    </div>
  )
}

function TransferType({
  children,
  color,
}: PropsWithChildren<{
  color: `#${string}`
}>) {
  return (
    <div
      style={{
        borderLeft: `3px solid ${color}`,
      }}
      className="h-3 flex items-center pl-1 text-xs"
    >
      <div className="h-0.5 opacity-60 flex items-center">{children}</div>
    </div>
  )
}
