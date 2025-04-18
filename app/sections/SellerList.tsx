"use client"

import { useCurrencyAtom } from "@/lib/atoms/currency"
import { useTokenAtom, WLD_TOKEN } from "@/lib/atoms/token"
import { cn } from "@/lib/utils"
import type { PropsWithChildren } from "react"
import { LuTimer } from "react-icons/lu"
import { MdVerified } from "react-icons/md"

export default function SellerList({ type = "buy" }: { type: "buy" | "sell" }) {
  return (
    <div className="grid mb-24">
      <Seller type={type} />
      <Seller type={type} />
      <Seller type={type} />
      <Seller type={type} />
    </div>
  )
}

function Seller({ type = "buy" }: { type?: "buy" | "sell" }) {
  const [token] = useTokenAtom()
  const [currency] = useCurrencyAtom()

  const isSelling = type === "sell"

  return (
    <div className="border-b p-4 pb-8 border-black/5">
      <nav className="flex items-center">
        <div className="flex items-start gap-1.5">
          <div className="relative mt-1 mr-1">
            <figure className="bg-black rounded-lg overflow-hidden size-7"></figure>
            <div className="absolute border border-white bg-kadexo-green size-2.5 rounded-full -bottom-0.5 -right-0.5" />
          </div>
          <div>
            <h2>Fastdeals XYZ</h2>
            <span className="flex -mt-1 text-xs items-center gap-1">
              <LuTimer className="scale-125" />
              <span>3 minutes</span>
            </span>
          </div>
          <MdVerified className="text-kadexo-green mt-1" />
        </div>

        <div className="flex-grow" />

        <div className="text-sm opacity-70">
          <span>320 Order(s) | 100%</span>
        </div>
      </nav>

      <div className="mt-4 grid gap-1">
        <div>
          <span className="opacity-70 mr-1 text-sm">{currency.label}</span>{" "}
          <strong className="text-2xl">0.750</strong>
        </div>

        <div className="text-sm">
          <span className="opacity-70">Available:</span>{" "}
          <span>106.6667 USDT</span>
        </div>
        <div className="text-sm">
          <span className="opacity-70 text-sm">Limits:</span>{" "}
          <span>2.000 - 5.000 {currency.label}</span>
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

        <button
          className={cn(
            isSelling ? "bg-kadexo-red" : "bg-kadexo-green",
            "shrink-0 rounded-md py-1.5 px-6 min-w-32 font-medium text-white"
          )}
        >
          {isSelling ? "Sell" : "Buy"} {token?.label || WLD_TOKEN.label}
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
