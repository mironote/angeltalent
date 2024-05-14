import { useEffect } from 'react'

export const useEventListener = (
    target: EventTarget | null,
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    ...rest: any[]
) => {
    useEffect(() => {
        if (!target || typeof target.addEventListener !== 'function') {
            return
        }

        target.addEventListener(type, listener, ...rest)

        // return a callback, which is called on unmount
        return () => {
            target.removeEventListener(type, listener, ...rest)
        }
    }, [listener, rest, target, type])
}
