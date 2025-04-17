import type { PropsWithChildren } from "react"
import Navigation from "./Navigation"
import BottomNavigation from "./BottomNavigation"

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen w-full max-w-2xl mx-auto">
      <Navigation />
      {children}
      <BottomNavigation />
    </main>
  )
}
