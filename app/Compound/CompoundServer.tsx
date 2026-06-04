import React from "react"

const CompoundServer = ({ children }: { children: React.ReactNode }) => {
  console.log("")
  ///@ts-expect-error no strict check of child
  React.Children.toArray(children).map((child) => console.log(`[Server] child type is ${child.type?.displayName}`))

  return children
}

const CompoundServerHeading = ({ children }: { children: React.ReactNode }) => {
  return <h2>{children}</h2>
}

CompoundServer.Heading = CompoundServerHeading
CompoundServerHeading.displayName = "CompoundServerHeading"

export { CompoundServer }
