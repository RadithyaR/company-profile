import * as Yup from "yup";

const signInFormSchema = Yup.object({
  email: Yup.string().email().required().label("email"),
  password: Yup.string().required().label("password"),
});

export default signInFormSchema;
