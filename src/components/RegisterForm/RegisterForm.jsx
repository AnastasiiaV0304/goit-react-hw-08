import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <>
      <h1 className={css.title}>Registration form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string().required("Username is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 symbols")
            .required("Password is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(register(values));
          resetForm();
        }}
      >
        {() => (
          <Form className={css.form} autoComplete="off">
            <div className={css.label}>
              <label htmlFor="name">Username</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>
            <div className={css.label}>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.label}>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                className={css.error}
              />
            </div>
            <button className={css.button} type="submit">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
