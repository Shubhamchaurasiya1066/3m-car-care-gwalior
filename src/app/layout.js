
import "./globals.css";

export const metadata = {
  title: {
    default: "3M Car Care Studio Gwalior | Premium Car Detailing",
    template: "%s | 3M Car Care Studio Gwalior",
  },
  description:
    "Premium car detailing, ceramic coating, paint protection film and professional car care services in Gwalior.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
