import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
  number: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.contactForm}>
          <label className={css.label}>
            <span>Name</span>
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMessage}
            />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field className={css.input} type="text" name="number" />
            <ErrorMessage
              name="number"
              component="span"
              className={css.errorMessage}
            />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
