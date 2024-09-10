import { Suspense, lazy } from "react";
import { Box, Spinner } from "@chakra-ui/react";

const TaskList = lazy(() => import("./components/TaskList"));
const TaskForm = lazy(() => import("./components/TaskForm"));

function App() {
  return (
    <Box minH="100vh" bg="#000080">
      <Box w={["100%", "80%", "60%"]} mx="auto" p={5}>
        <Suspense fallback={<Spinner />}>
          <TaskForm />
          <TaskList />
        </Suspense>
      </Box>
    </Box>
  );
}

export default App;
