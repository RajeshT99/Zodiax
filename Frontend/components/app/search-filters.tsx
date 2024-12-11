"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/modal"

export function SearchFilters() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleLaunchNewToken = () => {
    setOpen(false)
    router.push("/launch-token")
  }

  const handleExistingToken = () => {
    setOpen(false)
    router.push("/configure-agent")
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full md:w-96">
          <Input type="search" placeholder="Search Agent..." className="w-full" />
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#40bfb4] hover:bg-[#3ab0a6]">Create New AI Agent</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New AI Agent</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col space-y-4 pt-4">
              <Button onClick={handleLaunchNewToken}>Launch a New Token</Button>
              <Button variant="outline" onClick={handleExistingToken}>I have my own Token</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <Select defaultValue="all">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="ai-agents">AI Agents</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="market-cap">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="market-cap">Market Cap</SelectItem>
            <SelectItem value="day-change">1 Day Change</SelectItem>
            <SelectItem value="value-locked">Value Locked</SelectItem>
            <SelectItem value="holders">Holder Count</SelectItem>
            <SelectItem value="inferences">Inferences</SelectItem>
            <SelectItem value="intelligence">Intelligence</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

