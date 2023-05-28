import { useEffect, useState } from 'react'
import { NavBarProps } from '../types'

const useScrollSpy = ({ navItems }: NavBarProps) => {
  const [activeSection, setActiveSection] = useState('Home')

  useEffect(() => {
    const observers: Array<IntersectionObserver> = []

    navItems.forEach((navItem) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(navItem.label)
          }
        },
        { threshold: 0.9 }
      )

      observer.observe(navItem.ref.current)

      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => {
        observer.disconnect()
      })
    }
  }, [])

  return activeSection
}

export { useScrollSpy }
