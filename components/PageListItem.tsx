"use client"

import { Checkbox } from "@/components/ui/checkbox"

interface Page {
  id: number
  name: string
  checked: boolean
}

interface PageListItemProps {
  page: Page
  onCheckedChange: (id: number, checked: boolean) => void
}

export function PageListItem({ page, onCheckedChange }: PageListItemProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <label
        htmlFor={`page-${page.id}`}
        className="font-montserrat font-normal text-14 leading-130 tracking-0 align-middle cursor-pointer select-none text-foreground"
      >
        {page.name}
      </label>
      <Checkbox
        id={`page-${page.id}`}
        checked={page.checked}
        onCheckedChange={(checked) => onCheckedChange(page.id, checked === true)}
      />
    </div>
  )
}

