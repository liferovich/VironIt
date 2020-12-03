
const createCalendar = (month, year) => {

    let mon = month - 1; // месяцы в JS идут от 0 до 11
    let date = new Date(year, mon); //1-е число месяца
    // console.log(d);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // пробелы для первого ряда
    for (let i = 0; i < getDay(date); i++) {
        table += '<td></td>';
    }

    // ячейки календаря с датами
    while (date.getMonth() == mon) {
        table += '<td>' + date.getDate() + '</td>';

        if (getDay(date) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        date.setDate(date.getDate() + 1);
    }

    // пробелы для последнего ряда
    if (getDay(date) != 0) {
        for (let i = getDay(date); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    let elem = document.getElementById("calendar");
    elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
}

createCalendar(12, 2020);
