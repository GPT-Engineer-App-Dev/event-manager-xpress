import { useState, useEffect } from "react";
import { useUpdateEvent, useEvent } from "../integrations/supabase/index.js";
import { Container, VStack, Heading, Input, Button, Textarea } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const EditEvent = () => {
  const { id } = useParams();
  const { data: event, isLoading } = useEvent(id);
  const [title, setTitle] = useState(event ? event.name : "");
  const [description, setDescription] = useState(event ? event.description : "");
  const updateEvent = useUpdateEvent();

  useEffect(() => {
    if (!isLoading && !event) {
      navigate("/events");
    }
  }, [event, isLoading, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
      id,
      name: title,
      description,
    };
    updateEvent.mutate(updatedEvent, {
      onSuccess: () => {
        navigate("/events");
      },
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Edit Event</Heading>
        <Input
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleSubmit}>
          Update
        </Button>
      </VStack>
    </Container>
  );
};

export default EditEvent;