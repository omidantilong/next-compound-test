// import { CompoundClient, CompoundClientContent, CompoundClientHeading } from "@/app/Compound/CompoundClient"
import { CompoundServer } from "@/app/Compound/CompoundServer"
// import * as Popover from "@radix-ui/react-popover"

// import * as CompoundClient from "@/app/Compound/CompoundClient"

import { CompoundClient, CompoundClientContent, CompoundClientHeading } from "@/app/Compound/CompoundClient"
import { Accordion } from "@carbon/react"
// import { ActionList } from "@primer/react"

export default function Home() {
  return (
    <main>
      <CompoundServer>
        <CompoundServer.Heading>
          <code>CompoundServer.Heading</code>
        </CompoundServer.Heading>
        <CompoundServer.Content>
          <ul>
            <li>
              Without <code>use client</code> in component
            </li>
            <li>Slots work as normal, all rendering on server</li>
          </ul>
        </CompoundServer.Content>
      </CompoundServer>
      <CompoundClient>
        <CompoundClientHeading>
          <code>CompoundClientHeading</code>
        </CompoundClientHeading>
        <CompoundClientContent>
          <ul>
            <li>
              With <code>use client</code> in component
            </li>
            <li>Slots require inspecting RSC payload</li>
            <li>Cannot use dot notation</li>
            <li>Subcomponents must be imported individually</li>
            <li>Other libraries have the same problem such as @primer/react</li>
            <li>Some libraries avoid dot notation entirely such as @carbon/react</li>
          </ul>
        </CompoundClientContent>
      </CompoundClient>

      {/* <ActionList>
        <ActionList.Heading as="h2">Foo</ActionList.Heading>
      </ActionList> */}
    </main>
  )
}
