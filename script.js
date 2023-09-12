// JavaScript to fetch and display current day of the week and UTC time
document.addEventListener("DOMContentLoaded", function() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = new Date().getDay();
    const currentUTCTime = new Date().getTime();

    const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const utcElement = document.querySelector('[data-testid="currentUTCTime"]');

    dayElement.textContent = daysOfWeek[currentDay];
    utcElement.textContent = currentUTCTime;
});
