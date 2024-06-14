import { Container, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEvent } from "../integrations/supabase/index.js";

const EventDetails = () => {
  const { id } = useParams();
  const { data: event, isLoading } = useEvent(id);
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
        <Heading>{event.name}</Heading>
        <Text>{event.description}</Text>
        <Button colorScheme="teal" onClick={() => navigate("/events")}>
          Back to Events
        </Button>
      </VStack>
    </Container>
  );
};

export default EventDetails;