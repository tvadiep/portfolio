import { extendTheme } from '@chakra-ui/react'
import '@fontsource/la-belle-aurore'

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  },
  fonts: {
    body: 'Montserrat',
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
})

export default theme
