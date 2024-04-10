const calculate_age = (birth: Date) => {
    const today = new Date();
    let yearDiff = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDay() - birth.getDay();
    const result = monthDiff >= 0 && dayDiff > 0 ? yearDiff : --yearDiff;
    console.log(result);
    return result;
}

calculate_age(new Date(1982, 11, 4, 0));