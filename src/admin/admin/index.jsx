import React, { useEffect, useState } from "react";
import "./index.scss";
import { FaRegTrashAlt, FaPen } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Admin = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/aroma/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  function deleteProduct(item) {
    fetch("http://localhost:3000/aroma/" + item._id, {
      method: "DELETE",
    });
  }
  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <div className="admin_page">
        <Link className="admin_add_btn" to={"/adminadd"}>
          Add New Product
        </Link>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => {
              return (
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td className="product_category">{item.category} </td>
                  <td className="product_name">
                    <Link to={`/admindetails/${item._id}`}>{item.name}</Link>
                  </td>
                  <td className="product_price">${item.price} </td>
                  <td className="delete_btn" >
                    <FaRegTrashAlt onClick={()=>deleteProduct(item) } />
                  </td>
                  <td className="update_btn">
                  <Link to={`/adminupdate/${item._id}`}><FaPen /></Link>
               
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
