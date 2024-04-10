const countDayPass = () => {
    const now: any = new Date();
    const start: any = new Date(now.getFullYear(), 0, 1);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const result = Math.floor(diff / oneDay);
    console.log(result);
    return result;
}

countDayPass();