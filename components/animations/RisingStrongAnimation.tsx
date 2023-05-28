import { Box } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
//@ts-ignore
import anime from 'animejs'
import { useVisible } from '../../hooks'
import { AnimationProps } from '../../types'

const RisingStrongAnimation = ({
  delay = 0,
  children,
  ...rest
}: AnimationProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useVisible({ ref, threshold: 0.2 })

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
          duration: 1400,
          easing: 'spring(1, 80, 10, 0)',
          opacity: [0, 1],
          translateY: [100, 0],
        })
    }
  }, [ref, isVisible, delay])

  return (
    <Box ref={ref} {...rest} opacity={0}>
      {children}
    </Box>
  )
}

export { RisingStrongAnimation }
