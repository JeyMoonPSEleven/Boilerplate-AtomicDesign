// src/design-system/hooks/useDebounce.ts
import { useState, useEffect } from 'react'

/**
 * Hook para debounce de valores
 * Útil para inputs de búsqueda
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}
