import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sam!";
const bio1 = "A Software Engineer / Developer / Educator / Instructor";
const bio2 = "Specialised in React.Js / Next.Js, Node.js / JavaScript and the .NET Fullstack Developement.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center">
      <Avatar size="xl" src="https://i.pravatar.cc/150?img=7" />
      <Heading as="h1" size="xl" color="white" textAlign="center">
        {greeting}
      </Heading>
      <Heading as="h2" size="md" color="white" textAlign="center">
        {bio1}
      </Heading>
      <Heading as="h2" size="md" color="white" textAlign="center">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);
export default LandingSection;
