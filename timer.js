   // Timer

   function checkZero(int) {
    if (int <= 0) {
        int = '00';
    } else if (int < 10) {
        int = '0' + int;
    } else {
        int = int;
    }
    return int;
}

let date = new Date(),
    deadline = checkZero(date.getFullYear()) + '-' + checkZero(date.getMonth() + 1) + '-' + checkZero(date.getDate() + 1);

function getTimeRemaning(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
    
    return {
        'total' : t,
        'hours' : checkZero(hours),
        'minutes' : checkZero(minutes),
        'seconds' : checkZero(seconds)
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
    
    function updateClock() {
        let t = getTimeRemaning(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

        if (t.total < 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('timer', deadline);
