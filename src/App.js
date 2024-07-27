import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  const [contactList, setContactList] = useState([]);
  const [appointmentList, setAppointmentList] = useState([]);
  /*
  Define state variables for 
  contacts and appointments 
  */

  function addContact (name, phone, email) {
    const newContact = {
      name,
      phone,
      email
    }

    setContactList((prev) => [...prev, newContact]);
  }

  function addAppointment (name, contact, date, time) {
    const newAppointment = {
      name,
      contact,
      date,
      time
    }

    setAppointmentList((prev) => [...prev, newAppointment]);
  }

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contactList={contactList} addContact={addContact} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contactList={contactList} appointmentList={appointmentList} addAppointment={addAppointment} /> }/>
    </Route>
  ));
  
  console.log(contactList);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
