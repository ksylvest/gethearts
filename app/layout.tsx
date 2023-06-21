import type { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/global.css";

import { Main } from "@/app/components/main";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <html lang="en">
    <body>
      <Main>{children}</Main>
    </body>
  </html>
);

export default Layout;
