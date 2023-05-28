import { ComponentDefaultProps, Text } from '@chakra-ui/react'

const HtmlTag = ({ children, ...rest }: ComponentDefaultProps) => (
  <Text fontFamily={'La Belle Aurore'} fontSize={'xl'} {...rest}>
    {`<${children}>`}
  </Text>
)

export { HtmlTag }
