import { useState } from "react";
import { useAddEvent } from "../integrations/supabase/index.js";
import { Container, VStack, Heading, Input, Button, Textarea } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addEvent = useAddEvent();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      name: title,
      description,
    };
    addEvent.mutate(newEvent, {
      onSuccess: () => {
        navigate("/events");
      },
    });
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Create Event</Heading>
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
          Create
        </Button>
      </VStack>
    </Container>
  );
};

export default CreateEvent;