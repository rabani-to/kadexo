"use client"

import MainSelect from "@/components/MainSelect"
import { Button, Checkbox, TopBar } from "@worldcoin/mini-apps-ui-kit-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { FaChevronDown, FaChevronLeft } from "react-icons/fa"
import { LuNotebookPen } from "react-icons/lu"

const OPTIONS = {
  active: {
    label: "Active",
    value: "active",
  },
  inactive: {
    label: "Inactive",
    value: "inactive",
  },
}

export default function PageAds() {
  const [adType, setAdType] = useState(OPTIONS.active.value)
  const router = useRouter()

  return (
    <section className="min-h-screen">
      <nav className="border-b bg-white top-0 sticky z-10">
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
          title="Manage ads"
        />
      </nav>

      <nav className="bg-gradient-to-b flex items-center justify-between from-kadexo-green-er/5 to-kadexo-green-er/0 text-black p-4">
        <label className="flex cursor-pointer items-center gap-2">
          <Checkbox defaultChecked />
          <span>Show in the Market</span>
        </label>

        <MainSelect
          value={adType}
          onValueChange={setAdType}
          options={Object.values(OPTIONS)}
        >
          {(selected) => (
            <button className="flex outline-none py-3 items-center gap-1.5">
              <strong>{selected?.label || "Active"}</strong>
              <FaChevronDown className="ml-1" />
            </button>
          )}
        </MainSelect>
      </nav>

      <div className="section mt-16 text-center grid gap-3 place-items-center">
        <LuNotebookPen className="text-5xl" />

        <p className="max-w-xs text-sm opacity-70">
          You don't have any ads yet. Create an ad to start buying and selling
        </p>

        <button className="mt-4 bg-black text-white px-5 py-2 rounded-full">
          Create now
        </button>
      </div>
    </section>
  )
}
