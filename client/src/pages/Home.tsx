import { Background } from "../components/Background";
import { Form } from "../components/Form";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Form />
      <Background />
    </Box>
  );
};
export default Home;
