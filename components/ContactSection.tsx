import {
  Box,
  Button,
  ComponentDefaultProps,
  Flex,
  HStack,
  Image,
  Input,
  Spacer,
  Stack,
  Text,
  Textarea,
  useColorMode,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { forwardRef, useState } from 'react'
import { ContactProps } from '../types'
import { MovingLetters, RisingStrongAnimation } from './animations'
import { HtmlTag } from './ui'

const EMAIL_EXPRESSION = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const ContactSection = forwardRef<HTMLDivElement, ComponentDefaultProps>(
  ({ ...rest }, ref) => {
    const toast = useToast()
    const { colorMode } = useColorMode()
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [subjectInput, setSubjectInput] = useState('')
    const [messageInput, setMessageInput] = useState('')
    const [spamMessageInput, setSpamMessageInput] = useState('')
    const [submitting, setSubmitting] = useState(false)

    const isEmailValid = EMAIL_EXPRESSION.test(emailInput)
    const canSubmit = emailInput !== '' && messageInput !== ''

    const reset = () => {
      setNameInput('')
      setEmailInput('')
      setSubjectInput('')
      setMessageInput('')
      setSpamMessageInput('')
      setSubmitting(false)
    }

    const onSubmit = async () => {
      if (isEmailValid) {
        const info: ContactProps = {
          name: nameInput,
          email: emailInput,
          subject: subjectInput,
          message: messageInput,
          spamMessage: spamMessageInput,
        }

        if (spamMessageInput === '') {
          setSubmitting(true)

          const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
              'Content-Type': 'application/json',
            },
          })

          const displayMessage =
            response.status === 200
              ? 'Thank you for contacting me. I will respond to your inquiry as soon as possible.'
              : 'I was unable to send your message. If you would like to contact me directly, you can reach me on Discord at bazoka#4355'

          toast({
            description: displayMessage,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'bottom',
          })

          reset()
        }
      } else {
        toast({
          description: 'Please enter a valid email address.',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'bottom',
        })
      }
    }

    return (
      <Flex
        ref={ref}
        justifyItems={'center'}
        direction={{ base: 'column', md: 'row' }}
        {...rest}
      >
        <Flex direction={'column'} flex={1}>
          <Box>
            <HtmlTag>h2</HtmlTag>
            <MovingLetters
              mx={5}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              lineHeight={'normal'}
              fontWeight={'bold'}
              letterSpacing={'tight'}
            >
              Get in touch
            </MovingLetters>
            <HtmlTag>/h2</HtmlTag>
          </Box>

          <Box>
            <HtmlTag>p</HtmlTag>
            <Box mx={5}>
              <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight={'medium'}>
                If you have any questions or comments, please feel free to
                contact me using the form below.
              </Text>
            </Box>
            <HtmlTag>/p</HtmlTag>
          </Box>

          <Box my={5}>
            <HtmlTag>form</HtmlTag>
            <RisingStrongAnimation>
              <VStack align={'stretch'} mx={5}>
                <Stack direction={{ base: 'column', md: 'row' }} w={'full'}>
                  <RisingStrongAnimation flex={1}>
                    <Input
                      value={nameInput}
                      placeholder='Name'
                      onChange={({ target }) => setNameInput(target.value)}
                    />
                  </RisingStrongAnimation>
                  <RisingStrongAnimation flex={1} delay={100}>
                    <Input
                      value={emailInput}
                      placeholder='Email (*)'
                      onChange={({ target }) => setEmailInput(target.value)}
                    />
                  </RisingStrongAnimation>
                </Stack>

                <RisingStrongAnimation delay={300}>
                  <Input
                    value={subjectInput}
                    placeholder='Subject'
                    onChange={({ target }) => setSubjectInput(target.value)}
                  />
                </RisingStrongAnimation>

                <RisingStrongAnimation delay={500}>
                  <Textarea
                    value={messageInput}
                    placeholder='Message (*)'
                    onChange={({ target }) => setMessageInput(target.value)}
                  />
                </RisingStrongAnimation>

                <Input
                  value={spamMessageInput}
                  display={'none'}
                  onChange={({ target }) => setSpamMessageInput(target.value)}
                />

                <RisingStrongAnimation delay={700}>
                  <HStack w={'full'} pt={5}>
                    <Spacer />
                    <Button
                      colorScheme={
                        colorMode == 'light' ? 'blackAlpha' : 'yellow'
                      }
                      variant={'outline'}
                      onClick={onSubmit}
                      disabled={!canSubmit || submitting}
                      loadingText={'Submitting'}
                      isLoading={submitting}
                    >
                      Send message!
                    </Button>
                  </HStack>
                </RisingStrongAnimation>
              </VStack>
            </RisingStrongAnimation>
            <HtmlTag>/form</HtmlTag>
          </Box>
        </Flex>

        <Flex
          flex={1}
          justifyContent={{ base: 'center', md: 'flex-end' }}
          alignItems={'center'}
        >
          <RisingStrongAnimation>
            <Image
              objectFit={'cover'}
              src={colorMode == 'light' ? 'map-light.webp' : 'map-dark.webp'}
              alt={'project name'}
              width={{ base: 'full', md: 'auto' }}
              loading={'lazy'}
            />
          </RisingStrongAnimation>
        </Flex>
      </Flex>
    )
  }
)
ContactSection.displayName = 'Contact Section'

export { ContactSection }
