import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titleInput">Title</label>
        <input id="titleInput" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label htmlFor="dateInput">Date</label>
        <input id="dateInput" type="date" value={date} min={getTodayString()} onChange={(e) => setDate(e.target.value)}/>
        <lable htmlFor="timeInput">Time</lable>
        <input id="timeInput" type="time" value={time} onChange={(e) => setTime(e.target.value)}/>
        <label htmlFor="contactInput">Contact</label>
        <ContactPicker id="contactInput" contacts={contacts} value={contact} name={contact} onChange={(e) => setContact(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
