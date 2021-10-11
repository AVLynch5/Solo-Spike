import moment from "moment";
import './CalendarCompChild.css';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function CalenderCompChild({day, dateToDisplay}){
   
    return(
        <>
            <TableRow className={moment(day.date).format('l') == dateToDisplay ? 'highLight' : 'filler'}>
               <TableCell>{moment(day.date).format('l')}</TableCell>
               <TableCell>{day.drinks}</TableCell>
            </TableRow> 
        </>
    );
}

export default CalenderCompChild;