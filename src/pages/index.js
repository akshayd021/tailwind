import { Inter } from "next/font/google";
import { Navbar, Landing, Work } from "@/componets";
import Causel from "@/componets/Causel";
import Test from "@/componets/Test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Landing/>
    
      {/* <Causel/> */}
    </div>
  );
}
