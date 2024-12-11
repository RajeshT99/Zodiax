import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f7f6] to-[#e8f7e8]">
      <header className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Zodiax</span>
            <span className="text-sm text-muted-foreground">PROTOCOL</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/protocol" className="text-sm font-medium hover:text-primary">
              Protocol
            </Link>
            <Link href="/writing" className="text-sm font-medium hover:text-primary">
              Writing
            </Link>
            <Button asChild>
              <Link href="/app">Enter App</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
      </main>
    </div>
  )
}

