const getDaysInMonth = (month: number, year: number) => {
    const result : number =  new Date(year, month, 0).getDate();
    console.log(result);
    return result;
}

getDaysInMonth(8, 2020)