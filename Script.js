// javascript 
document.addEventListener("DOMContentLoaded", function() {
    const updateTimeAndDay = () => {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const day = now.toLocaleString('en-US', { weekday: 'long' });

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current Time (UTC): ${utcTime}`;
        document.querySelector('[data-testid="currentDay"]').textContent = `Current Day: ${day}`;
    };

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
