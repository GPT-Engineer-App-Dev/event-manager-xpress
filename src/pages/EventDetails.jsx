import { Container, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

const EventDetails = ({ events }) => {
  const { id } = useParams();
  const event = events.find((event) => event.id === id);
  const navigate = useNavigate();

  if (!event) {
    return (
      <Container centerContent>
        <VStack spacing={4} mt={10}>
          <Heading>Event Not Found</Heading>
          <Button colorScheme="teal" onClick={() => navigate("/events")}>
            Back to Events
          </Button>
        </VStack>
      </Container>
    );
  }

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>{event.title}</Heading>
        <Text>{event.description}</Text>
        <Button colorScheme="teal" onClick={() => navigate("/events")}>
          Back to Events
        </Button>
      </VStack>
    </Container>
  );
};

export default EventDetails;