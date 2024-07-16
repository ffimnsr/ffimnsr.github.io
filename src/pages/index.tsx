import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Flex, HStack, Stack, VStack, Link, Icon, Text, UnorderedList } from "@chakra-ui/react"
import Header from "../components/Header"
import { CONTACT_LINKS, PROFILE_LINKS, THEME } from "../constants"

type Link = {
  title: string
  href: string
  icon: React.ComponentType
}

const ContactLink: React.FC<Link> = ({ href, title, icon }) => (
  <Link
    href={href}
    isExternal
    rounded={"full"}
    alignItems={"center"}
    title={title}
    display={"flex"}
    p={3}
    gap={2}
    _hover={{ background: THEME.linkHover }}
    _active={{ background: THEME.linkHover }}
    _focus={{ background: THEME.linkHover }}
  >
    <Icon as={icon} boxSize={6} verticalAlign={"-.25em"} />
  </Link>
)

const ProfileLink: React.FC<Link> = ({ href, title, icon }) => (
  <Link
    href={href}
    isExternal
    rounded={5}
    textAlign={"center"}
    display={"grid"}
    gridTemplateColumns={"1fr 1fr 1fr"}
    px={8}
    py={4}
    fontWeight={500}
    bg={THEME.profileLinkBgColor}
    _hover={{ background: THEME.linkHover }}
    _active={{ background: THEME.linkHover }}
    _focus={{ background: THEME.linkHover }}
  >
    <Icon as={icon} boxSize={6} />
    <Text>{title}</Text>
  </Link>
)

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Flex backgroundColor={THEME.pageBgColor} justify="center" minHeight="100vh" px={5} py={8}>
        <Stack
          alignItems={"stretch"}
          maxWidth={600}
          color={"white"}
          textAlign={"center"}
          flex={1}
          gap={2}
        >
          <Header />
          <HStack justifyContent={"center"}>
            {CONTACT_LINKS.map((t, i) => (
              <ContactLink key={i} {...t} />
            ))}
          </HStack>
          <VStack as={UnorderedList} gap={2} alignItems={"stretch"}>
            {PROFILE_LINKS.map((t, i) => (
              <ProfileLink key={i} {...t} />
            ))}
          </VStack>
        </Stack>
      </Flex>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>The Portfolio by @ffimnsr</title>
