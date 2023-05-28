import { IconButton, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Toogle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const icon = colorMode == 'light' ? <FaMoon /> : <FaSun />

  return (
    <IconButton
      aria-label='Toggle Mode'
      variant={'outline'}
      colorScheme={colorMode == 'light' ? 'blackAlpha' : 'yellow'}
      icon={icon}
      onClick={toggleColorMode}
    />
  )
}

export { Toogle }
