function Schedule10({ day, minutes }) {

    return (
        <>
            <div className="schedule__wrapper">
                <h3 className={ day === 1 ? 'schedule__title schedule__title_today' : 'schedule__title'}> Понедельник </h3>

                <table className='table'>

                    <thead>
                    <tr>
                        <th> № </th>
                        <th> Урок </th>
                        <th> Кабинет </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>1</td>
                        <td/>
                        <td/>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Русский язык</td>
                        <td>41</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Химия</td>
                        <td>11</td>
                    </tr>
                    <tr className='schedule__now'>
                        <td>4</td>
                        <td>Индивидуальный проект</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Обществознание</td>
                        <td>43</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Алгебра</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Алгебра</td>
                        <td>22</td>
                    </tr>
                    </tbody>

                </table>
            </div>

            <div className="schedule__wrapper">
                <h3 className={ day === 2 ? 'schedule__title schedule__title_today' : 'schedule__title'}> Вторник </h3>

                <table className='table'>

                    <thead>
                    <tr>
                        <th> № </th>
                        <th> Урок </th>
                        <th> Кабинет </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Английский язык вн.</td>
                        <td>44</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Математика</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Математика</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Физика</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Физика</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Английский язык / Информатика (2)</td>
                        <td>35/23</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Литература</td>
                        <td>33</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Русский язык эл.</td>
                        <td>41</td>
                    </tr>
                    </tbody>

                </table>
            </div>

            <div className="schedule__wrapper">
                <h3 className={ day === 3 ? 'schedule__title schedule__title_today' : 'schedule__title'}> Среда </h3>

                <table className='table'>

                    <thead>
                    <tr>
                        <th> № </th>
                        <th> Урок </th>
                        <th> Кабинет </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>1</td>
                        <td/>
                        <td/>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Информатика (1) / Английский язык</td>
                        <td>23/44</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Литература</td>
                        <td>33</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Информатика (2) / Английский язык</td>
                        <td>23/44</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Физика</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Обществознание</td>
                        <td>43</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Информатика (весь класс)</td>
                        <td>23</td>
                    </tr>
                    </tbody>

                </table>
            </div>

            <div className="schedule__wrapper">
                <h3 className={ day === 4 ? 'schedule__title schedule__title_today' : 'schedule__title'}> Четверг </h3>

                <table className='table'>

                    <thead>
                    <tr>
                        <th> № </th>
                        <th> Урок </th>
                        <th> Кабинет </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Финансовая грамотность</td>
                        <td>43</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Русский язык</td>
                        <td>41</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Литература</td>
                        <td>33</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Физическая культура</td>
                        <td>с/з</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Математика</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>История</td>
                        <td>42</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Английский язык / Информатика (1)</td>
                        <td>44/23</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Проф. пробы в области физики</td>
                        <td>23</td>
                    </tr>
                    </tbody>

                </table>
            </div>

            <div className="schedule__wrapper">
                <h3 className={ day === 5 ? 'schedule__title schedule__title_today' : 'schedule__title'}> Пятница </h3>

                <table className='table'>

                    <thead>
                    <tr>
                        <th> № </th>
                        <th> Урок </th>
                        <th> Кабинет </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Проф. пробы в области математики</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Физическая культура</td>
                        <td>с/з</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>История</td>
                        <td>42</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Физика</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Физика</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Информатика (весь класс)</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Информатика (весь класс)</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>ОБЖ</td>
                        <td>33</td>
                    </tr>
                    </tbody>

                </table>
            </div>

            <div className="schedule__wrapper">
                <h3 className={ day === 6 ? 'schedule__title schedule__title_today' : 'schedule__title'}> Суббота </h3>

                <table className='table'>

                    <thead>
                    <tr>
                        <th> № </th>
                        <th> Урок </th>
                        <th> Кабинет </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>1</td>
                        <td/>
                        <td/>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Физическая культура</td>
                        <td>c/з</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Астрономия</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Математика</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>История</td>
                        <td>42</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Математика</td>
                        <td>22</td>
                    </tr>
                    </tbody>

                </table>
            </div>

        </>
    )
}

export default Schedule10;