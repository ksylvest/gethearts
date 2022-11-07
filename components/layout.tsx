import type { ReactNode } from "react";
import Head from "next/head";
import Script from "next/script";

import { Carousel } from "./carousel";
import { Content } from "./content";
import { Share } from "./share";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-22086343-1"
    />
    <Script id="ga">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-22086343-1');
        `}
    </Script>
    <Head>
      <meta name="keywords" content="Hearts, Cards, Mac, App, Store" />
      <meta
        name="description"
        content="The best Hearts game available in the Mac App Store."
      />
      <meta name="og:title" content="Hearts" />
      <meta
        name="og:description"
        content="The best Hearts game available in the Mac App Store"
      />
      <meta name="og:url" content="http://www.gethearts.com/" />
      <meta name="og:image" content="/image.png" />
    </Head>
    <Share />
    <Header />
    <Carousel />
    <Content>{children}</Content>
    <Footer />
  </>
);
