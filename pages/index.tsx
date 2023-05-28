import { Box, Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRef } from 'react'
import {
  AboutSection,
  ContactSection,
  FooterSection,
  MetaData,
  PortfolioSection,
  WelcomeSection,
} from '../components'
import { Background, NavBar } from '../components/ui'
import { NavItemProps } from '../types'

const Home: NextPage = () => {
  const welcomeRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const navItems: NavItemProps[] = [
    { label: 'Welcome', ref: welcomeRef },
    { label: 'Portfolio', ref: portfolioRef },
    { label: 'About', ref: aboutRef },
    { label: 'Contact', ref: contactRef },
  ]

  const onNavigate = (navItem: NavItemProps) => {
    const top =
      navItem.ref.current.getBoundingClientRect().top + window.pageYOffset - 65

    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <MetaData />
      <Box
        as={'header'}
        w={'full'}
        position={'sticky'}
        top={0}
        left={0}
        right={0}
        zIndex={2}
        minH={'4.5rem'}
      >
        <NavBar navItems={navItems} onNavigate={onNavigate} />
      </Box>

      <Background />

      <Container as={'main'} maxW={'container.xl'} minW={'sm'}>
        {/* Welcome */}
        <WelcomeSection
          ref={welcomeRef}
          onNavigate={() => onNavigate(navItems[3])}
        />

        {/* Portfolio */}
        <PortfolioSection ref={portfolioRef} mx={10} />

        {/* About */}
        <AboutSection ref={aboutRef} mx={10} my={20} />

        {/* Contact */}
        <ContactSection ref={contactRef} mx={10} my={20} />

        {/* Footer */}
        <FooterSection mt={20} />
      </Container>
    </>
  )
}

export default Home
