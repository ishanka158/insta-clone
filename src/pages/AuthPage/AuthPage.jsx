import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../Components/AuthForm/AuthForm";

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex
          minW={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
          px={4}
        >
          {/*left side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="welcome pmg" />
          </Box>
          {/*Right side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app</Box>
            <Flex gap={5} justifyContent={"Center"}>
              <Image src="/playstore.png" h={"10"} alt="playstore logo" />
              <Image src="/microsoft.png" h={"10"} alt="microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default AuthPage;
