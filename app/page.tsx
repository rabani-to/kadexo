"use client"

import { useWorldAuth } from "@radish-la/world-auth"

export default function Home() {
  const { user, isMiniApp, isConnected, signIn } = useWorldAuth({
    onWrongEnvironment() {
      // something to do when minikit is not installed
      alert("Hey. This only works inside World App")
    },
  })

  return (
    <main className="flex min-h-screen gap-2 flex-col items-center justify-center p-10">
      <h1 className="text-4xl text-center font-bold">You've been World'd!</h1>
      <p className="text-lg opacity-70 max-w-xl text-center">
        Welcome {user?.username ? <strong>{user.username}</strong> : ""} to the
        beginning of your Worldcoin journey. This is a template for building
        mini-apps with Auth and UI ready to go brrr.
      </p>
      <button
        className="bg-black mt-4 mx-auto font-semibold text-xl max-w-xs w-full text-white px-6 py-4 rounded-full"
        onClick={signIn}
      >
        Connect Wallet
      </button>
    </main>
  )
}
