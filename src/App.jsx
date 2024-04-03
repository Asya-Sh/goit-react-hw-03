import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import usersContacts from './assets/contacts.json';
import s from './App.module.css';

function App() {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = JSON.parse(window.localStorage.getItem('contacts'));
        if (savedContacts?.length) {
            return savedContacts;
        }
        return usersContacts;
    });

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleDelete = id => {
        setContacts(prev => prev.filter(item => item.id !== id));
    };

    const addContact = contact => {
        setContacts(prev => [...prev, contact]);
    };

    const getFilteredContact = () => {
        return contacts.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    };

    const filteredContacts = getFilteredContact();

    return (
        <>
            <section className={s.form}>
                <div className={s.forms}>
                    <h1>Phonebook</h1>
                    <ContactForm addContact={addContact} />
                    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
                    <ContactList filteredContacts={filteredContacts} searchValue={searchValue} handleDelete={handleDelete} />
                </div>
            </section>
        </>
    );
}

export default App;
