import React from "react"

import { ReactNodeWithConfig } from "../types"

type Slots<T> = Record<keyof T, React.ReactNode>

type PayloadNode = {
  value:
    | {
        name?: string
        displayName?: string
      }
    | string[]
}

export function isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
  return k in x
}

export function getSlotName(root: string, node: ReactNodeWithConfig): string | false {
  console.log(node)
  let slotName: string | false = false
  if (React.isValidElement(node) && node.type && typeof node.type !== "string" && typeof node.type !== "symbol") {
    // console.log(node.type)
    if ("_payload" in node.type && "value" in (node.type._payload as PayloadNode)) {
      const payload = node.type._payload as PayloadNode

      slotName = !Array.isArray(payload.value)
        ? (payload.value.displayName ?? payload.value.name ?? false)
        : payload.value[2]
    } else {
      slotName = node.type?.config?.name ?? node.type.name
    }
  }
  console.log(slotName)

  if (slotName) {
    return slotName.startsWith(root) ? slotName : root + slotName
  }

  return false
}

export function useSlots<T>(
  componentSlots: Slots<T>,
  children: React.ReactNode,
  root: string,
  options?: { collect?: string[] }
): Slots<T> {
  return React.Children.toArray(children).reduce(
    (slots, child: React.ReactNode) => {
      const slotName = getSlotName(root, child)

      if (child && slotName && isKey(componentSlots, slotName)) {
        if (options?.collect?.includes(slotName)) {
          slots[slotName] = slots[slotName] ? [...[slots[slotName]].flat(), child] : [child]
        } else {
          slots[slotName] = child
        }
      } else if ("Children" in slots) {
        slots.Children = slots.Children ? [...[slots.Children].flat(), child] : [child]
      }

      return slots
    },
    { ...componentSlots }
  )
}
