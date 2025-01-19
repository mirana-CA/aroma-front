import React, { useContext } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import WishlistContext from "../../contex/wishlist/wishlistcontext";
import { Link } from "react-router-dom";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { BsBasket3 } from "react-icons/bs";
const Wishlist = () => {
  const { wishlist, addWistlist } = useContext(WishlistContext);

  return (
    <>
      <Helmet>
        <title>wishlist</title>
      </Helmet>
      <div className="wishlist">
        <div className="wishlist_container">
          <div className="wishlist_items_container">
            {wishlist.map((item) => {
              return (
                <div className="product" key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <div className="product_category">{item.category} </div>
                  <div className="product_name">
                    <Link to={`/details/${item._id}`}>{item.name}</Link>
                  </div>
                  <div className="product_price">${item.price}.00 </div>
                  <div className="heart_icon" onClick={() => addWistlist(item)}>
                    {wishlist.find((i) => i._id == item._id) ? (
                      <IoHeartSharp />
                    ) : (
                      <IoHeartOutline />
                    )}
                  </div>
                  <div className="basket_icon">
                    <BsBasket3 />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
