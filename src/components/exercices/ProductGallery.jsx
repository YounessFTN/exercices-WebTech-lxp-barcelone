import { productList } from "../../data/data.jsx";
import { useBasket } from "../context/BasketContext.jsx";
import { Cart } from "./cart.jsx";

export function ProductGallery() {
  const { basket, setBasket } = useBasket();

  function AddToCart(product) {
    const updatedBasket = [...basket, product];
    setBasket(updatedBasket);
  }

  return (
    <section className="p-2 flex-wrap flex gap-5 justify-center">
      {productList.map((product) => (
        <Cart
          key={product.id}
          img={product.image}
          name={product.name}
          price={product.price}
          ButtonAddToBasket={() => AddToCart(product)}
        />
      ))}
    </section>
  );
}
