import React, {useEffect, useState} from 'react'
import '../css/schedule.css';
import Schedule10 from "../components/Schedule10";
import Schedule11 from "../components/Schedule11";
import ScheduleCalls from "../components/ScheduleCalls";



function Schedule() {

    const [classNum, setClassNum] = useState('10');

    useEffect(() => {
        document.title = 'Расписание';
    })

    return (
        <>
            <section className="intro_schedule">
                <div className="container intro__container">
                    <h1 className="intro__title"> Расписание </h1>
                </div>
            </section>
            <section className='schedule'>


                <div className="schedule__container container">

                    <div className='schedule__controls'>
                        <h2
                            className={classNum === '10' ? 'schedule__class schedule__class_active' : 'schedule__class'}
                            onClick={() => setClassNum('10')}> 10А </h2>
                        <h2 className={classNum === '11' ? 'schedule__class schedule__class_active' : 'schedule__class'}
                            onClick={() => setClassNum('11')}> 11А </h2>
                        <h2 className={classNum === 'calls' ? 'schedule__class schedule__class_active' : 'schedule__class'}
                            onClick={() => setClassNum('calls')}> Звонков </h2>
                    </div>

                    <div className='schedule__wrap'>
                        { classNum === '10' ? <Schedule10/> : classNum === '11' ? <Schedule11/> : <ScheduleCalls/> }
                    </div>


                </div>


            </section>
        </>
    );

}

export default Schedule;