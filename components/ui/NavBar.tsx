import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  AspectRatio,
  Box,
  ComponentDefaultProps,
  Container,
  Drawer,
  DrawerContent,
  Flex,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { NavBarProps, NavItemProps } from '../../types'
import { StraightLineAnimation } from '../animations'
import { Toogle } from './'

const NavBar = ({ navItems, onNavigate = () => {} }: NavBarProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <Box boxShadow={'md'} bg={useColorModeValue('white', 'gray.800')}>
      <>
        <NavBarContent
          navItems={navItems}
          isOpen={isOpen}
          onToggle={onToggle}
          onNavigate={onNavigate}
          display={isOpen ? 'none' : 'flex'}
        />

        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement={'left'}
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size={'full'}
        >
          <DrawerContent bg={useColorModeValue('white', 'gray.800')}>
            <NavBarContent
              navItems={navItems}
              isOpen={isOpen}
              onToggle={onToggle}
              onNavigate={onNavigate}
            />
            <MobileNav
              navItems={navItems}
              display={{ base: 'flex', md: 'none' }}
              h={'100vh'}
              onClose={onClose}
              onNavigate={onNavigate}
            />
          </DrawerContent>
        </Drawer>
      </>
    </Box>
  )
}

const NavBarContent = ({
  navItems,
  isOpen,
  onToggle,
  onNavigate,
  ...rest
}: NavBarContentProps) => {
  return (
    <Container maxW={'container.xl'} mx={'auto'}>
      <Flex py={{ base: 2 }} align={'center'} {...rest}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
          ></IconButton>
        </Flex>

        <Flex
          flex={{ base: 1 }}
          justify={'start'}
          display={{ base: 'none', md: 'flex' }}
        >
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            Logo
          </Text> */}
          <AspectRatio w={'32px'} ratio={1}>
            <Image
              cursor={'pointer'}
              objectFit={'cover'}
              src='favicon.ico'
              alt='logo'
              onClick={() => onNavigate(navItems[0])}
            />
          </AspectRatio>
        </Flex>

        <Flex flex={{ base: 0, md: 1 }} justify={'center'}>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav navItems={navItems} onNavigate={onNavigate} />
          </Flex>
        </Flex>

        <Flex flex={{ base: 1, md: 1 }} justify={'flex-end'} direction={'row'}>
          <Toogle />
        </Flex>
      </Flex>
    </Container>
  )
}

const DesktopNav = ({ navItems, onNavigate }: NavBarContentProps) => {
  const activeSection = useScrollSpy({ navItems })

  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const highlightColor = useColorModeValue('blackAlpha.600', 'yellow.200')

  return (
    <Stack direction={'row'} spacing={4}>
      {navItems.map((navItem) => (
        <VStack key={navItem.label} spacing={0}>
          <Link
            p={2}
            fontSize={'sm'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
            onClick={() => onNavigate(navItem)}
          >
            {navItem.label}
          </Link>
          {activeSection === navItem.label && (
            <StraightLineAnimation w={'full'}>
              <Box
                w={'100%'}
                h={2}
                borderColor={highlightColor}
                borderTopWidth={2}
                borderTopStyle={'solid'}
              ></Box>
            </StraightLineAnimation>
          )}
        </VStack>
      ))}
    </Stack>
  )
}

const MobileNav = ({
  navItems,
  onNavigate,
  onClose,
  ...rest
}: NavBarContentProps) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const navItemColor = useColorModeValue('gray.600', 'gray.200')

  return (
    <Stack bg={bgColor} p={4} display={{ md: 'none' }} {...rest}>
      {navItems.map((navItem) => (
        <Flex
          key={navItem.label}
          py={2}
          as={Link}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}
          onClick={() => {
            onNavigate(navItem)
            onClose()
          }}
        >
          <Text fontWeight={600} color={navItemColor}>
            {navItem.label}
          </Text>
        </Flex>
      ))}
    </Stack>
  )
}

interface NavBarContentProps extends ComponentDefaultProps {
  navItems: Array<NavItemProps>
  isOpen?: boolean
  onToggle?: () => void
  onNavigate: (navItem: NavItemProps) => void
}

export { NavBar }
