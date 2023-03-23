import { colors } from "@/styles/colors";
import { Box, Center, Heading } from "@chakra-ui/react";
import Text from "@/components/Text";
import Button from "@/components/Button";

const Login = () => {
  const handleSignIn = () => {};

  return (
    <Center h="100vh" bg={colors.grey}>
      <Box
        maxW="md"
        w="full"
        borderWidth="1px"
        borderRadius="4"
        overflow="hidden"
        p="8"
        borderColor={colors.grey}
        bg={colors.grey}
      >
        <Heading as="h2" size="lg" mb="4" color={colors.textColor}>
          Login
        </Heading>
        <Text
          style={{
            marginBottom: 4,
          }}
        >
          Please sign in to continue.
        </Text>
        <Button onClick={handleSignIn}>Login with Google</Button>
      </Box>
    </Center>
  );
};

export default Login;
