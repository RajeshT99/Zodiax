"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function LaunchTokenPage() {
  const [step, setStep] = useState(1)
  const router = useRouter()

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      router.push("/app")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f7f6] to-[#e8f7e8]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">Launch a New Token</h1>
        <div className="mb-8 flex justify-between">
          <div className={`h-2 w-1/3 ${step >= 1 ? "bg-[#40bfb4]" : "bg-gray-200"}`}></div>
          <div className={`h-2 w-1/3 ${step >= 2 ? "bg-[#40bfb4]" : "bg-gray-200"}`}></div>
          <div className={`h-2 w-1/3 ${step >= 3 ? "bg-[#40bfb4]" : "bg-gray-200"}`}></div>
        </div>
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Information</h2>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter token name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="symbol">Symbol</Label>
              <Input id="symbol" placeholder="Enter token symbol" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter token description" />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Token Economics</h2>
            <div className="space-y-2">
              <Label htmlFor="supply">Total Supply</Label>
              <Input id="supply" type="number" placeholder="Enter total supply" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="decimals">Decimals</Label>
              <Input id="decimals" type="number" placeholder="Enter number of decimals" />
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Confirm and Launch</h2>
            <p>Please review your token details and click "Launch" to create your new token.</p>
          </div>
        )}
        <div className="mt-8 flex justify-end">
          <Button onClick={handleNext}>{step === 3 ? "Launch" : "Next"}</Button>
        </div>
      </div>
    </div>
  )
}

