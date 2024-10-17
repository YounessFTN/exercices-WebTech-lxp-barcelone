export function Cart({ img, name, price, ButtonAddToBasket }) {
  // Extraire les tailles et les couleurs disponibles

  return (
    <article className="w-full sm:w-1/2 lg:w-1/3 group block overflow-hidden">
      <header className="relative h-[200px] sm:h-[300px] lg:h-[350px]">
        <img
          src={img[0]} // Accéder à la première image
          alt={name}
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
        />

        <img
          src={img[1]} // Accéder à la deuxième image
          alt={name}
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 "
        />
      </header>

      <figure className="relative bg-white p-3">
        <h2 className="text-base sm:text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {name}
        </h2>
      </figure>

      <section className="p-3">
        <p className="tracking-wide text-base sm:text-lg">Price: ${price}</p>
      </section>

      <footer className="p-3">
        <button
          onClick={ButtonAddToBasket}
          className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded w-full"
        >
          Add to Cart
        </button>
      </footer>
    </article>
  );
}
