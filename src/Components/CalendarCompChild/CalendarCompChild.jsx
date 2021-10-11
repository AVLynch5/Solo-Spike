import moment from "moment";
import './CalendarCompChild.css';

function CalenderCompChild({day, dateToDisplay}){
   
    return(
        <>
           <tr className={moment(day.date).format('l') == dateToDisplay ? 'highLight' : 'filler'}>
               <td>{moment(day.date).format('l')}</td>
               <td>{day.drinks}</td>
            </tr> 
        </>
    );
}

export default CalenderCompChild;