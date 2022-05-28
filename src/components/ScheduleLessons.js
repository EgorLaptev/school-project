function ScheduleLessons({ lessons }) {

    let date = new Date,
        min  = date.getMinutes() + date.getHours() * 60;

    let currentLesson = 0;

    if ((new Date).getDay() === 6) {
        if (min > 1105) currentLesson = 0
        else if (min >= 940) currentLesson = 9
        else if (min >= 890) currentLesson = 8
        else if (min >= 840) currentLesson = 7
        else if (min >= 790) currentLesson = 6
        else if (min >= 740) currentLesson = 5
        else if (min >= 690) currentLesson = 4
        else if (min >= 640) currentLesson = 3
        else if (min >= 590) currentLesson = 2
        else if (min >= 540) currentLesson = 1
    } else {
        if (min > 1105) currentLesson = 0
        else if (min >= 1050) currentLesson = 10
        else if (min >= 1005) currentLesson = 9
        else if (min >= 950) currentLesson = 8
        else if (min >= 895) currentLesson = 7
        else if (min >= 840) currentLesson = 6
        else if (min >= 785) currentLesson = 5
        else if (min >= 720) currentLesson = 4
        else if (min >= 655) currentLesson = 3
        else if (min >= 595) currentLesson = 2
        else if (min >= 540) currentLesson = 1
    }

    return lessons.map( (lesson, index) =>
        <tr key={index} className={index+1 === currentLesson ? 'schedule__now' : '' }>
            <td> {index+1} </td>
            <td> {lesson.name} </td>
            <td> {lesson.room} </td>
        </tr>
    );

}

export default ScheduleLessons;