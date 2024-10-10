export function Ex1() {
  return (
    <>
      <article className="w-1/3  group block overflow-hidden">
        <header className="relative h-[350px] sm:h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
            alt="Product Image 1"
            className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />

          <img
            src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
            alt="Product Image 2"
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        </header>

        <figure className="relative bg-white pt-3">
          <h2 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            Product Name
          </h2>
        </figure>

        <section>
          <p className="tracking-wide">Price: $18.99</p>
        </section>

        <footer>
          <button className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </footer>
      </article>
    </>
  );
}
