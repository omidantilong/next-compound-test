export type StandardSizes = "sm" | "md" | "lg"

export type FormFieldError = { message?: string; type?: string } | boolean | null | undefined

export type ReactNodeWithConfig =
  | (React.ReactNode & {
      type?: {
        config?: ComponentConfig
      }
    })
  | undefined
  | null

export interface ComponentConfig {
  fieldSuffix?: string
  isField?: boolean
  isInline?: boolean
  name?: string
}
