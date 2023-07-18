import "@/styles/global.css";

import { Analytics } from "@vercel/analytics/react";
import { Main } from "@/app/components/main";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <html lang="en">
    <body>
      <Main>{children}</Main>
      <Analytics />
    </body>
  </html>
);

export default Layout;
