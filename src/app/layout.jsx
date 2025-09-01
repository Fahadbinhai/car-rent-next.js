import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import TanstackQuery from "@/customHooks/tanstackQueryHook/TanstackQuery";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['400', '700']
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Car Rent",
  description: "Car renting website",
};

export default function RootLayout({ children }) {

  // query client 




  return (
    <html lang="en" data-theme="light">
      <body className={`${roboto.variable} antialiased`}>

        <TanstackQuery>
          <header className="sticky top-0 z-50">
            <Navbar></Navbar>
          </header>

          <main>
            {children}
          </main>

          <footer>
            {/* <p>footer</p> */}
          </footer>

        </TanstackQuery>



      </body>
    </html>
  );
}
