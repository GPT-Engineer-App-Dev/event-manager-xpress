import { Container, VStack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Events = ({ events, deleteEvent }) => {
  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Events</Heading>
        {events.length === 0 ? (
          <Text>No events available</Text>
        ) : (
          events.map((event) => (
            <HStack key={event.id} spacing={4} width="100%" justifyContent="space-between">
              <VStack align="start">
                <Text fontSize="xl">{event.title}</Text>
                <Text>{event.description}</Text>
              </VStack>
              <HStack>
                <Button colorScheme="teal" as={Link} to={`/event/${event.id}`}>
                  View Details
                </Button>
                <Button colorScheme="red" onClick={() => deleteEvent(event.id)}>
                  Delete
                </Button>
              </HStack>
            </HStack>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Events;