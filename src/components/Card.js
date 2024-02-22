import React from "react";
import { Box, Heading, Text, VStack, Image, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => (
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  <Box
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="lg"
  >
    <Image src={imageSrc} alt={title} />

    <Box p="6">
      <VStack spacing="2">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>

      <HStack justify="flex-end" mt="4">
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </Box>
  </Box>
);

export default Card;





