import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ filteredContacts, searchValue, handleDelete }) => {
    return (
        <ul>
            {filteredContacts
                .filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map(contact => (
                    <Contact key={contact.id} contact={contact} handleDelete={handleDelete} />
                ))}
        </ul>
    );
};

export default ContactList;
