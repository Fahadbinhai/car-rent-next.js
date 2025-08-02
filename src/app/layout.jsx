import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${roboto.variable} antialiased`}
      >

        <div>
          <header className="sticky top-0 z-50">
            <Navbar></Navbar>
          </header>

          <main>
            {children}
          </main>

          <footer>
              {/* <p>footer</p> */}
          </footer>
        </div>


      </body>
    </html>
  );
}
