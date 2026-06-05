"use client"
import { useSlots } from "@/app/hooks/useSlots"
import React from "react"

const componentSlots = {
  CompoundClientHeading: null,
  CompoundClientContent: null,
}

const CompoundClientRoot = ({ children }: { children: React.ReactNode }) => {
  console.log("render")

  // React.Children.toArray(children).map((child) => console.log(`[Client] child type is ${child.type?.displayName}`))
  // console.log(children)

  const slots = useSlots(componentSlots, children, "CompoundClient")

  console.log(slots)

  // React.Children.toArray(children).map((child) => console.log(child))
  // console.log("")
  return (
    <div>
      {slots.CompoundClientHeading}
      {slots.CompoundClientContent}
    </div>
  )
}

function CompoundClientHeading({ children }: { children: React.ReactNode }) {
  return <h2>{children}</h2>
}

function CompoundClientContent({ children }: { children: React.ReactNode }) {
  return <div className="content">{children}</div>
}

CompoundClientRoot.Heading = CompoundClientHeading
CompoundClientRoot.Content = CompoundClientContent

CompoundClientHeading.displayName = "CompoundClientHeading"
CompoundClientContent.displayName = "CompoundClientContent"

export { CompoundClientRoot as CompoundClient, CompoundClientHeading, CompoundClientContent }
export { CompoundClientRoot as Root, CompoundClientContent as Content, CompoundClientHeading as Heading }
