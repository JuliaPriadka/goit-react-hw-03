import { Field, Formik, Form } from 'formik';
import css from '../ContactForm/contactForm.module.css';

export default function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}>
      <Form className={css.form}>
        <label htmlFor="name" className={css.formLabel}>
          Name
        </label>
        <Field name="name" className={css.formField} />
        <label htmlFor="number" className={css.formLabel}>
          Number
        </label>
        <Field name="number" className={css.formField} />
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
