import { Cta, Hero, Location, VideoSection, Works } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen mx-auto">
      <Hero />
      <Location />
      <VideoSection />
      <Cta />
      <Works />
    </div>
  );
}
