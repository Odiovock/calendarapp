import React from "react";

export const ContactPicker = ({
  contacts,
  onChange,
  value,
  name
}) => {
  return (
    <>
      <select onChange={onChange} value={value}>
        {contacts.map((contact) => {
          <option value={contact.name}>{contact.name}</option>
        })}
      </select>
    </>
  );
};
