import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers/provider";
import { ToastContainer } from "react-toastify";

// import Navbar from "./navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alumna.ai - Transforming Higher Education Through AI Innovation",
  description:
    "Alumna.ai is redefining the future of education with AI-powered solutions for students, institutions, and alumni.",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Specify the weights you want to load
  subsets: ["latin"], // Specify the subsets (e.g., Latin characters)
  style: ["normal"], // Optional: You can specify 'italic' if needed
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
