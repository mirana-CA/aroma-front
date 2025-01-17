import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const Adminupdate = () => {
  let params = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/aroma/" + params.id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  function updateProduct(values) {
    fetch("http://localhost:3000/aroma/" + params.id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(values),
    });
  }

  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <>
      <Helmet>
        <title>Admin Update</title>
      </Helmet>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="update_page">
          <Link className="back_admin_btn" to={"/admin"}>
            Back Admin Panel
          </Link>
          <Formik
            initialValues={{
              name: product.name,
              category: product.category,
              image: product.image,
              price: product.price,
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              category: Yup.string().required("Required"),
              image: Yup.string().required("Required"),
              price: Yup.number().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              updateProduct(values);
              setSubmitting(false);
            }}
          >
            <Form>
              <label htmlFor="name"> Name</label>
              <Field name="name" type="text" />
              <div className="error_msg">
                <ErrorMessage name="name" />
              </div>

              <label htmlFor="category">Category</label>
              <Field name="category" type="text" />
              <div className="error_msg">
                <ErrorMessage name="category" />
              </div>

              <label htmlFor="image">Image</label>
              <Field name="image" type="text" />
              <div className="error_msg">
                <ErrorMessage name="image" />
              </div>

              <label htmlFor="price">Price</label>
              <Field name="price" type="number" />
              <div className="error_msg">
                <ErrorMessage name="price" />
              </div>

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
};

export default Adminupdate;
