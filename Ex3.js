const isWeekend = (day, month, year) => {
    const weekday = new Date(year, month - 1, day).getDay();
    const result = weekday % 6 === 0;
    console.log(result);
    return result;
}

isWeekend(7,4,2024)