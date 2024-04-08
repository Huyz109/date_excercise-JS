const convertSecondToString = (seconds) => {
    const hour = Math.floor(seconds / 3600);
    const minute = Math.floor((seconds % 3600) / 60)
    const second = seconds - hour * 3600 - minute * 60;
    const result = [hour, minute, second].join(':');
    return result;
}

const addTime = (timeString, add = 0) => {
    const timeArray = timeString.split(':');
    const totalSeconds = Number(timeArray[0]) * 3600 + Number(timeArray[1]) * 60 + Number(timeArray[2]);
    const result = convertSecondToString(totalSeconds + add);
    console.log(result);
    return result;
}

addTime('9:20:56')