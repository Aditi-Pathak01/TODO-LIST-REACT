import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="h-screen w-screen px-4 py-12 bg-gray-900">{children}</body>
    </html>
  );
}
