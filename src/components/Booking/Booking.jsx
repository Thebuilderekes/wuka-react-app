
import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import styled from "styled-components";


function CalendarDemo() {
  const [date, setDate] = React.useState(new Date());

  return (

    <Section className="booking-container">
   <h2 className="text-red-300">Booking and Tours</h2>
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />

</Section>

  )
}

export default CalendarDemo;

const Section = styled.section`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 

 h2 {
  color: var(--text-color);
  font-size: 32px;
 }

`