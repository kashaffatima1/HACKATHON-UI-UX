import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Join from "../Components/Join";
import Touch from "../Components/GetTouch";
import Products from "./products/page";
import Popular from "./products/Popular";
import SanityProduct from "./products/sanityproduct"; // Updated import
import TableCategoryPage from "./category/Tables/page";
import PlantPotsCategoryPage from "./category/Plantpots/page";
import CeramicsCategoryPage from "./category/Ceramics/page";
import ChairsCategoryPage from "./category/Chairs/page";
import CutleryCategoryPage from "./category/Cutlery/page";
import TablewareCategoryPage from "./category/Tableware/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Popular />
      <Join />
      <Touch />
    </>
  );
}
