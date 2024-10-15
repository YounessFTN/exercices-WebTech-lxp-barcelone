import { ProductGallery } from "./components/exercices/ProductGallery"; // Si c'est un tableau de produits, assure-toi qu'il soit bien importé comme tel
import { NavBar } from "./components/navBar";
export function Home() {
  // Assurons-nous que ProductGallery est un tableau de produits

  return (
    <>
      <NavBar />
      <ProductGallery />{" "}
      {/* Ce composant affiche peut-être quelque chose de visuel */}
    </>
  );
}
