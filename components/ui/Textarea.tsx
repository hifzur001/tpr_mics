"use client"

import type React from "react"

interface TextareaProps {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
  rows?: number
  required?: boolean
  disabled?: boolean
}

export default function Textarea({
  placeholder,
  value,
  onChange,
  className = "",
  rows = 4,
  required = false,
  disabled = false,
}: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
      disabled={disabled}
      className={`textarea ${className}`}
    />
  )
}
