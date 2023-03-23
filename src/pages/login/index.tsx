import { colors } from "@/styles/colors";
import { Box, Heading } from "@chakra-ui/react";
import Text from "@/components/Text";
import Button from "@/components/Button";
import MainLayout from "@/layout/MainLayout";
import { ApiService } from "@/api";

const Login = () => {
  const handleSignIn = () => {
    ApiService.getAuthLink("http://localhost:3000/callback")
      .then(({ data }) => {
        window.location.href = data.authorizeLink;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box maxW="md" w="full" overflow="hidden" p="8">
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
  );
};

export default Login;
