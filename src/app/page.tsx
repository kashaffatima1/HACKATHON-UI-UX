// Main File  (Made by Kashaf)
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Ceramics from "../Components/NewCeramics";
import Product from "../Components/PopularProduct";
import Join from "../Components/Join";
import Touch from "../Components/GetTouch";
import About from "@/Components/About";


export default function Home() {
  return (
   <>
   <Hero />
   <About />
   <Features />
   <Ceramics />
   <Product />
   <Join />
   <Touch />
   

   </>
  );
}