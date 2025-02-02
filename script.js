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
        document.getElementById("timerDisplay").textContent = `Time Left: ${minutesLeft} min ${secondsLeft} sec`

        if (currentTime <= 0) {
            clearInterval(countdownInterval);
            alert("Time's Up! It has reached peak egg-cellence");
            document.getElementById("timerDisplay").textContent = `Times's Up!`;
        }    
        currentTime--;
    }, 1000); //updates every second
}