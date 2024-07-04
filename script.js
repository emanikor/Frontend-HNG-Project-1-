// Display current time in UTC
function displayCurrentTime() {
    const now = new Date();
    const time = now.toUTCString().split(' ')[4];
    document.getElementById('time').textContent = time;
}

// Display current day of the week
function displayCurrentDay() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getUTCDay()];
    document.getElementById('day').textContent = day;
}

// Call the functions
displayCurrentTime();
displayCurrentDay();

// Update time every second
setInterval(displayCurrentTime, 1000);