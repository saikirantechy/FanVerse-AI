import "../styles/globals.css";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "FanVerse AI | Agentic Premier League",
  description: "AI-native gamified sports engagement ecosystem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <Navbar />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
