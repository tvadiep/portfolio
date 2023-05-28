import { Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
//@ts-ignore
import anime from 'animejs'
import { useVisible } from '../../hooks'
import { AnimationProps } from '../../types'

const MovingLetters = ({ delay = 0, children, ...rest }: AnimationProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useVisible({ ref, threshold: 0.5 })
  const letters = children?.split('') || []
  const duration = letters.length * 100
  const easing = 'easeOutExpo'

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
          targets: ref.current!.children,
          delay: (el: any, i: any) => 100 * (i + 1),
          duration,
          easing,
          offset: '-=775',
          opacity: [0, 1],
        })
    }
  }, [ref, isVisible, delay, duration])

  return (
    <Text ref={ref} {...rest} opacity={0}>
      {letters.map((letter: string, index: number) => (
        <Letter key={index}>{letter}</Letter>
      ))}
    </Text>
  )
}

const Letter = ({ children }: AnimationProps) => {
  const [hovered, setHovered] = useState(false)

  const toggleHover = () => {
    if (hovered) {
      setTimeout(() => {
        setHovered(false)
      }, 1200)
    } else {
      setHovered(true)
    }
  }

  return (
    <span
      style={{ display: children === ' ' ? 'inline' : 'inline-block' }}
      className={`rubberBand ${hovered && 'animated'}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {children}
    </span>
  )
}

export { MovingLetters }
