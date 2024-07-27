import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputName">Name</label>
        <input id="inputName" type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <label htmlFor="inputPhone">Phone</label>
        <input 
          id="inputPhone" 
          type="text" 
          onChange={(e) => 
          setPhone(e.target.value)} value={phone}
          pattern="\(\d{3}\)\s*\d{3}-\d{4}"
        />
        <label htmlFor="inputEmail">Email</label>
        <input id="inputEmail" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

