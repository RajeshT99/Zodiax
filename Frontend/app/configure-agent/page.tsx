"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Upload, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export default function ConfigureAgentPage() {
  const [profileImage, setProfileImage] = useState<string>("/placeholder.svg")
  const router = useRouter()

  const capabilities = [
    {
      id: "cognitive-core",
      title: "Cognitive Core",
      description: "Enables sequential reasoning and comprehensive analysis",
      icon: "🧠",
    },
    {
      id: "visual-future",
      title: "Visual Future",
      description: "Provides algorithmic image generation capabilities",
      icon: "👁️",
    },
    {
      id: "value-drive",
      title: "Value Drive",
      description: "Enables meaningful value creation through interactions",
      icon: "💎",
    },
    {
      id: "parallel-solve",
      title: "Parallel Problem Solve",
      description: "Solving multiple problems simultaneously",
      icon: "🔄",
    },
    {
      id: "proactive-future",
      title: "Proactive Future Drive",
      description: "Enables forward-thinking and goal-oriented behavior",
      icon: "🎯",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f7f6] to-white pb-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-2xl font-bold">Creating New AI Agent (Existing Token)</h1>
        
        <div className="space-y-8">
          {/* Profile Picture Upload */}
          <div className="flex items-start space-x-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-dashed border-gray-200">
              <Image
                src={profileImage}
                alt="Profile"
                className="h-full w-full object-cover"
                width={64}
                height={64}
              />
              <label className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100">
                <Upload className="h-6 w-6 text-white" />
                <input type="file" className="hidden" onChange={(e) => {
                  if (e.target.files?.[0]) {
                    const url = URL.createObjectURL(e.target.files[0])
                    setProfileImage(url)
                  }
                }} />
              </label>
            </div>
            <div>
              <h2 className="font-medium">Profile Picture</h2>
              <p className="text-sm text-muted-foreground">Upload a profile picture for your AI Agent</p>
            </div>
          </div>

          {/* Basic Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">AI Agent Name *</Label>
              <Input id="name" placeholder="AI Agent Name will be projected according to the token contract address" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contract">Token Contract Address on BASE Chain *</Label>
              <Input id="contract" placeholder="Token Contract Address on BASE Chain" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">AI Agent Description *</Label>
              <Textarea 
                id="description" 
                placeholder="Provide a short intro of your AI Agent. This should include key personalities, capabilities, skills, limitations. This will be user's first go-to when they Agent"
                className="min-h-[100px]"
              />
            </div>
          </div>

          {/* Category and Visibility */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Agent Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gamefi">GameFi</SelectItem>
                  <SelectItem value="defi">DeFi</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                  <SelectItem value="utility">Utility</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                Agent Visibility
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Control whether your agent is visible to other users</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <div className="flex items-center space-x-2">
                <Switch id="visibility" />
                <Label htmlFor="visibility">Public</Label>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <Label>Bio</Label>
            <Textarea 
              placeholder="This is the pitch that will be shown at your agent's profile."
              className="min-h-[100px]"
            />
          </div>

          {/* Agent Capabilities */}
          <div className="space-y-4">
            <Label>Agent Capability *</Label>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
              {capabilities.map((capability) => (
                <div
                  key={capability.id}
                  className="relative rounded-lg border bg-card p-4 hover:border-primary"
                >
                  <div className="mb-2 text-2xl">{capability.icon}</div>
                  <h3 className="mb-1 font-medium">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                  <input
                    type="checkbox"
                    name="capabilities"
                    value={capability.id}
                    className="absolute right-2 top-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* System Prompt Profile */}
          <div className="space-y-4 rounded-lg border bg-slate-50 p-6">
            <h3 className="font-medium">System Prompt Profile</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>You need to define 3 things (roleplay rules):</p>
              <ul className="list-inside list-disc space-y-1">
                <li>This is a customized fictional roleplay that does not involve real brands.</li>
                <li>The end-user is the active role here with specific objective.</li>
                <li>Describe a path in which to provide information and prompt new conversation topics, let make automated beliefs fit the plot.</li>
              </ul>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button 
              className="bg-black text-white hover:bg-black/90"
              onClick={() => router.push("/app")}
            >
              Add Package
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

