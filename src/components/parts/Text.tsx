import { Text as LibText, TextProps } from "@chakra-ui/react";
import { FC } from "react";

type Props = TextProps & {
  children: React.ReactNode;
};
export const Text: FC<Props> = ({ children, ...props }) => {
  return (
    <LibText fontSize="md" m="2" {...props}>
      {children}
    </LibText>
  );
};
