import type { ReactNode } from "react"

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <div className="min-h-screen bg-white">{children}</div>
}
