// import { Montserrat } from "next/font/google";
// import { Inter } from "next/font/google";
// import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "swap",
// });

// const roboto = Roboto({
//   subsets: ["latin"],
//   display: "swap",
//   weight: "400",
// });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "PH-Next.js Module-02",
  description: "Learning core concepts of next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
