import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { BentoGrid } from "@/components/ui/BentoGrid";
import Clients from "@/components/Clients";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

type HomepageProps = {
  params: { lng: string };
};

export default function Home({ params }: HomepageProps) {
  return (
    <main
      className="relative bg-black-100 flex 
        justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero params={params} />
        <Grid params={params} />
        <RecentProjects params={params} />
        <Clients params={params} />
        <Experience params={params} />
        <Footer params={params} />
      </div>
    </main>
  );
}
