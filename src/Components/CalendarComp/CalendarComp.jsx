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
//import components for table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function CalendarComp(){
    //init dateToDisplay - unnecessary, need to pass state var via props for highLight to change onChange
    let dateToDisplay;

    //useState
    const [value, setValue] = useState(new Date());

    //data to display using conditional rendering
    //need to learn date conventions - dates below display 1 day early 
    const dataToShow = [
        {id: 1, drinks: 6, date: "2021-10-01T00:00:00+01:00"},
        {id: 2, drinks: 2, date: "2021-10-02T00:00:00+01:00"},
        {id: 3, drinks: 4, date: "2021-10-03T00:00:00+01:00"},
        {id: 4, drinks: 1, date: "2021-10-04T00:00:00+01:00"},
        {id: 5, drinks: 1, date: "2021-10-05T00:00:00+01:00"},
        {id: 6, drinks: 1, date: "2021-10-06T00:00:00+01:00"},
        {id: 7, drinks: 0, date: "2021-10-07T00:00:00+01:00"},
        {id: 8, drinks: 0, date: "2021-10-08T00:00:00+01:00"},
        {id: 9, drinks: 3, date: "2021-10-09T00:00:00+01:00"},
        {id: 10, drinks: 3, date: "2021-10-10T00:00:00+01:00"},
        {id: 11, drinks: 0, date: "2021-10-11T00:00:00+01:00"},
        {id: 12, drinks: 2, date: "2021-10-12T00:00:00+01:00"},
        {id: 13, drinks: 0, date: "2021-10-13T00:00:00+01:00"},
        {id: 14, drinks: 0, date: "2021-10-14T00:00:00+01:00"},
        {id: 15, drinks: 0, date: "2021-10-15T00:00:00+01:00"},
        {id: 16, drinks: 0, date: "2021-10-16T00:00:00+01:00"},
        {id: 17, drinks: 0, date: "2021-10-17T00:00:00+01:00"},
        {id: 18, drinks: 0, date: "2021-10-18T00:00:00+01:00"},
        {id: 19, drinks: 0, date: "2021-10-19T00:00:00+01:00"},
        {id: 20, drinks: 11, date: "2021-10-20T00:00:00+01:00"},
        {id: 21, drinks: 0, date: "2021-10-21T00:00:00+01:00"},
        {id: 22, drinks: 0, date: "2021-10-22T00:00:00+01:00"},
        {id: 23, drinks: 3, date: "2021-10-23T00:00:00+01:00"},
        {id: 24, drinks: 7, date: "2021-10-24T00:00:00+01:00"},
        {id: 25, drinks: 0, date: "2021-10-25T00:00:00+01:00"},
        {id: 26, drinks: 0, date: "2021-10-26T00:00:00+01:00"},
        {id: 27, drinks: 1, date: "2021-10-27T00:00:00+01:00"},
        {id: 28, drinks: 0, date: "2021-10-28T00:00:00+01:00"},
        {id: 29, drinks: 0, date: "2021-10-29T00:00:00+01:00"},
        {id: 30, drinks: 3, date: "2021-10-30T00:00:00+01:00"},
        {id: 31, drinks: 9, date: "2021-10-31T00:00:00+01:00"},
        {id: 32, drinks: 3, date: "2021-11-01T00:00:00+01:00"},
    ];

    function onChange(nextValue) {
        setValue(nextValue);//change value to next clicked date
        const dateToDisplay=(moment(nextValue).format('l'));
        alert(`The date selected is ${dateToDisplay}`);//value doesn't update immediately, display formatted nextValue onChange
        console.log(value);
        //const dateToDisplay1=(moment(nextValue[0]).format('l'));//first date selected by user when selectRange true
        //const dateToDisplay2=(moment(nextValue[1]).format('l'));//2nd date selected by user when selectRange true
        //alert(`The dates selected are ${dateToDisplay1} and ${dateToDisplay2}`);//display selected dates when selectRange true
        console.log(typeof value);//test - typeof dateToDisplay = string
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
           <Paper>
               <TableContainer>
                    <Table className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Number of Drinks</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataToShow.map((day) => {
                                return(<CalenderCompChild key={day.id} day={day} dateToDisplay={moment(value).format('l')} /* need to pass state var via props for var to update onChange *//>)
                            })}
                        </TableBody>
                    </Table>
               </TableContainer>
           </Paper>
        </>
    );
}

export default CalendarComp;

//Comments
//- BIG CHALLENGE - selectRange must be true to select 