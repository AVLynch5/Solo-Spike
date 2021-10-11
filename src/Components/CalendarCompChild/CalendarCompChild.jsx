import moment from "moment";
import './CalendarCompChild.css';

function CalenderCompChild({day, dateToDisplay}){
    const handleStyle = () => {
        let style = 'filler';
        if (moment(day.date).format('l') == dateToDisplay) {
            style = 'highLight';            
        }
        return style;
    }

    let style = handleStyle();

    return(
        <>
           <tr className={style}>
               <td>{moment(day.date).format('l')}</td>
               <td>{day.drinks}</td>
            </tr> 
        </>
    );
}

export default CalenderCompChild;