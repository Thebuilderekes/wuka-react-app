
import * as React from "react"
import { useRef, useState} from "react";


import { Calendar } from "@/components/ui/calendar"
import styled from "styled-components";
import { useScroll, useTransform, motion } from "framer-motion";



function CalendarDemo() {
  const [date, setDate] = useState(new Date());
  const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "0.75 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <Section className="booking-tour-container">
    <motion.div
    className="footer-text__container booking-container"
    ref={ref}
    style={{ scale: scaleProgress, opacity: opacityProgress }}
  >
    <Article>
   <h2 className="text-red-300">Booking and tours</h2>
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
    </Article>

</motion.div>
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
 /* box-shadow: 0px 4px 5px 0px rgba(102,95,95,0.75);
-webkit-box-shadow: 0px 4px 5px 0px rgba(102,95,95,0.75);
-moz-box-shadow: 0px 4px 5px 0px rgba(102,95,95,0.75);  */
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
    margin: var(--spacing-20) 0;
  }

  @media (max-width: 500px) {
    font-size: var(--semi-medium-fs);
    margin: var(--spacing-20) 0;
  }

 }

`