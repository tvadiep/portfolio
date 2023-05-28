import { chakra } from '@chakra-ui/react'
import { useCallback, useRef } from 'react'
//@ts-ignore
import anime from 'animejs'
import { AnimationProps } from '../../types'

interface Props {
  scale: number
  duration: number
  elasticity: number
  zIndex: Array<number> | number
}

const HoverAnimation = ({ children, ...rest }: AnimationProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const animate = ({ scale, duration, elasticity, zIndex }: Props) => {
    anime.remove(ref.current)

    anime
      .timeline()
      .add({
        targets: ref.current,
        duration: 0,
        zIndex,
      })
      .add({
        targets: ref.current,
        duration,
        easing: 'spring(1, 100, 10, 10)',
        elasticity,
        scale,
      })
  }

  const onMouseEnter = useCallback(() => {
    animate({ scale: 1.2, duration: 800, elasticity: 400, zIndex: 1 })
  }, [])

  const onMouseLeave = useCallback(() => {
    animate({ scale: 1, duration: 600, elasticity: 300, zIndex: 0 })
  }, [])

  return (
    <chakra.span
      ref={ref}
      {...rest}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </chakra.span>
  )
}

export { HoverAnimation }
