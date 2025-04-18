"use client"

import { useEffect } from "react"

export function useOnRouterBack(onRouterBack: (e: PopStateEvent) => void) {
  useEffect(() => {
    const handleRouteChange = (e: PopStateEvent) => {
      // Only call the callback if it's a back navigation
      // This is a bit of a workaround since Next.js doesn't expose history state directly
      onRouterBack(e)
    }

    window.addEventListener("popstate", handleRouteChange as any)

    return () => {
      window.removeEventListener("popstate", handleRouteChange as any)
    }
  }, [onRouterBack])
}
