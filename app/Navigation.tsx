"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Fragment } from "react"
import { usePathname, useRouter } from "next/navigation"

import MainSelect from "@/components/MainSelect"
import { ALL_TOKENS, useTokenAtom, WLD_TOKEN } from "@/lib/atoms/token"

import { MdOutlineSyncAlt } from "react-icons/md"
import { FaChevronDown, FaFilter } from "react-icons/fa"
import { ALL_CURRENCIES, USD, useCurrencyAtom } from "@/lib/atoms/currency"

export default function Navigation() {
  const [selectedToken, setSelectedToken] = useTokenAtom()
  const [currency, setCurrency] = useCurrencyAtom()
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
                className="text-lg py-3 rounded-none bg-black/3 data-[state=active]:text-white data-[state=active]:bg-kadexo-green"
                value="buy"
              >
                <strong>Buy</strong>
              </TabsTrigger>
              <TabsTrigger
                onClick={() => router.push("/sell")}
                className="text-lg py-3 rounded-none bg-black/3 data-[state=active]:text-white data-[state=active]:bg-kadexo-red"
                value="sell"
              >
                <strong>Sell</strong>
              </TabsTrigger>
            </nav>
          </TabsList>
        </Fragment>
      </Tabs>

      <nav className="flex sticky text-sm top-0 z-1 py-1 bg-gradient-to-bl from-white/100 via-white/100 to-white/45 backdrop-blur-sm gap-5 px-4 items-center">
        <MainSelect
          value={selectedToken.value}
          options={Object.values(ALL_TOKENS)}
          onValueChange={(value) => {
            setSelectedToken((ALL_TOKENS as any)[value])
          }}
        >
          {(selected) => (
            <button className="flex outline-none py-3 items-center gap-1.5">
              <figure
                style={{
                  backgroundImage: `url(/token/${selected?.value}.png)`,
                }}
                className="size-6 bg-cover bg-center bg-black/80 shrink-0 rounded-full"
              />
              <strong>{selected?.label || WLD_TOKEN.label}</strong>
              <FaChevronDown className="ml-1" />
            </button>
          )}
        </MainSelect>

        <button className="flex py-3 items-center gap-1.5">
          <strong>Amount</strong>
          <FaChevronDown className="ml-1" />
        </button>

        <div className="flex-grow" />

        <nav className="flex gap-2 items-center">
          <MainSelect
            value={currency.value}
            options={Object.values(ALL_CURRENCIES)}
            onValueChange={(value) => {
              setCurrency((ALL_CURRENCIES as any)[value])
            }}
          >
            {(selected) => (
              <button className="flex outline-none bg-white border rounded-full py-1.5 px-3 items-center gap-1.5">
                <strong>{selected?.label || USD.label}</strong>
                <MdOutlineSyncAlt className="scale-125" />
              </button>
            )}
          </MainSelect>
          <button className="size-9 bg-white border rounded-xl grid place-items-center">
            <FaFilter />
          </button>
        </nav>
      </nav>
    </Fragment>
  )
}
