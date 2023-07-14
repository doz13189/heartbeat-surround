import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex, Spacer } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Heading } from "@/components/parts/Heading";
import { Text } from "@/components/parts/Text";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box backgroundColor={"teal.400"} m={0} p={1}>
        <Flex justifyContent="center" alignItems="center">
          <Box p={1}>
            <Heading color="whiteAlpha.900">Root</Heading>
          </Box>
          <Text color="whiteAlpha.900" fontSize="xs">
            © 2023 dozo13189@gmail.com
          </Text>
        </Flex>
      </Box>
      <Container>
        <Component {...pageProps} />
      </Container>
      <Box
        backgroundColor={"gray.200"}
        position="fixed"
        bottom="0"
        left="0"
        width="100%"
      ></Box>
    </ChakraProvider>
  );
}
