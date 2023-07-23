import type { Metadata } from "next";
import { CacheProvider } from "@chakra-ui/next-js";

export const metadata: Metadata = {
  title: "My Hero Academia",
  description: "ULTRA IMPACT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>{children}</CacheProvider>
      </body>
    </html>
  );
}
