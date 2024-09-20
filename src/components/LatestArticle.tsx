import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Article {
  title: string;
  description: string;
  image: string;
}

const articlesData: Article[] = [
  {
    title: "Grilled Tomatoes at Home",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
    image: "/assets/grilled-tomatoes.png",
  },
  {
    title: "Snacks for Travel",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
    image: "/assets/snacks-for-travel.png",
  },
  {
    title: "Post-workout Recipes",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
    image: "/assets/post-workout.png",
  },
  {
    title: "Healthy Salad Recipes",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
    image: "/assets/healthy-salad.png",
  },
  {
    title: "Quick Breakfast Ideas",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
    image: "/assets/quick-breakfast.png",
  },
  {
    title: "Vegan Meals",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
    image: "/assets/vegan-meals.png",
  },
];

export default function LatestArticles() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;
  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  const currentArticles = articlesData.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box py={10} px={6} mx={{ base: "auto", md: "auto" }}>
      <Heading
        as="h2"
        size="xl"
        mb={6}
        textAlign={{ base: "center", md: "start" }}
        color="blue.700"
        mx={{ base: "auto", md: "10%" }}
      >
        Latest Articles
      </Heading>

      <SimpleGrid
        className="Grid"
        w={{ base: "60%", md: "80%" }}
        columns={{ base: 1, md: 3 }}
        spacingY={{ base: 4, md: 0 }}
        spacingX={{ base: 0, md: 8 }}
        mx={{ base: "auto", md: "start" }}
      >
        {currentArticles.map((article, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            textAlign={{ base: "center", md: "start" }}
            w={{ base: "full", md: "full" }}
            p={{ base: "6px", md: "15px" }}
          >
            <Image
              mx={{ base: "auto", md: "auto" }}
              src={article.image}
              alt={article.title}
              objectFit="cover"
              my={{ base: 2, md: "auto" }}
            />
            <Box p={2}>
              <Heading as="h3" size="md" mb={2} color="#0E2368">
                {article.title}
              </Heading>
              <Text mb={4} color="#444957">
                {article.description}
              </Text>
              <Button colorScheme="#424961" variant="outline" rounded="full">
                Read More
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Flex justify="center" align="center" mt={6}>
        <IconButton
          aria-label="Previous page"
          icon={<FaChevronLeft />}
          onClick={prevPage}
          isDisabled={currentPage === 1}
          mx={2}
        />
        <Text>
          {currentPage} / {totalPages}
        </Text>
        <IconButton
          aria-label="Next page"
          icon={<FaChevronRight />}
          onClick={nextPage}
          isDisabled={currentPage === totalPages}
          mx={2}
        />
      </Flex>
    </Box>
  );
}
