import React, { useState } from "react";
//import the calendar
import Calendar from "react-calendar";
//import moment
import moment from "moment";
//import styling
import 'react-calendar/dist/Calendar.css';
//import CSS
import './CalendarComp.css'
import CalenderCompChild from "../CalendarCompChild/CalendarCompChild";


function CalendarComp(){
    //init dateToDisplay
    let dateToDisplay;

    //useState
    const [value, setValue] = useState(new Date());

    //data to display using conditional rendering
    const dataToShow = [
        {drinks: 6, date: "2021-10-01T00:00:00+01:00"},
        {drinks: 2, date: "2021-10-02T00:00:00+01:00"},
        {drinks: 4, date: "2021-10-03T00:00:00+01:00"},
        {drinks: 1, date: "2021-10-04T00:00:00+01:00"},
        {drinks: 1, date: "2021-10-05T00:00:00+01:00"},
        {drinks: 1, date: "2021-10-06T00:00:00+01:00"},
        {drinks: 0, date: "2021-10-07T00:00:00+01:00"},
        {drinks: 0, date: "2021-10-08T00:00:00+01:00"},
        {drinks: 3, date: "2021-10-09T00:00:00+01:00"},
        {drinks: 3, date: "2021-10-10T00:00:00+01:00"},
        {drinks: 0, date: "2021-10-11T00:00:00+01:00"},
        {drinks: 2, date: "2021-10-12T00:00:00+01:00"},
        {drinks: 0, date: "2021-10-13T00:00:00+01:00"},
        {drinks: 0, date: "2021-10-14T00:00:00+01:00"},
        {drinks: 0, date: "2021-10-15T00:00:00+01:00"},
        {drinks: 0, date: "2021-10-16T00:00:00+01:00"},
        {drinks: 0, date: "2021-10-17T00:00:00+01:00"},
        {drinks: 0, date: "2021-10-18T00:00:00+01:00"},
        {drinks: 0, date: "2021-10-19T00:00:00+01:00"},
        {drinks: 11, date: "2021-10-20T00:00:00+01:00"},
        {drinks: 0, date: "2021-10-21T00:00:00+01:00"},
        {drinks: 0, date: "2021-10-22T00:00:00+01:00"},
        {drinks: 3, date: "2021-10-23T00:00:00+01:00"},
    ];

    function onChange(nextValue) {
        setValue(nextValue);
        dateToDisplay=(moment(nextValue).format('l'));
        alert(`The date selected is ${dateToDisplay}`);
        console.log(nextValue);
        //const dateToDisplay1=(moment(nextValue[0]).format('l'));//first date selected by user when selectRange true
        //const dateToDisplay2=(moment(nextValue[1]).format('l'));//2nd date selected by user when selectRange true
        //alert(`The dates selected are ${dateToDisplay1} and ${dateToDisplay2}`);//display selected dates when selectRange true
        console.log(typeof dateToDisplay);//test - typeof dateToDisplay = string
    }

    return(
        <>
            <h3>Calendar</h3>
            <div className="calContainer">
                <Calendar 
                    onChange={onChange}
                    value={value}
                    //selectRange={true}//when true, user selects 2 dates on calendar. Dates stored in an array nextValue.
                />
            </div>
            <h3>Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Number of Drinks</th>
                    </tr>
                </thead>
                <tbody>
                    {dataToShow.map((day) => {
                        return(<CalenderCompChild day={day} dateToDisplay={dateToDisplay}/>)
                    })}
                </tbody>
            </table>
        </>
    );
}

export default CalendarComp;

//Comments
//- BIG CHALLENGE - selectRange must be true to select 