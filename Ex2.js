const getDaysInMonth = (month, year) => {
    const result =  new Date(year, month, 0).getDate();
    console.log(result);
    return result;
}

getDaysInMonth(8, 2020)