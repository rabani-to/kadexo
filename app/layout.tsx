import "@worldcoin/mini-apps-ui-kit-react/styles.css"
import "./globals.css"

import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { WorldAppProvider } from "@radish-la/world-auth"
import { Rubik, Sora } from "next/font/google"

import { Toaster } from "@/components/ui/sonner"
import { Toaster as WorldToaster } from "@worldcoin/mini-apps-ui-kit-react"
import MainLayout from "./MainLayout"
import { validator } from "./session"

const fontRubik = Rubik({
  subsets: [],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const fontSora = Sora({
  subsets: [],
  variable: "--font-display",
  weight: ["500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Kadexo",
  description: "A P2P decentralized exchange for the Worldchain",
  metadataBase: new URL("https://kadexo.vercel.app"),
}

const ErudaProvider = dynamic(
  () => import("../components/Eruda").then((r) => r.ErudaProvider),
  {
    ssr: false,
  }
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontRubik.variable} ${fontSora.variable} ${fontRubik.className} antialiased`}
      >
        <WorldToaster duration={2_500} />
        <Toaster
          theme="light"
          style={{ zIndex: 55 }}
          position="top-center"
          toastOptions={{
            className: "!rounded-xl",
          }}
          swipeDirections={["left", "top", "right", "bottom"]}
        />
        <WorldAppProvider appName="Kadexo" withValidator={validator}>
          <ErudaProvider>
            <MainLayout>{children}</MainLayout>
          </ErudaProvider>
        </WorldAppProvider>
      </body>
    </html>
  )
}
