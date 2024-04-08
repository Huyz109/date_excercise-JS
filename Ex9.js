let dt = new Date();

const countDayLeft = (date) => {
    const newYear = new Date(date.getFullYear() + 1, 0, 1);
    const diff = newYear - date;
    const oneDay = 1000 * 60 * 60 * 24;
    const result = Math.floor(diff / oneDay);
    console.log(result);
    return result;
}

countDayLeft(dt);
