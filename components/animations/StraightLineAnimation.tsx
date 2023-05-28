import { Box } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
//@ts-ignore
import anime from 'animejs'
import { useVisible } from '../../hooks'
import { AnimationProps } from '../../types'

const StraightLineAnimation = ({
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
          duration: 200,
          opacity: 1,
        })
        .add({
          targets: ref.current.children,
          rotateY: [-90, 0],
          duration: 1300,
        })
    }
  }, [ref, isVisible, delay])

  return (
    <Box ref={ref} {...rest} opacity={0}>
      {children}
    </Box>
  )
}

export { StraightLineAnimation }
