let day1:any = new Date();

const endOfMonth = (date: Date) => {
    const month = date.getMonth();
    const result = new Date(date.getFullYear(), month + 1, 0);
    console.log(result.toString());
    return result;
}

endOfMonth(day1);