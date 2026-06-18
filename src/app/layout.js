import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bengali",
});

export const metadata = {
  title: "Lichen BTS — 360° Business Tech Solution",
  description:
    "Lichen BTS is a 360° Business Tech Solution based in Chittagong, Bangladesh. We provide software development, design & printing, marketing, and business consultancy services.",
  keywords: [
    "Lichen BTS",
    "business tech solution",
    "Chittagong",
    "software development",
    "printing",
    "marketing",
    "consultancy",
    "Bangladesh",
  ],
  openGraph: {
    title: "Lichen BTS — 360° Business Tech Solution",
    description:
      "Your business's complete technology and creative partner in Chittagong, Bangladesh.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
