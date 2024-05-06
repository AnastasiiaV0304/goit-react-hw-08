import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

export const LoginForm = () => {
  const loginScheme = Yup.object().shape({
    email: Yup.string()
      .min(1, "Too Short!")
      .max(50, "Too Long!")
      .required("This is a required field"),
    password: Yup.string()
      .min(1, "Too Short!")
      .max(50, "Too Long!")
      .required("This is a required field"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Login success");
        resetForm();
      })
      .catch(() => {
        toast.error("Login error");
      });
  };

  return (
    <div>
      <h1 className={css.title}>Enter your account</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginScheme}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <div className={css.label}>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div className={css.label}>
            <label>Password</label>
            <Field type="password" name="password" autoComplete="on" />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>
          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};
