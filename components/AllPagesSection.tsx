"use client"

import { Checkbox } from "@/components/ui/checkbox"

interface AllPagesSectionProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export function AllPagesSection({ checked, onCheckedChange }: AllPagesSectionProps) {
  return (
    <div
      className="flex flex-row justify-between items-center py-2 pl-22 pr-15 w-370 h-42 flex-none order-0 grow-0"
    >
      <label
        htmlFor="all-pages"
        className="font-montserrat font-normal text-14 leading-130 tracking-0 align-middle cursor-pointer select-none text-foreground"
      >
        All pages
      </label>
      <Checkbox
        id="all-pages"
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(checked === true)}
      />
    </div>
  )
}

