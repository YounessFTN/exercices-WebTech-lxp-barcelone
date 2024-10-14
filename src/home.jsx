import { Ex1 } from "./components/exercices/cart";

import { ProductGallery } from "./components/exercices/ProductGallery";

export function Home() {
  return (
    <>
      <ProductGallery />
      <section className="p-2 flex-wrap flex gap-5 justify-center">
        <Ex1 />
        <Ex1 />
        <Ex1 />
        <Ex1 />
        <Ex1 />
        <Ex1 />
        <Ex1 />
        <Ex1 />
        <Ex1 />
      </section>
    </>
  );
}
