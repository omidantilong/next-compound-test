## Next.js React.Children problem

Quick demo to show how Next.js strips the `type` prop from children when rendering sub component with dot notation.

Also, the `type` prop for RSCs may have a different shape depending on render context, and requires inspecting a `payload` prop.
