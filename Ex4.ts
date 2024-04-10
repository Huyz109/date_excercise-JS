const getMinutes = (hours: number, minutes: number) => {
    let result: any
    if (hours < 0 || hours > 23 || minutes > 60 || minutes < 0) {
        result = undefined;
    }
    else {
        result = hours * 60 + minutes;
    }
    console.log(result);
    return result;
}

getMinutes(10,50);