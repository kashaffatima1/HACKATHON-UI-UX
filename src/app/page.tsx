import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Join from "../Components/Join";
import Touch from "../Components/GetTouch";
import Furniture from "./products/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Furniture/>
      <Join />
      <Touch />
    </>
  );
}
