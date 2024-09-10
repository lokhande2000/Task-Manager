import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import { Input, Button, Box } from "@chakra-ui/react";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(addTask({ id: Date.now(), name: task }));
      setTask("");
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={5}>
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        mb={3}
        color="#000"
        bg="yellow.200"
        fontSize="xl"
        fontWeight={600}
        border="1px solid #000"
      />
      <Button type="submit" colorScheme="teal">
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
