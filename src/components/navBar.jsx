import { useEffect, useState } from "react";
import { basketList } from "../data/basketList.jsx";

export function NavBar() {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = basketList.reduce((sum, product) => sum + product.price, 0);
    setTotalPrice(price);
  }, [basketList]);

  return (
    <nav className="z-50 sticky top-0 b">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Youness</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {basketList.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <ul className="p-4 space-y-4 max-h-60 overflow-y-auto">
                {basketList.map((product, index) => (
                  <li
                    key={`${product.id}-${index}`}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="size-16 rounded object-cover"
                    />

                    <div className="w-full">
                      <h3 className="font-medium text-sm text-gray-900">
                        {product.name}
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Size: </dt>
                          <dd className="inline">{product.size}</dd>
                        </div>

                        <div>
                          <dt className="inline">Color: </dt>
                          <dd className="inline">{product.color}</dd>
                        </div>

                        <div>
                          <dd className="text-xs text-black">
                            {product.price} €
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="card-body">
                <span className="text-lg font-bold">
                  {basketList.length} Items
                </span>
                <span className="text-red-500">Subtotal: {totalPrice} €</span>
                <div className="card-actions">
                  <button className="btn btn-block">
                    View cart({basketList.length})
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
