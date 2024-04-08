let dt = new Date();

const startOfWeek = date => {
    const weekday = date.getDay();
    const diff = weekday === 0 ? 6 : weekday - 1;
    const result = new Date(date.setDate(date.getDate() - diff));
    console.log(result.toString());
    return result;
}

startOfWeek(dt);