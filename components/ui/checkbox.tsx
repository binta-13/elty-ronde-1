"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer group border border-gray-light bg-white data-[state=checked]:bg-blue-primary data-[state=checked]:border-blue-primary data-[state=checked]:text-white focus-visible:border-blue-primary focus-visible:ring-2 focus-visible:ring-blue-primary/20 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 shadow-xs transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50 relative w-25 h-25 rounded-6 overflow-hidden box-border",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="absolute inset-0 grid place-content-center text-current transition-none z-10"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
