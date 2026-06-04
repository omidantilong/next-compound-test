"use client"
import React from "react"

const CompoundClient = ({ children }: { children: React.ReactNode }) => {
  ///@ts-expect-error no strict check of child
  React.Children.toArray(children).map((child) => console.log(`[Client] child type is ${child.type?.displayName}`))
  console.log("")
  return children
}

const CompoundClientHeading = ({ children }: { children: React.ReactNode }) => {
  return <h2>{children}</h2>
}

CompoundClient.Heading = CompoundClientHeading

CompoundClientHeading.displayName = "CompoundClientHeading"

export { CompoundClient }
