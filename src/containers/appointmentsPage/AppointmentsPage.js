import React, { useEffect, useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  contactList,
  appointmentList,
  addAppointment
}) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState(undefined);
  const [time, setTime] = useState(undefined);
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment(title, contact, date, time);
    setTitle("");
    setContact(undefined);
    setDate(undefined);
    setTime(undefined);
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contactList}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}  
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointmentList}/>
      </section>
    </div>
  );
};