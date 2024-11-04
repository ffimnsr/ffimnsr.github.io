import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading, Stack, VStack } from "@chakra-ui/react"
import { THEME } from "../constants"
import CompaniesGrid from "../components/CompaniesGrid"
import ArticlesGrid from "../components/ArticlesGrid"
import GamesGrid from "../components/GamesGrid"
import ProjectsGrid from "../components/ProjectsGrid"

const PortfolioPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Flex backgroundColor={THEME.pageBgColor} justify="center" minHeight="100vh" px={5} py={8}>
        <Stack
          alignItems="stretch"
          maxWidth={800}
          color="white"
          flex={1}
          gap={2}
          my={20}
        >
          <VStack align="start" alignItems="stretch" spacing={6}>
            <Heading as="h1" size="3xl" noOfLines={1} mb={20}>
              The Portfolio
            </Heading>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Portfolio</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <CompaniesGrid />
            {/* <ArticlesGrid />
            <GamesGrid />
            <ProjectsGrid /> */}
          </VStack>
        </Stack>
      </Flex>
    </main>
  )
}

export default PortfolioPage

export const Head: HeadFC = () => <title>The Portfolio by @ffimnsr</title>
