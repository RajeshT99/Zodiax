import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Agent } from "@/types/agent"

const agents: Agent[] = [
  {
    id: "1",
    name: "G.A.M.E",
    image: "/placeholder.svg",
    marketCap: "$46.9m",
    dayChange: "+12.48%",
    valueLocked: "$9m",
    holderCount: 13858,
    lifetimeInferences: 460147,
    intelligence: 530,
    tags: ["GameFi"]
  },
  {
    id: "2",
    name: "Luna",
    image: "/placeholder.svg",
    marketCap: "$54.9m",
    dayChange: "-3.3%",
    valueLocked: "$7.5m",
    holderCount: 72692,
    lifetimeInferences: 133106,
    intelligence: 10856,
    tags: ["Influencer"]
  },
  // Add more agents as needed
]

export function AgentList() {
  return (
    <div className="container mx-auto px-4 pb-8">
      <Card>
        <div className="divide-y">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="flex items-center justify-between p-4"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{agent.name}</h3>
                  <div className="flex gap-2">
                    {agent.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-8 text-sm">
                <div>{agent.marketCap}</div>
                <div className={agent.dayChange.startsWith("+") ? "text-green-600" : "text-red-600"}>
                  {agent.dayChange}
                </div>
                <div>{agent.valueLocked}</div>
                <div>{agent.holderCount.toLocaleString()}</div>
                <div>{agent.lifetimeInferences.toLocaleString()}</div>
                <div>{agent.intelligence}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

