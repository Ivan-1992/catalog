import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import "./globals.scss";

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
