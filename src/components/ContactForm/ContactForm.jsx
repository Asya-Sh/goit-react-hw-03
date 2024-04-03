import { Form, Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
    const handleSubmit = (values, options) => {
        addContact({ ...values, id: nanoid() });
        options.resetForm();
    };

    const initialValues = { name: '', number: '' };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!!!'),
        number: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!!!'),
    });

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className={s.form}>
                <label className={s.row}>
                    Name
                    <Field type="text" name="name" />
                    <ErrorMessage className={s.message} name="name" component="span" />
                </label>

                <label className={s.row}>
                    Number
                    <Field type="text" name="number" />
                    <ErrorMessage className={s.message} name="number" component="span" />
                </label>

                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
