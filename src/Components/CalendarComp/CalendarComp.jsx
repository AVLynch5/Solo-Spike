import React, { useState } from "react";
//import the calendar
import Calendar from "react-calendar";
//import moment
import moment from "moment";
//import styling
import 'react-calendar/dist/Calendar.css';
//import CSS
import './CalendarComp.css'


function CalendarComp(){
    //useState
    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
        setValue(nextValue);
        const dateToDisplay=(moment(nextValue).format('l'));
        alert(`The date selected is ${dateToDisplay}`);
        //const dateToDisplay1=(moment(nextValue[0]).format('l'));//first date selected by user when selectRange true
        //const dateToDisplay2=(moment(nextValue[1]).format('l'));//2nd date selected by user when selectRange true
        //alert(`The dates selected are ${dateToDisplay1} and ${dateToDisplay2}`);//display selected dates when selectRange true
        console.log(typeof dateToDisplay);//test - typeof dateToDisplay = string
    }

    return(
        <>
            <h1>Calendar</h1>
            <div className="calContainer">
                <Calendar 
                    onChange={onChange}
                    value={value}
                    //selectRange={true}//when true, user selects 2 dates on calendar. Dates stored in an array nextValue.
                />
            </div>
        </>
    );
}

export default CalendarComp;

//Comments
//- BIG CHALLENGE - selectRange must be true to select 