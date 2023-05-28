import { RefObject, useCallback, useEffect, useState } from 'react'

type VisibleProps = {
  ref: RefObject<any>
  threshold: number
}

const useVisible = ({ ref, threshold = 0 }: VisibleProps) => {
  const [isIntersecting, setIntersecting] = useState(false)
  let observer: IntersectionObserver

  const handleIntersect = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setIntersecting(entry.isIntersecting)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    observer = new IntersectionObserver(handleIntersect, {
      threshold,
    })

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, handleIntersect, threshold])

  return isIntersecting
}

export { useVisible }
