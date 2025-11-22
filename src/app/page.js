import About from "@/components/homepage/About";
import Banner from "@/components/homepage/Banner";
import Info from "./contact/Info";
import Contact from "@/components/homepage/Contact";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <About />
      <Contact />
    </div>
  );
}
