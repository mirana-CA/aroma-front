import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
const Adminadd = () => {
  function addProduct(values) {
    fetch("http://localhost:3000/aroma/",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(values)
})
  }
  return (
    <>
      <Helmet>
        <title>Admin Create</title>
      </Helmet>
      <div className="add_page">
      <Link className="back_admin_btn" to={"/admin"}>
            Back Admin Panel
          </Link>
      <Formik
       initialValues={{ name: '', category: '', image: '' ,price:''}}
       validationSchema={Yup.object({
         name: Yup.string()
           .required('Required'),
         category: Yup.string()
           .required('Required'),
           image: Yup.string()
           .required('Required'),
           price:Yup.number().required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
     
          addProduct(values)
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
   
    </>
  );
};

export default Adminadd;
