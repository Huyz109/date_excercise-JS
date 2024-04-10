let dt = new Date();

const startOfWeek = (date: Date) => {
    const weekday = date.getDay();
    const diff = weekday === 0 ? 6 : weekday - 1;
    const result = new Date(date.setDate(date.getDate() - diff)).toLocaleDateString('en-GB');
    console.log(result);
    return result;
}

startOfWeek(dt);