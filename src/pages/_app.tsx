import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Heading } from "@/components/parts/Heading";
import { Text } from "@/components/parts/Text";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box backgroundColor={"teal.400"} m={0} p={1}>
        <Heading color="whiteAlpha.900">Root</Heading>
        <Text color="whiteAlpha.900" fontSize="xs">
          © 2023 doz13189@gmail.com
        </Text>
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
