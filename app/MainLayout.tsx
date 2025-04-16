import type { PropsWithChildren } from "react"
import Navigation from "./Navigation"

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen w-full max-w-2xl mx-auto">
      <Navigation />
      {children}
    </main>
  )
}
