import { ComponentDefaultProps } from '@chakra-ui/react'
import { RefObject } from 'react'

export interface NavItemProps {
  label: string
  ref: RefObject<any>
}

export interface NavBarProps extends ComponentDefaultProps {
  navItems: Array<NavItemProps>
  onNavigate?: (navItem: NavItemProps) => void
}
