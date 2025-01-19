import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import WishlistContext from "../../contex/wishlist/wishlistcontext";
const Details = () => {
  let params = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/aroma/" + params.id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const { wishlist, addWistlist } = useContext(WishlistContext);
  return (
    <>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <div className="product" key={product._id}>
        <img src={product.image} alt={product.name} />
        <div className="product_category">{product.category} </div>
        <div className="product_name">{product.name}</div>
        <div className="product_price">{product.price} </div>
        <div className="heart_icon" onClick={() => addWistlist(product)}>
          {wishlist.find((i) => i._id == product._id) ? (
            <FaHeart />
          ) : (
            <CiHeart />
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
