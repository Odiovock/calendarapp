import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const {contactList, addContact} = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);  
  /*
  Define state variables for 2
  contact info and duplicate check
  */
  useEffect(() => {
    setIsDuplicate(false);

    for (const contact of contactList) {
      if(name.toLowerCase() === contact.name.toLowerCase()) {
        setIsDuplicate(true);
      }
    }
  }, [name]);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!isDuplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    } else {
      window.alert("The contact you entered already exists");
    }
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {isDuplicate ? <p>The Contact you entered already exists</p> : ""}
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contactList} />
      </section>
    </div>
  );
};
