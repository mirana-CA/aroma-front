import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import BasketContext from "./basketcontext";

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("basket", []);
  const [total, setTotal] = useState(0);

  function addBasket(item) {
    let itemIndex = basket.findIndex((i) => i._id == item._id);

    if (itemIndex == -1) {
      setBasket([...basket, { ...item, count: 1 }]);
      return;
    }
    console.log(basket[itemIndex]);

    basket[itemIndex].count++;
    setBasket([...basket]);
  }

  function decrement(item) {
    let itemIndex = basket.findIndex((i) => i._id == item._id);

    if (basket[itemIndex].count != 1) {
      basket[itemIndex].count--;
      setBasket([...basket]);
      return;
    }
    setBasket(basket.filter((i) => i._id != item._id));
  }
  function removeBasket(item) {
    setBasket(basket.filter((i) => i._id != item._id));
  }
  useEffect(() => {
    setTotal(basket.reduce((acc, item) => acc + item.count * item.price, 0));
  }, [basket]);
  return (
    <BasketContext.Provider
      value={{ basket, addBasket, decrement, removeBasket, total }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
