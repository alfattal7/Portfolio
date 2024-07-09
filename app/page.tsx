import { navItems } from "@/data";
import dynamic from 'next/dynamic';
import Grid from "@/components/Grid";
import Experience from "@/components/Experience";

const Approach = dynamic(()=> import("@/components/Approach"),
 {
  ssr:false,
 });
 const Hero = dynamic(()=> import("@/components/Hero"),
 {
  ssr:false,
 });

 const Footer = dynamic(()=> import("@/components/Footer"),
 {
  ssr:false,
 });
 const Clients = dynamic(()=> import("@/components/Clients"),
 {
  ssr:false,
 });
 const RecentProjects = dynamic(()=> import("@/components/RecentProjects"),
 {
  ssr:false,
 });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;