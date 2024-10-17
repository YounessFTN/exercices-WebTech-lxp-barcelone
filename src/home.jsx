import { ProductGallery } from "./components/exercices/ProductGallery"; // Si c'est un tableau de produits, assure-toi qu'il soit bien importé comme tel
import { NavBar } from "./components/navBar";
import { BasketProvider } from "./components/context/BasketContext"; // Import du provider de contexte

export function Home() {
  return (
    <BasketProvider>
      <NavBar />
      <ProductGallery />{" "}
      {/* Ce composant affiche peut-être quelque chose de visuel */}
    </BasketProvider>
  );
}
