//setting intial timer values
let timer;
let isRunning = false;
let [hours, min, sec, millisec] = [0,0,0,0]; //let hours=0 ,let min=0 ,let sec=0 , let millisec=0


//Accessing the html elements
let display = document.querySelector(".S-display");
let start = document.querySelector(".start");
let stopele = document.querySelector(".stop");
let reset = document.querySelector(".reset");
//additional functionality u can add ie save time at specific points


// ❤️ adding the events (eventListeners) to the Buttons
start.addEventListener("click", startTimer);
stopele.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimerN);
//adding the events to save button

// function to start the Timer
function startTimer() {
    if (!isRunning) {
      isRunning = true;
      timer = setInterval(updateTimer, 10);
      
    }
  }
// function to stop the Timer 
function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
    
}

//function to reset the timer
function resetTimerN() {
    clearInterval(timer);
    isRunning = false;
    [hours, min, sec, millisec] = [0, 0, 0, 0];
    displayTimer();
    
}
//function caliculate the timer
function updateTimer() {
    millisec = millisec + 10;
    if(millisec >= 1000) {
        millisec = 0;
        sec++;
        if(sec == 60) {
            sec =0;
            min++;
            if(min == 60) {
                min = 0;
                hours ++;
            }
        }
    }
//updating the display
displayTimer();

}

//function to display the timer in ui
function displayTimer() {
    display.textContent = `${String(hours).padStart(2,0)}:${String(min).padStart(
     2,
     0
    )}:${String(sec).padStart(2,0)}:${String(millisec /10).padStart(2, 0)}`;
}


