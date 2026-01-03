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
        "peer group border-input dark:bg-input/30 data-[state=checked]:text-white focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 border shadow-xs transition-all outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 relative w-25 h-25 rounded-6 overflow-hidden box-border",
        className
      )}
      {...props}
    >
      {/* Background layer for hover */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 group-data-[state=checked]:opacity-0 transition-opacity rounded-6 pointer-events-none"></div>
      
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="absolute inset-0 grid place-content-center text-current transition-none z-10"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
      {/* Hover indicator - shows checkmark on hover when not checked */}
      <div className="absolute inset-0 grid place-content-center opacity-0 group-hover:opacity-100 group-data-[state=checked]:hidden transition-opacity pointer-events-none z-20">
        <CheckIcon className="size-3.5 text-gray-500" />
      </div>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
