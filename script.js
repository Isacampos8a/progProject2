let countdownInterval;

function startTimer() {
    const minutes = document.getElementById("inputTimer").value;
    const targetTime = minutes * 60;
    let currentTime = targetTime;



    //clears the countdown
    if (countdownInterval){
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(() => {
        const minutesLeft = Math.floor(currentTime / 60);
        const secondsLeft = currentTime % 60;
        console.log(`Countdown: {minutesLeft}min {secondsLeft}sec`);

        if (currentTime <= 0) {
            clearTnterval(countdownInterval);
            alert("Time's Up! It has reached peak egg-cellence")
        }

        currentTime--;
    },1000);


}