import * as React from "react"
import {Zoom} from "react-awesome-reveal";
import {useState} from "react";
import { Calendar } from "@/components/ui/calendar"
import styled from "styled-components";



function CalendarDemo() {
  const [date, setDate] = useState(new Date());

  return (
    <Section className="booking" id="booking">
    <Zoom triggerOnce
  >
    <Article >
   <h2 className="text-red-300">Booking and tours</h2>
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
    </Article>

</Zoom>
</Section>

  )
}

export default CalendarDemo;

const Section = styled.section`
background-color: var(--light-grey-color);
padding: var(--spacing-10);


@media (max-width: 500px) {
padding: var(--spacing-20) var(--spacing-5);

  
}
`
const Article = styled.article`
 display: flex;
 justify-content: space-between;
 background-color: var(--grey-color);
-webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0,0,0,0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;

 gap: var(--spacing-10);
 align-items: center;
 padding: var(--spacing-8);



 @media (max-width: 1000px) {
     flex-direction: column;
     padding: var(--spacing-8) var(--spacing-8);

 }


 h2 {
  color: var(--dark-color);
  font-size: var(--large-fs);
  font-family: "Crimson Text";
  text-transform: uppercase;

  @media (max-width: 900px) {
    font-size: var(--semi-large-fs);
    margin: var(--spacing-10) 0;
  }

  @media (max-width: 500px) {
    font-size: var(--semi-medium-fs);
    margin: var(--spacing-20) 0;
  }

 }

`
