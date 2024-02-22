import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={4}
          py={6}
          color="white"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
        >
          <Box>
            <Text fontSize="lg">Contact Us</Text>
            <Text>Email: version.control.dev@gmail.com</Text>
            <Text>Phone: +1 (123) 456-7890</Text>
          </Box>
          <Box>
            <Text fontSize="lg">Follow Us</Text>
            <Flex>
              <Link href="https://twitter.com/samthatcode" mr={4}>Twitter</Link>
              <Link href="https://www.facebook.com" mr={4}>Facebook</Link>
              <Link href="https://www.linkedin.com" mr={4}>LinkedIn</Link>
              <Link href="https://stackoverflow.com">StackOverflow</Link>
            </Flex>
          </Box>
          <Box>
            <Text fontSize="lg">VersionControlDev</Text>
            <Text>About Us</Text>
            <Text>Terms of Service</Text>
            <Text>Privacy Policy</Text>
          </Box>
        </Flex>
        <Flex
          px={4}
          py={2}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
        >
          <Text fontSize="sm">
            &copy; Sam - VersionControlDev ( ). All rights reserved. {new Date().getFullYear()}
          </Text>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;


<p>Sam - VersionControlDev ( ) • © 2022</p>