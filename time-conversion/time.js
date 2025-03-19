

const time = '12:01:00PM';


function timeConversion (timeString) {
    const modifire = timeString.slice(timeString.length - 2,timeString.length);
    const time = timeString.slice(0,timeString.length - 2);
    let [hour,minuts,secoend] = time.split(":");
    
    if(modifire === 'PM' && hour !== '12') {
        hour = String(Number(hour) + 12);
    }else if (modifire === "AM" && hour === '12') {
        hour = "00";
    }
    return `${hour}:${minuts}:${secoend}`
}

const result =  timeConversion(time);

console.log(result)