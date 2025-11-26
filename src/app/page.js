import About from "@/components/homepage/About";
import Banner from "@/components/homepage/Banner";
import Contact from "@/components/homepage/Contact";
import Products from "./our-products/Products";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="pt-16">
        <Banner />
      </div>
      <About />
      <Products />
      <Contact />
    </div>
  );
}
