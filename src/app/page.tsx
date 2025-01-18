import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Join from "../Components/Join";
import Touch from "../Components/GetTouch";
import Products from "./products/page";
import Popular from "./products/Popular";
import SanityProduct from "./products/sanityproduct"; // Updated import

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Popular />
      <SanityProduct /> {/* Corrected component usage */}
      <Join />
      <Touch />
    </>
  );
}
