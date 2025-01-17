// Main File  (Made by Kashaf)
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Join from "../Components/Join";
import Touch from "../Components/GetTouch";
import Products from "./products/page";
import Popular from "./products/Popular";


export default function Home() {
  return (
   <>
   <Hero />
   <Features />
   <Products/>
   <Popular/>
   <Join />
   <Touch />
   

    </>   
    );
}