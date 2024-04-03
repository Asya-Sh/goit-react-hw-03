import s from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ contact, handleDelete }) => {
    const { id, name, number } = contact;
    return (
        <li className={s.item}>
            <div className={s.wrapper}>
                <FaUser />
                <h3>Name: {name}</h3>
            </div>
            <div className={s.wrapper}>
                <FaPhoneAlt />
                <p>Tel: {number}</p>
            </div>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
    );
};

export default Contact;
