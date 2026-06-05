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

const CompoundServerContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="content">{children}</div>
}

CompoundServer.Heading = CompoundServerHeading
CompoundServer.Content = CompoundServerContent

CompoundServerHeading.displayName = "CompoundServerHeading"
CompoundServerContent.displayName = "CompoundServerContent"

export { CompoundServer }
