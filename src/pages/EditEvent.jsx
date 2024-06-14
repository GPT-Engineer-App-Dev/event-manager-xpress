import { useState, useEffect } from "react";
import { Container, VStack, Heading, Input, Button, Textarea } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const EditEvent = ({ events, updateEvent }) => {
  const { id } = useParams();
  const event = events.find((event) => event.id === id);
  const [title, setTitle] = useState(event ? event.title : "");
  const [description, setDescription] = useState(event ? event.description : "");
  const navigate = useNavigate();

  useEffect(() => {
    if (!event) {
      navigate("/events");
    }
  }, [event, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
      ...event,
      title,
      description,
    };
    updateEvent(updatedEvent);
    navigate("/events");
  };

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