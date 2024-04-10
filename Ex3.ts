const isWeekend = (day: number, month: number, year: number) => {
    const weekday: number = new Date(year, month - 1, day).getDay();
    const result: boolean = weekday % 6 === 0;
    console.log(result);
    return result;
}

isWeekend(7,4,2024)