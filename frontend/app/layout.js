import "../styles/globals.css";

export const metadata = {
  title: "FanVerse AI",
  description: "AI-Powered Second Screen for Live Sports",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
