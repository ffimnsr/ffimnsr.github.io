import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  SimpleGrid,
  Text,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react";
import React from "react"
import { COMPANIES, PortfolioItem, THEME } from "../constants";

const GameCard: React.FC<PortfolioItem> = ({ name, taskOverview, description, imageUrl, url }) => {
  return (
    <Card>
      <CardBody>
        <Image src={imageUrl} borderRadius="lg" />
        <VStack>
          <Heading as="h3" size="md" mt={4}>{name}</Heading>
          <Heading as="h4" size="xs" color="gray.600">{taskOverview}</Heading>
          <Text fontSize="sm">{description}</Text>
        </VStack>
      </CardBody>
      <CardFooter>
        <Button as="a" href={url}>View here</Button>
      </CardFooter>
    </Card>
  );
}

const GamesGrid: React.FC = () => {
  return (
    <Box w="100%">
      <Heading as="h2" color={THEME.portfolioSectionTitleColor}>
        Companies
      </Heading>
      <Heading as="h3" size="sm" fontWeight="normal" color={THEME.portfolioSectionSubTitleColor} mb={8}>
        List of projects I'm working on and /or worked on.
      </Heading>
      <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {COMPANIES.map((t, i) => (
          <GameCard key={i} {...t} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default GamesGrid;
