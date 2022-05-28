import ScheduleLessons from "./ScheduleLessons.js";

function ScheduleList( day ) {

    const weekDay = (new Date).getDay();

    return day.lessons.map( (day, index) =>
        <div className='schedule__day' key={index}>

            {
                day.calls
                    ? <h3 className={ (weekDay < 6 && weekDay !== 0 && index === 0) || (weekDay === 6 && index === 1) ? 'schedule__title schedule__title_today' : 'schedule__title'}> { day.name } </h3>
                    : <h3 className={ weekDay === index+1 ? 'schedule__title schedule__title_today' : 'schedule__title'}> { day.name } </h3>
            }

            <table className='table'>

                <thead>
                <tr>
                    <th> № </th>
                    <th> { day.calls ? 'Время' : 'Урок'} </th>
                    <th> { day.calls ? 'Перемена' : 'Кабинет'} </th>
                </tr>
                </thead>

                <tbody>
                    <ScheduleLessons lessons={ day.lessons }/>
                </tbody>

            </table>
        </div>
    );

}

export default ScheduleList;