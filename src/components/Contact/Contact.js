import React from 'react';
import ContactForm from './ContactForm';
import './Contact.scss';
import ContactList from './ContactList';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__wrap">
        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
};
export default Contact;
