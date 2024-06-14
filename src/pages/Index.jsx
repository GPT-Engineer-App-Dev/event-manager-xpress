import { Container, VStack, Heading, Text, Button, Box, HStack, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPlus, FaCalendarAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Event Management</Heading>
        <Text fontSize="lg">Manage your events efficiently and effortlessly.</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg" as={Link} to="/create-event">
            Create Event
          </Button>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="blue" size="lg" as={Link} to="/events">
            View Events
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;