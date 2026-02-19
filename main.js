const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

// Adding 0 to the num if the num less than 10
function formatTime(time) {
  return time.toString().padStart(2, "0");
}
//Clock logic
function clock(){
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    //check if am or pm
    const ampm = hour >= 12 ? "PM" : "AM";
    
    //24h -> 12H conversion 
    // if the result is 0 , use 12 instead
    hour = hour % 12 ||12;

    //Adding the Time to HTML
    hourEl.textContent = formatTime(hour);
    minuteEl.textContent = formatTime(minute);
    secondEl.textContent = formatTime(seconds);

    //To show if AM or PM 
    ampmEl.textContent = ampm;

}

//Call the funtion for every 1000ms (1second)
setInterval(clock,1000);