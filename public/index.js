function calculateChristmasCountdown(){
    
    var now = new Date();

    var currentMonth = (now.getMonth() + 1);

    var currentDay = now.getDate();

    var nextChristmasYear = now.getFullYear();
    if(currentMonth == 12 && currentDay > 25){
        nextChristmasYear = nextChristmasYear + 1;
    }

    var nextChristmasDate = nextChristmasYear + '-12-24T00:00:00.000Z';
    var christmasDay = new Date(nextChristmasDate);

    var diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);

    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
        days = Math.floor(diffSeconds / (3600*24));
        diffSeconds  -= days * 3600 * 24;
        hours   = Math.floor(diffSeconds / 3600);
        diffSeconds  -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds  -= minutes * 60;
        seconds = diffSeconds;
    }

    document.getElementById('days').innerHTML = days + ' Dni';
    document.getElementById('hours').innerHTML = hours + ' Godzin';
    document.getElementById('minutes').innerHTML = minutes + ' Minut';
    document.getElementById('seconds').innerHTML = seconds + ' Sekund';

    setTimeout(calculateChristmasCountdown, 1000);
}

calculateChristmasCountdown();

window.addEventListener('load', () => {
    registerSW();
});

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./serviceWorker.js');
        } catch (e) {
            console.log('Serviceworker registration failed');
        }
    }
}