import { useEffect, useCallback } from 'react'

type KeyHandler = (event: KeyboardEvent) => void

interface KeyBinding {
  key: string
  handler: KeyHandler
  ctrl?: boolean
  shift?: boolean
  alt?: boolean
  meta?: boolean
  preventDefault?: boolean
}

/**
 * Hook to handle keyboard shortcuts declaratively
 * @param bindings - Array of keyboard shortcut configurations
 * @param enabled - If the shortcuts are enabled (default: true)
 */
export function useKeyboard(bindings: KeyBinding[], enabled: boolean = true) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return

      // Ignore if the focus is on an input, textarea or editable element
      const target = event.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return
      }

      for (const binding of bindings) {
        const keyMatch = event.key.toLowerCase() === binding.key.toLowerCase()
        const ctrlMatch = binding.ctrl ? event.ctrlKey : !event.ctrlKey
        const shiftMatch = binding.shift ? event.shiftKey : !event.shiftKey
        const altMatch = binding.alt ? event.altKey : !event.altKey
        const metaMatch = binding.meta ? event.metaKey : !event.metaKey

        if (keyMatch && ctrlMatch && shiftMatch && altMatch && metaMatch) {
          if (binding.preventDefault !== false) {
            event.preventDefault()
          }
          binding.handler(event)
          break
        }
      }
    },
    [bindings, enabled],
  )

  useEffect(() => {
    if (!enabled) return

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown, enabled])
}

/**
 * Hook simplified for a single key
 */
export function useKey(
  key: string,
  handler: KeyHandler,
  options?: Omit<KeyBinding, 'key' | 'handler'>,
) {
  useKeyboard([{ key, handler, ...options }])
}
