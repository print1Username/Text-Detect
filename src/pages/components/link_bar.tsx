import type { InputHTMLAttributes } from 'react'

import { useNavigate } from 'react-router-dom'

import { Clipboard } from 'lucide-react';
import { ArrowBigRight } from 'lucide-react';

interface LinkBarProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  onChange?: (value: string) => void
}

export default function LinkBar({
  value,
  onChange,
  placeholder = 'Paste link here...',
  className,
  ...props
}: LinkBarProps) {

  const navigate = useNavigate()
  const canNavigate = Boolean(value && value.trim() !== '')

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      onChange?.(text)
    } catch (err) {
      console.error('Failed to read clipboard', err)
    }
  }

  return (
    <div>
      <input
        type="url"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className={`link-bar ${className ?? ''}`}
        {...props}
      />

      <button
        type="button"
        onClick={handlePaste}
        className="link-bar-clipboard"
        aria-label="Paste from clipboard">
        <Clipboard/>
      </button>

      <button
        type="button"
        onClick={() => {
          if (!canNavigate) return
          navigate('/detect', { state: { link: value } })
        }}        
        className={`link-bar-arrow ${!canNavigate ? 'disable' : ''}`}>
          <ArrowBigRight/>
      </button>
    </div>
  )
}
