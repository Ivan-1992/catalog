import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
