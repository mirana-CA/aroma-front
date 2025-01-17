import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaLongArrowAltLeft ,FaLongArrowAltRight} from "react-icons/fa";
import { Helmet } from "react-helmet";
import WishlistContext from "../../contex/wishlistcontext";
import { Link } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/aroma/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const { wishlist, addWistlist } = useContext(WishlistContext);
  return (
    <>
      <Helmet>
        <title>AROMA</title>
      </Helmet>

      {/* PRODUCT SECTION START  */}
      <section className="products_section">
        <div className="products_section_container">
          <p className="products_section_content">Popular Item in the market</p>
          <h2 className="products_section_header">Trending Product</h2>
          <div className="products_conatiner">
            {products.map((item) => {
              return (
                <div className="products" key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <div className="product_category">{item.category} </div>
                  <div className="product_name">
                    <Link to={`details/${item._id}`}>{item.name}</Link>{" "}
                  </div>
                  <div className="product_price">${item.price}.00 </div>
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
      </section>
      {/* PRODUCT SECTION END  */}

      {/* WINTER SALE START  */}
      <section className="winter_sale_section">
        <div className="winter_sale_container">
          <div className="winter_sale_content">
            <h2>Up To 50% Off</h2>
            <h3>Winter Sale</h3>
            <p>Him she'd let them sixth saw light</p>
            <button>Shop Now</button>
          </div>
        </div>
      </section>

      {/* WINTER SALE END  */}

      {/* BEST SELLERS SECTION START  */}
      <section className="best_sellers_section">
        <div className="best_sellers_section_container">
          <p className="best_sellers_section_content">
            Popular Item in the market
          </p>
          <h2 className="best_sellers_section_header">Best Sellers</h2>
          <div className="best_sellers_conatiner">
            <div className="best_sellers_product">
              <img src="https://preview.colorlib.com/theme/aroma/img/product/product1.png.webp" alt="product" />
              <div className="product_category">Accessories</div>
              <div className="product_name">Quartz Belt Watch</div>
              <div className="product_price">$150.00 </div>
            </div>

            <div className="best_sellers_product">
              <img src="https://preview.colorlib.com/theme/aroma/img/product/product2.png.webp" alt="product" />
              <div className="product_category">Beauty</div>
              <div className="product_name">Women Freshwash</div>
              <div className="product_price">$150.00 </div>
            </div>
            <div className="best_sellers_product">
              <img src="https://preview.colorlib.com/theme/aroma/img/product/product3.png.webp" alt="product" />
              <div className="product_category">Decor</div>
              <div className="product_name">Room Flash Light</div>
              <div className="product_price">$150.00 </div>
            </div>
            <div className="best_sellers_product">
              <img src="https://preview.colorlib.com/theme/aroma/img/product/product4.png.webp" alt="product" />
              <div className="product_category">Decor</div>
              <div className="product_name">Room Flash Light</div>
              <div className="product_price">$150.00 </div>
            </div>
          </div>
          <div className="arrows">
          <FaLongArrowAltLeft />
          <FaLongArrowAltRight />
          </div>
        </div>
      </section>
      {/* BEST SELLERS SECTION END  */}

    </>
  );
};

export default Home;
