import { Container, VStack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEvents, useDeleteEvent } from "../integrations/supabase/index.js";

const Events = () => {
  const { data: events, isLoading } = useEvents();
  const deleteEvent = useDeleteEvent();

  if (isLoading) {
    return <div>Loading...</div>;
  }
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
                <Text fontSize="xl">{event.name}</Text>
                <Text>{event.description}</Text>
              </VStack>
              <HStack>
                <Button colorScheme="teal" as={Link} to={`/event/${event.id}`}>
                  View Details
                </Button>
                <Button colorScheme="red" onClick={() => deleteEvent.mutate(event.id)}>
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