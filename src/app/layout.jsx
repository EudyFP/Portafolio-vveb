import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "./ToastProvider";
import "react-toastify/dist/ReactToastify.css"
import { ThemeProvider } from 'next-themes';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "This is my portfolio",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
