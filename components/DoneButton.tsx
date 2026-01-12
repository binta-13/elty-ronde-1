"use client"

import { Button } from "@/components/ui/button"

interface DoneButtonProps {
  onClick: () => void
}

export function DoneButton({ onClick }: DoneButtonProps) {
  return (
    <div className="flex justify-center px-4 pt-5">
      <Button
        variant="orange"
        size="done"
        className="flex flex-row justify-center items-center px-5 py-10 gap-2.5 w-340 flex-none order-0 grow-0 font-montserrat font-normal text-14 leading-130 tracking-0 align-middle rounded-4 bg-orange-button"
        onClick={onClick}
      >
        Done
      </Button>
    </div>
  )
}

