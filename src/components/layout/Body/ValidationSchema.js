import * as Yup from "yup";

const validation = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("name is required"),
  email: Yup.string().email().required("email is required"),
  msg: Yup.string().required("tell me about your concern or project"),
});

export default validation;
