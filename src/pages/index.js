import { Inter } from "next/font/google";
import { Navbar, Landing, Work } from "@/componets";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Landing/>
    </div>
  );
}
