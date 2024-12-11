import { Header } from "@/components/app/header"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f7f6] to-white">
      <Header />
      {children}
    </div>
  )
}

