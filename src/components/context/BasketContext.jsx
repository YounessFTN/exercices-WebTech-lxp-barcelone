import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  return useContext(BasketContext);
}
