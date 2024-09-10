import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";
import { VStack, Box, Text, Button } from "@chakra-ui/react";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  return (
    <VStack spacing={4} align="stretch">
      {tasks.map((task) => (
        <Box
          key={task.id}
          p={4}
          shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          borderWidth="1px"
          bg="blueviolet"
          rounded="xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text color="#000" fontSize="xl" fontWeight="bold">
            {task.name}
          </Text>
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            colorScheme="red"
            mt={2}
          >
            Delete
          </Button>
        </Box>
      ))}
    </VStack>
  );
};

export default TaskList;
