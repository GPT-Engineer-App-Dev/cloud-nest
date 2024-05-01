import { Box, Flex, Text, Button, VStack, Heading, Container, Spacer } from '@chakra-ui/react';
import { FaCloud, FaStar, FaUsers } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md" ml={5}>SaaS Company</Heading>
        <Spacer />
        <Button variant="ghost" mr={5}>Features</Button>
        <Button variant="ghost" mr={5}>Pricing</Button>
        <Button variant="ghost" mr={5}>Testimonials</Button>
        <Button colorScheme="blue" mr={5}>Sign Up</Button>
      </Flex>
      <Container maxW="container.xl" centerContent>
        <Box p={10} textAlign="center">
          <Heading as="h1" size="2xl">Empower Your Team</Heading>
          <Text fontSize="xl" mt={5}>Our tools are easy to use and built to scale with your business.</Text>
          <Button colorScheme="blue" size="lg" mt={10}>Get Started</Button>
        </Box>
        <VStack spacing={8} mt={10} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="lg">Seamless Integration</Heading>
            <Text mt={4}>Integrate with existing platforms with zero hassle.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="lg">Analytics</Heading>
            <Text mt={4}>Gain insights into your operations with advanced analytics tools.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="lg">24/7 Support</Heading>
            <Text mt={4}>Our support team is always available to help you.</Text>
          </Box>
        </VStack>
        <Box bg="gray.100" p={10} mt={10} w="full">
          <Heading textAlign="center" mb={5}>What Our Customers Say</Heading>
          <Flex direction={{ base: "column", md: "row" }} justify="space-around">
            <Box textAlign="center" p={5}>
              <FaStar color="gold" />
              <Text mt={2}>"Absolutely essential for our business."</Text>
              <Text fontWeight="bold">- Company A</Text>
            </Box>
            <Box textAlign="center" p={5}>
              <FaStar color="gold" />
              <Text mt={2}>"A game-changer in our industry."</Text>
              <Text fontWeight="bold">- Company B</Text>
            </Box>
            <Box textAlign="center" p={5}>
              <FaStar color="gold" />
              <Text mt={2}>"Support is fantastic and the product is very easy to use."</Text>
              <Text fontWeight="bold">- Company C</Text>
            </Box>
          </Flex>
        </Box>
        <Flex as="footer" bg="gray.800" color="white" p={4} mt={10} justify="center">
          <Text>© 2023 SaaS Company. All rights reserved.</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;