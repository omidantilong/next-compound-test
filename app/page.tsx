import { CompoundClient } from "@/app/Compound/CompoundClient"
import { CompoundServer } from "@/app/Compound/CompoundServer"

export default function Home() {
  return (
    <main>
      <CompoundServer>
        <CompoundServer.Heading>Without `use client`</CompoundServer.Heading>
      </CompoundServer>
      <CompoundClient>
        <CompoundClient.Heading>With `use client`</CompoundClient.Heading>
      </CompoundClient>
    </main>
  )
}
