import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@components/lists/navigationbar/NavBar";
import Footer from "@components/lists/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "seeran lists",
  description: "ecosystem",
};

export default function ListsLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  
    return (
    <html lang="en">

        <body className={`${inter.className} antialiased text-black font-normal`}>

            <div>
                <NavBar/>
            </div>
            
            <main  className="lg:mt-[160px] mt-[120px]">
                {children}
            </main>

            <div>
                <Footer/>
            </div>
            
        </body>

    </html>
  );

}
