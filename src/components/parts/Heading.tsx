import { HeadingProps, Heading as LibHeading } from "@chakra-ui/react";
import { FC } from "react";

type Props = HeadingProps & { children: React.ReactNode };
export const Heading: FC<Props> = ({ children, ...props }) => {
  return (
    <LibHeading size="sm" {...props}>
      {children}
    </LibHeading>
  );
};
