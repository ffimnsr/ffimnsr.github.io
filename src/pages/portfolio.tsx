import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { Flex, Heading, Stack, VStack } from "@chakra-ui/react"
import { THEME } from "../constants"
import CompaniesGrid from "../components/CompaniesGrid"

const PortfolioPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Flex backgroundColor={THEME.pageBgColor} justify="center" minHeight="100vh" px={5} py={8}>
        <Stack
          alignItems={"stretch"}
          maxWidth={800}
          color={"white"}
          flex={1}
          gap={2}
        >
          <VStack spacing={6}>
            <Heading as="h1" size="3xl" noOfLines={1} mb={20}>
              The Portfolio
            </Heading>
            <CompaniesGrid />
          </VStack>
        </Stack>
      </Flex>
    </main>
  )
}

export default PortfolioPage

export const Head: HeadFC = () => <title>The Portfolio by @ffimnsr</title>
