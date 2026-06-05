## Next.js React.Children problem

Quick demo to show how Next.js strips the `type` prop from children when rendering sub component with dot notation.

Also, the `type` prop for RSCs may have a different shape depending on render context, and requires inspecting a `payload` prop.

- https://github.com/primer/react/issues/4368
- https://github.com/primer/react/issues/4069
- https://github.com/react-bootstrap/react-bootstrap/issues/6475
- https://github.com/react-bootstrap/react-bootstrap/issues/6669
- https://github.com/vercel/next.js/issues/41940
- https://github.com/vercel/next.js/issues/51593
- https://vercel.com/academy/nextjs-foundations/component-composition-patterns
