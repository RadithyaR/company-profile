import * as Yup from "yup";

const BlogFormSchema = Yup.object({
  title: Yup.string().required().label("title"),
  description: Yup.string().required().label("description"),
});

export default BlogFormSchema;
