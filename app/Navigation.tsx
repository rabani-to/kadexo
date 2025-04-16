"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Fragment } from "react"
import { usePathname, useRouter } from "next/navigation"

import { MdOutlineSyncAlt } from "react-icons/md"
import { FaChevronDown, FaFilter } from "react-icons/fa"

export default function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const isSell = pathname === "/sell"

  return (
    <Fragment>
      <Tabs asChild value={isSell ? "sell" : "buy"} className="w-full">
        <Fragment>
          <TabsList asChild>
            <nav className="w-full bg-white border-b rounded-none h-auto grid grid-cols-2">
              <TabsTrigger
                onClick={() => router.push("/")}
                className="text-lg py-3 rounded-none data-[state=active]:text-white data-[state=active]:bg-kadexo-green"
                value="buy"
              >
                <strong>Buy</strong>
              </TabsTrigger>
              <TabsTrigger
                onClick={() => router.push("/sell")}
                className="text-lg py-3 rounded-none data-[state=active]:text-white data-[state=active]:bg-kadexo-red"
                value="sell"
              >
                <strong>Sell</strong>
              </TabsTrigger>
            </nav>
          </TabsList>
        </Fragment>
      </Tabs>

      <nav className="flex sticky text-sm top-0 z-1 py-1 bg-gradient-to-bl from-white/100 via-white/100 to-white/45 backdrop-blur-sm gap-5 px-4 items-center">
        <button className="flex py-3 items-center gap-1.5">
          <figure className="size-6 bg-black shrink-0 rounded-full" />
          <strong>WLD</strong>
          <FaChevronDown className="ml-1" />
        </button>

        <button className="flex py-3 items-center gap-1.5">
          <strong>Amount</strong>
          <FaChevronDown className="ml-1" />
        </button>

        <div className="flex-grow" />

        <nav className="flex gap-2 items-center">
          <button className="flex bg-white border rounded-full py-1.5 px-3 items-center gap-1.5">
            <strong>EUR</strong>
            <MdOutlineSyncAlt className="scale-125" />
          </button>

          <button className="size-9 bg-white border rounded-xl grid place-items-center">
            <FaFilter />
          </button>
        </nav>
      </nav>
    </Fragment>
  )
}
