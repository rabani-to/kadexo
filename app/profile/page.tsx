"use client"

import { TopBar } from "@worldcoin/mini-apps-ui-kit-react"
import { useRouter } from "next/navigation"

import { FaChevronLeft } from "react-icons/fa"
import { MdVerified } from "react-icons/md"
import { FiEdit, FiTrash2 } from "react-icons/fi"
import { IoAdd } from "react-icons/io5"

export default function PageProfile() {
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
          title="Manage profile"
        />
      </nav>

      <div className="flex px-4 mt-4 mb-12 flex-col gap-5">
        <div className="bg-kadexo-green-er flex gap-3 items-center p-4 rounded-2xl">
          <figure className="rounded-full bg-black size-10 overflow-hidden"></figure>
          <div>
            <h2 className="font-semibold">d3portillo</h2>
            <nav className="flex mt-0.5 gap-2 whitespace-nowrap text-xs items-center">
              <div className="flex items-center gap-1">
                <MdVerified className="text-black scale-105" />
                <span>Human</span>
              </div>

              <div className="flex items-center gap-1">
                <MdVerified className="text-black scale-105" />
                <span>Email</span>
              </div>

              <div className="flex items-center gap-1">
                <MdVerified className="text-black scale-105" />
                <span>Phone</span>
              </div>
            </nav>
          </div>
        </div>

        <div className="p-2 pt-0 gap-4 rounded-2xl grid grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold">4</h2>
            <span className="text-xs opacity-70">Completed orders</span>
          </div>

          <div>
            <h2 className="text-lg font-semibold">100%</h2>
            <span className="text-xs opacity-70">Completition rate</span>
          </div>

          <div>
            <h2 className="text-lg font-semibold">240</h2>
            <span className="text-xs opacity-70">Total orders</span>
          </div>

          <div>
            <h2 className="text-lg font-semibold">100%</h2>
            <span className="text-xs opacity-70">Reputation</span>
          </div>
        </div>

        <div className="-mx-4 px-5 border-y py-4">
          <span className="w-8 inline-block">💰</span>
          <span className="font-medium">Payment methods</span>
        </div>

        <div className="bg-black/2 py-4 px-5 rounded-2xl">
          <h2 className="text-sm font-medium">SEPA Instant</h2>
          <div className="mt-1.5 flex flex-col gap-1">
            <p className="text-xs">Jhon Doe</p>
            <p className="text-xs">ES1234567890123456789012</p>
            <p className="text-xs">BBVA</p>
          </div>

          <nav className="-mx-5 mt-5 pt-3 text-sm border-t flex gap-5 items-center justify-end px-5">
            <button className="flex px-1 opacity-70 items-center gap-1">
              <FiTrash2 />
              <span>Remove</span>
            </button>

            <button className="flex px-1 opacity-70 items-center gap-1">
              <FiEdit />
              <span>Edit</span>
            </button>
          </nav>
        </div>

        <button className="border text-sm flex items-center gap-2 justify-center h-12 font-medium border-dashed rounded-2xl">
          <IoAdd className="scale-125" />
          <span>Add payment method</span>
        </button>

        <div className="-mx-4 mt-16 px-5 border-y py-4">
          <span className="w-8 inline-block">🔔</span>
          <span className="font-medium">Notifications</span>
        </div>
      </div>
    </section>
  )
}
