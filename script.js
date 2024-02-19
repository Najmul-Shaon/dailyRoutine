document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("date");
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  const formattedDate = `${year}-${month}-${day}`;
  dateInput.value = formattedDate;

  // Function to update the time every second
  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros if the time component is less than 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("current-time").innerText = currentTime;
  }

  // Update time every second
  updateTime();
  setInterval(updateTime, 1000);
});
