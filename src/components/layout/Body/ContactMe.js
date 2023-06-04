import React from "react";
import "./ContactMe.css";
import { useFormik } from "formik";
const ContactMe = () => {
  const {handleSubmit,handleChange,values,resetForm} = useFormik({
          initialValues : {
            name : "",
            email : "",
            msg : ""
          },
          onSubmit:(values)=>{
            console.log(JSON.stringify(values))
            resetForm();
          }
  })
  return (
    <div className="contact-me">
      <form id="contact" onSubmit={handleSubmit}>
        <span>CONTACT</span>
        <div>
          <p>Name:</p>
          <input type="text" name="name" value={values.name} required onChange={handleChange}  />
        </div>
        <div>
          <p>Email:</p>
          <input type="email" name="email" value={values.email} required onChange={handleChange}  />
        </div>
        <div>
          <p className="msg">Message:</p>
          <textarea rows={4} cols={8} name="msg" value={values.msg} onChange={handleChange} />
        </div>
        <button  type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;
