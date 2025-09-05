import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import { Oswald } from "next/font/google";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "@/components/header/Header"
import Footer from "@/components/Footer"
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";
import { Providers } from "./Provides";

const oswald = Oswald({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
});

export const metadata = {
  title: "E Store",
  description: "E-Store By Chandan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} antialiased customScrollbar`}>
        <Toaster />
        <Providers>
          <CartProvider>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <main>
                  {children}
                </main>
                <Footer />
              </ThemeProvider>
            </AppRouterCacheProvider>
          </CartProvider>
        </Providers>
      </body>
    </html >
  );
}
