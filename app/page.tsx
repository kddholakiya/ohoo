import HeroSection from "@/components/CommingSoon/CommingSoon";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  console.log('process.env.NEXT_PUBLIC_LAUNCH:', process.env.NEXT_PUBLIC_LAUNCH)
  if (process.env.NEXT_PUBLIC_LAUNCH === "false") {
    return <HeroSection />;
  } else {

    return (
      <div className="bg-black border-0">
        <Navbar />
        <HeroSection />
      </div>
    );
  }
}
