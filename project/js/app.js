const calendar = document.getElementById("calendar");

const createCalendar = (month, year) => {

    const mon = month - 1;
    const date = new Date(year, mon); //1-е число месяца

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    for (let i = 0; i < getDayWeek(date); i++) {
        table += '<td></td>';
    }

    while (date.getMonth() == mon) {
        table += '<td>' + date.getDate() + '</td>';

        if (getDayWeek(date) % 7 == 6) {
            table += '</tr><tr>';
        }

        date.setDate(date.getDate() + 1);
    }

    if (getDayWeek(date) != 0) {
        for (let i = getDayWeek(date); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';

    calendar.innerHTML = table;
}

function getDayWeek(date) {
    let day = date.getDay();
    if (day == 0) { // воскресенье 
        day = 7 
    }; 
    return day - 1;
}

const button = document.getElementById("btnNewDate");
button.onclick = () => {
    let monthInput = prompt("Введите номер месяца");
    let yearInput = prompt("Введите год");
    if (monthInput && yearInput) {
        createCalendar(monthInput, yearInput);
    } else {
        calendar.innerHTML = 'неверные данные';
    }
}
