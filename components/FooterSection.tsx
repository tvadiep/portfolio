import {
  Box,
  Center,
  chakra,
  ComponentDefaultProps,
  Flex,
  HStack,
} from '@chakra-ui/react'
import { FaCoffee, FaHeart } from 'react-icons/fa'
import { HtmlTag } from './ui'

const FooterSection = ({ ...rest }: ComponentDefaultProps) => {
  return (
    <Flex direction={'column'} {...rest}>
      <Box>
        <HtmlTag mx={5}>/body</HtmlTag>
        <HtmlTag>/html</HtmlTag>
      </Box>

      <Box my={5}>
        <Center>
          <HStack>
            <chakra.span>Made with</chakra.span>
            <chakra.span color={'red.500'}>
              <FaHeart />
            </chakra.span>
            <chakra.span>and</chakra.span>
            <FaCoffee />
          </HStack>
        </Center>
      </Box>
    </Flex>
  )
}

export { FooterSection }
