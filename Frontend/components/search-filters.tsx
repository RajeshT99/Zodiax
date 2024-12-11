import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchFilters() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full md:w-96">
          <Input type="search" placeholder="Search Agent..." className="w-full" />
        </div>
        <Button className="bg-[#40bfb4] hover:bg-[#3ab0a6]">Create New AI Agent</Button>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <Button variant="ghost" className="text-sm">
          All
        </Button>
        <Button variant="ghost" className="text-sm">
          AI Agents
        </Button>
        <Button variant="ghost" className="text-sm">
          Market Cap
        </Button>
        <Button variant="ghost" className="text-sm">
          1 Day Change
        </Button>
        <Button variant="ghost" className="text-sm">
          Total Value Locked
        </Button>
        <Button variant="ghost" className="text-sm">
          Holder Count
        </Button>
        <Button variant="ghost" className="text-sm">
          Lifetime Inferences
        </Button>
        <Button variant="ghost" className="text-sm">
          Intelligence
        </Button>
      </div>
    </div>
  )
}

