import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  FormAddContact,
  InputField,
  Label,
  ButtonAddContact,
  ErrorMessageWrapper,
} from './ContactForm.styled';

const phoneRegExp =
  '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}';
const nameRegExp =
  "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegExp, 'Name is not valid')
    .required('A name is required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('A phone number is required'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAddContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <FormAddContact>
        <Label>
          Name
          <InputField name="name" placeholder="Enter Name" />
          <ErrorMessageWrapper name="name" component="div" />
        </Label>

        <Label>
          Number
          <InputField name="number" type="tel" placeholder="Enter Phone" />
          <ErrorMessageWrapper name="number" component="div" />
        </Label>

        <ButtonAddContact type="submit">Add contact</ButtonAddContact>
      </FormAddContact>
    </Formik>
  );
};
