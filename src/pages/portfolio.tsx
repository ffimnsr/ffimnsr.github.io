import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { Flex, Heading, Stack, VStack } from "@chakra-ui/react"
import { THEME } from "../constants"

const PortfolioPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Flex backgroundColor={THEME.pageBgColor} justify="center" minHeight="100vh" px={5} py={8}>
        <Stack
          alignItems={"stretch"}
          maxWidth={500}
          color={"white"}
          textAlign={"center"}
          flex={1}
          gap={2}
        >
          <VStack spacing={6}>
            <Heading as="h1" size="4xl" fontSize={"120px"} noOfLines={1}>
              404
            </Heading>
            <Heading as="h2" size="md" noOfLines={1} color={"gray.400"}>
              Page Not Found
            </Heading>
            <Heading as="h3" size="sm" fontWeight="normal" color={"gray.500"}>
              Oops! It seems this page took a wrong turn in the digital labyrinth. Fear not, though—our pixelated guide is on the case!
            </Heading>
          </VStack>
        </Stack>
      </Flex>
    </main>
  )
}

export default PortfolioPage

export const Head: HeadFC = () => <title>Portfolio</title>
