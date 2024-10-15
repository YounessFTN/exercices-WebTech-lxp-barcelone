import { useEffect, useState } from "react";
import { basketList } from "../../data/basketList.jsx";
import { productList } from "../../data/data.jsx";
import { Ex1 } from "./cart.jsx";

export function ProductGallery() {
  const [basket, setBasket] = useState(basketList);

  // Surveiller les changements dans le panier
  useEffect(() => {
    console.log("Basket updated:", basket);
  }, [basket]);

  function AddToCart(product) {
    // Ajout correct du produit dans basket et mise à jour de basketList
    const updatedBasket = [...basket, product];
    setBasket(updatedBasket);
    basketList.push(product); // Mettre à jour la liste globale
  }

  return (
    <section className="p-2 flex-wrap flex gap-5 justify-center">
      {productList.map((product) => {
        return (
          <Ex1
            key={product.id}
            img={product.image}
            name={product.name}
            price={product.price}
            ButtonAddToBasket={() => AddToCart(product)}
          />
        );
      })}
    </section>
  );
}
