import { Network, Route } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const gateways = [
  {
    name: "mcpgateway1",
    type: "MCP Gateway",
    status: "Ready",
    endpoint: "/gateways/mcpgateway1",
  },
  {
    name: "anthropicgateway1",
    type: "Anthropic Gateway",
    status: "Ready",
    endpoint: "/gateways/anthropicgateway1",
  },
  {
    name: "llm-llama-1",
    type: "LLM Gateway",
    status: "Ready",
    endpoint: "/gateways/llm-llama-1",
  },
]

export default function GatewaysPage() {
  return (
    <main className="bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between border-b py-4">
          <div>
            <h1 className="text-xl font-semibold">Gateways</h1>
            <p className="text-[15px] text-muted-foreground">
              {gateways.length} gateway{gateways.length !== 1 ? "s" : ""} configured
            </p>
          </div>
        </div>

        <div className="py-6">
          <div className="divide-y">
            {gateways.map((gateway) => {
              return (
                <div
                  key={gateway.name}
                  className="group flex items-start gap-3.5 py-4 px-2 -mx-2 rounded-md transition-colors hover:bg-muted/50"
                >
                  <div className="w-10 h-10 rounded bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Network className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h2 className="text-lg font-semibold truncate">{gateway.name}</h2>
                      <Badge variant="secondary" className="text-[13px] px-2 py-0.5 font-normal">
                        {gateway.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                        {gateway.status}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Route className="h-3 w-3" aria-hidden="true" />
                        {gateway.endpoint}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
