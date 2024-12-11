import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Zodiax</span>
          <span className="text-sm text-muted-foreground">PROTOCOL</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Buy</Button>
          <Button>Connect</Button>
        </div>
      </div>
    </header>
  )
}

