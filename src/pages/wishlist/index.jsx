import React, { useContext } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import WishlistContext from "../../contex/wishlistcontext";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const { wishlist, addWistlist } = useContext(WishlistContext);

  return (
    <>
      <Helmet>
        <title>wishlist</title>
      </Helmet>
      <div className="wishlist">
        <div className="wishlist_container">
          <div className="wishlist_items_conatiner">
            {wishlist.map((item) => {
              return (
                <div className="product" key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <div className="product_category">{item.category} </div>
                  <div className="product_name"><Link to={`/details/${item._id}`} >{item.name}</Link></div>
                  <div className="product_price">{item.price} </div>
                  <div className="heart_icon" onClick={() => addWistlist(item)}>
                    {wishlist.find((i) => i._id == item._id) ? (
                      <FaHeart />
                    ) : (
                      <CiHeart />
                    )}
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
