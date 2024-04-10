const checkTime = (i: any) => {
    if (i < 10) { 
        i = "0" + i
    };  
    return i;
}

const countDayLeft = () => {
    let date: any = new Date();
    const newYear: any = new Date(date.getFullYear() + 1, 0, 1);
    const diff = newYear - date;
    let seconds = Math.floor((diff/1000) % 60 );
    let minutes = Math.floor((diff/1000/60) % 60 );
    let hours = Math.floor((diff/(1000*60*60)) % 24 );
    let days = Math.floor(diff/(1000*60*60*24) );
    console.log("    "+ days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds");
}

console.log('Countdown to new year: ')
setInterval(countDayLeft, 1000);
