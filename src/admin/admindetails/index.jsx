import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
const Admindetails = () => {
  let params = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {

    fetch("http://localhost:3000/aroma/" + params.id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);


  return (
    <>
      <Helmet>
        <title>Admin Details</title>
      </Helmet>
      <div className="product" key={product._id}>
        <img src={product.image} alt={product.name} />
        <div className="product_category">{product.category} </div>
        <div className="product_name">{product.name}
        </div>
        <div className="product_price">{product.price} </div>
   
      </div>
    </>
  );
};

export default Admindetails;
