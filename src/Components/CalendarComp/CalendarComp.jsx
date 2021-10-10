import React, { useState } from "react";
//import the calendar
import Calendar from "react-calendar";

function CalendarComp(){
    //useState
    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
        setValue(nextValue);
        const dateToDisplay=
        alert(nextValue);
    }

    return(
        <>
            <h1>Calendar</h1>
            <Calendar 
                onChange={onChange}
                value={value}
            />

        </>
    );
}

export default CalendarComp;