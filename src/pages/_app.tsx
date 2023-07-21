import type { AppProps } from "next/app";
import {
  Box,
  ChakraProvider,
  Flex,
  LinkBox,
  LinkOverlay,
  Spacer,
  extendTheme,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Heading } from "@/components/parts/Heading";
import { Text } from "@/components/parts/Text";
import { Rampart_One, RocknRoll_One } from "next/font/google";

// const rampartOne = Rampart_One({
//   weight: ["400"],
//   subsets: ["cyrillic"],
// });

const rampartOne = RocknRoll_One({
  weight: ["400"],
  subsets: ["cyrillic"],
});

const theme = extendTheme({
  fonts: {
    heading: rampartOne.style.fontFamily,
    body: rampartOne.style.fontFamily,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <LinkBox
          backgroundColor={"#F8784A"}
          borderWidth="2px"
          rounded="lg"
          borderColor={"blackAlpha.600"}
          m={1}
          p={2}
        >
          <Heading pt={2} pb={2}>
            <Flex justifyContent="center" alignItems="center">
              <Box p={1}>
                <LinkOverlay href="/" color="blackAlpha.800" fontSize={"md"}>
                  Root
                </LinkOverlay>
              </Box>
              <Text color="blackAlpha.800">© 2023 doz13189@gmail.com</Text>
            </Flex>
          </Heading>
        </LinkBox>
      </Box>

      <Container>
        <Component {...pageProps} />
      </Container>
      {/* </main> */}
    </ChakraProvider>
  );
}
