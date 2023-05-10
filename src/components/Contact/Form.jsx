import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ErrorComponent } from './Error';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').max(50, 'Thats enough!').required(),
  email: Yup.string().email().required(),
});

export const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
  };

  const handleSubmit = ({ name, email }, actions) => {
    alert(`name: ${name}, email: ${email}`);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <label htmlFor="name">
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="form__input"
            />
            <ErrorMessage name="name" component={ErrorComponent} />
          </label>
          <label htmlFor="email">
            <Field
              id="email"
              name="email"
              placeholder="Enter email*"
              className="form__input"
            />
            <ErrorMessage name="email" component={ErrorComponent} />
          </label>
          <button className="form__button" type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
};
