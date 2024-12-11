import { SearchFilters } from "@/components/app/search-filters"
import { AgentList } from "@/components/app/agent-list"

export default function AppPage() {
  return (
    <main>
      <SearchFilters />
      <AgentList />
    </main>
  )
}

