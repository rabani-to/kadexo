"use client"

import { TopBar } from "@worldcoin/mini-apps-ui-kit-react"
import { useRouter } from "next/navigation"

import { FaChevronLeft } from "react-icons/fa"

export default function PageOrders() {
  const router = useRouter()

  return (
    <section className="min-h-screen">
      <TopBar
        className="sticky bg-white top-0 z-10"
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
    </section>
  )
}
