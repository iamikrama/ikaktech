import { Metadata, Viewport } from "next"; // Import Viewport type

import { siteConfig } from "@/config/site";
import { fontSans, incognito, poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Providers } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Separator } from "@/components/ui/separator";

import "@/styles/globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "Ikrama Akhtar",
      url: "https://ikak.tech",
    },
  ],
  creator: "Ikrama Akhtar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.links.twitter.href.split("/").pop(),
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[url('/images/noise.png')]",
          fontSans.variable,
          poppins.variable,
          incognito.variable
        )}
      >
        <Providers>
          <Navbar />
          <main className="mt-10 min-h-[calc(100vh-11rem)] font-incognito md:mt-10 lg:mt-16 lg:min-h-[calc(100vh-12.5rem)]">
            {children}
          </main>
          <Separator />
          <Footer />
        </Providers>
        <TailwindIndicator />
      </body>
    </html>
  );
};

export default RootLayout;
