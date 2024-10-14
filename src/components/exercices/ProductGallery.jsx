import { productList } from "../../data/data.jsx";
import { Ex1 } from "./cart.jsx";

export function ProductGallery() {
  console.log(productList); // Vérifier que productList est bien défini

  return (
    <section className="p-2 flex-wrap flex gap-5 justify-center">
      {productList.map((product) => {
        return (
          <Ex1
            key={product.id}
            img={product.image} // Assurez-vous que vous utilisez le bon champ pour l'image
            name={product.name}
            price={product.price}
          />
        );
      })}
    </section>
  );
}
