import {
  Box,
  Button,
  ComponentDefaultProps,
  Flex,
  Spacer,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { forwardRef } from 'react'
import { MovingLetters, RisingStrongAnimation } from './animations'
import { HtmlTag } from './ui'

const WelcomeSection = forwardRef<HTMLDivElement, ComponentDefaultProps>(
  ({ children, onNavigate, ...rest }, ref) => {
    const { colorMode } = useColorMode()

    return (
      <Flex ref={ref} direction={'column'} h={'100vh'} {...rest}>
        <Box>
          <HtmlTag>html</HtmlTag>
          <HtmlTag mx={5}>body</HtmlTag>
        </Box>

        <Spacer />
        <Box mx={10}>
          <Box>
            <HtmlTag>h</HtmlTag>
            <Box
              mx={5}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
              lineHeight={'none'}
              fontWeight={'bold'}
              letterSpacing={'tight'}
            >
              <MovingLetters delay={300}>Hi,</MovingLetters>
              <MovingLetters delay={800}>I'm Diep,</MovingLetters>
              <MovingLetters delay={1800}>Software Engineer</MovingLetters>
            </Box>
            <HtmlTag>/h</HtmlTag>
          </Box>

          <RisingStrongAnimation delay={2200}>
            <Box>
              <HtmlTag>p</HtmlTag>
              <Text
                mx={5}
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight={'medium'}
                opacity={0.8}
              >
                I&apos;m a software engineer at NAB
              </Text>
              <HtmlTag>/p</HtmlTag>
            </Box>
          </RisingStrongAnimation>

          <RisingStrongAnimation delay={2400}>
            <Box my={5} mx={5}>
              <Button
                colorScheme={colorMode == 'light' ? 'blackAlpha' : 'yellow'}
                variant={'outline'}
                onClick={onNavigate}
              >
                Contact me!
              </Button>
            </Box>
          </RisingStrongAnimation>
        </Box>
        <Spacer />
      </Flex>
    )
  }
)
WelcomeSection.displayName = 'Welcome Section'

export { WelcomeSection }
