import React, { useContext } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { BsBasket3 } from "react-icons/bs";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import BasketContext from "../../contex/basket/basketcontext";
import { Link } from "react-router-dom";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
const Basket = () => {
  const { basket, addBasket, removeBasket, decrement, total } =
    useContext(BasketContext);

  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <div className="basket">
        <div className="basket_container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Count</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item, i) => {
                return (
                  <tr key={item._id}>
                    <td>{i + 1}</td>
                    <td>
                      <img src={item.image} alt={item.name} />
                    </td>
                    <td className="product_name">{item.name}</td>
                    <td className="product_category">{item.category} </td>
                    <td className="product_price">${item.price} </td>
                    <td className="counter">
                      <span onClick={() => decrement(item)}>-</span>
                      <span>{item.count}</span>
                      <span onClick={() => addBasket(item)}>+</span>
                    </td>
                    <td className="delete_btn">
                      <FaRegTrashAlt onClick={() => removeBasket(item)} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="checkout">
            <div className="subtotal">
              Subtotal: <span>${total}.00</span>
            </div>
            <div className="delivery">
              Delivery: <span>Free</span>
            </div>
            <input type="text" placeholder="Cupon Code" />
            <button>Contiue Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
