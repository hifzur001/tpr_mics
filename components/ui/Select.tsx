"use client"

import type React from "react"

interface SelectProps {
  children: React.ReactNode
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
  required?: boolean
  disabled?: boolean
}

export default function Select({
  children,
  value,
  onChange,
  className = "",
  required = false,
  disabled = false,
}: SelectProps) {
  return (
    <select value={value} onChange={onChange} required={required} disabled={disabled} className={`select ${className}`}>
      {children}
    </select>
  )
}
