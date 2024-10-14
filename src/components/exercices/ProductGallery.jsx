export function ProductGallery() {
  let count = 0;
  const increment = () => {
    count++;
    console.log(count);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen column">
      <h1 className="text-3xl font-bold">learn UseState</h1>
      <p className="text-2xl">Counter: {count}</p>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white  py-2 px-4 rounded"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
}
