import { useFormik } from 'formik';

import * as Yup from 'yup';

export const ContactForm = () => {
  const f = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(1, 'Too short!')
        .max(50, 'Thats enough!')
        .required(),
      email: Yup.string().email().required(),
    }),
    onSubmit(event) {
      event.preventDefault();

      const myForm = event.target;
      const formData = new FormData(myForm);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => alert('Thank you for your submission'))
        .catch(error => alert(error));
    },
  });

  return (
    <form onSubmit={f.handleSubmit} data-netlify="true">
      <label htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          onChange={f.handleChange}
          value={f.values.name}
          placeholder="Enter your name"
          className="form__input"
          required
        />
      </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={f.handleChange}
        value={f.values.email}
        placeholder="Enter email*"
        className="form__input"
        required
      />
      <button className="form__button" type="submit">
        Send
      </button>
    </form>
  );
};
