import React from "react";
import "./ContactMe.css";
import { useFormik } from "formik";
import validation from "./ValidationSchema.js";

const ContactMe = () => {
  const { handleSubmit, handleChange, values, resetForm, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        msg: "",
      },
      validationSchema: validation,
      onSubmit: (values) => {
        // console.log(JSON.stringify(values));
        resetForm();
      },
    });

  return (
    <div className="contact-me">
       <span>CONTACT</span>
      <form id="contact" onSubmit={handleSubmit}>
       
        <div>
          <p>Name:</p>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name ? (
            <small style={{ color: "red", fontSize: "10px",marginBottom:"0px"}}>
              {errors.name}
            </small>
          ) : null}
        </div>
        <div>
          <p>Email:</p>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email ? (
            <small style={{ color: "red", fontSize: "10px",marginBottom:"0px" }}>
              {errors.email}
            </small>
          ) : null}
        </div>
        <div>
          <p className="msg">Message:</p>
          <textarea
            rows={4}
            cols={8}
            name="msg"
            value={values.msg}
            onChange={handleChange}
          />
          {errors.msg && touched.msg ? (
            <small style={{ color: "red", fontSize: "10px" ,marginBottom:"0px"}}>{errors.msg}</small>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;
