import { Fraunces, Nunito, Patrick_Hand } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import BackToTop from "./components/BackToTop";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

// Hand-lettered nav, matching the reference site's marker-pen menu.
const patrickHand = Patrick_Hand({
  variable: "--font-patrick",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Pacell McCobb — Christian Fiction for Young Readers",
    template: "%s · Pacell McCobb",
  },
  description:
    "Warm, hopeful Christian fiction for young readers. Home of the Meeting the Allens series by Pacell McCobb.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunito.variable} ${patrickHand.variable} h-full antialiased`}
    >
      {/* Browser extensions inject attributes onto <body> before React
          hydrates (e.g. cz-shortcut-listen), which React reports as a
          hydration mismatch. Suppressing it here only affects this element. */}
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
