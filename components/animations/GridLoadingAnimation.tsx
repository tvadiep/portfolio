import { Box } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
//@ts-ignore
import anime from 'animejs'
import { useVisible } from '../../hooks'
import { AnimationProps } from '../../types'

const GridLoadingAnimation = ({
  delay = 0,
  children,
  ...rest
}: AnimationProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useVisible({ ref, threshold: 0.5 })

  useEffect(() => {
    if (ref.current && isVisible) {
      anime
        .timeline()
        .add({
          targets: ref.current,
          delay,
          duration: 0,
          opacity: 1,
        })
        .add({
          targets: ref.current.children,
          duration: 800,
          elasticity: 600,
          delay: 100,
          opacity: {
            value: [0, 1],
            duration: 600,
            easing: 'linear',
          },
          scaleX: {
            value: [0.4, 1],
          },
          scaleY: {
            value: [0.6, 1],
            duration: 1000,
          },
        })
    }
  }, [ref, isVisible, delay])

  return (
    <Box ref={ref} {...rest} opacity={0}>
      {children}
    </Box>
  )
}

export { GridLoadingAnimation }
