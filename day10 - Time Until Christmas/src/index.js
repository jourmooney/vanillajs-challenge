const clockTitle = document.querySelector(".js-clock");

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  let christmas;
  if (month === 12 && day > 25) {
    christmas = new Date(`${year + 1}-12-25`);
  } else {
    christmas = new Date(`${year}-12-25`);
  }
  const diffDate = Math.abs(christmas - date);
  const ddayDays = Math.floor(Math.floor(diffDate / 1000) / 60 / 60 / 24);
  const ddayHours = String(23 - date.getHours()).padStart(2, "0");
  const ddayMinutes = String(59 - date.getMinutes()).padStart(2, "0");
  const ddaySeconds = String(59 - date.getSeconds()).padStart(2, "0");

  if (month === 12 && day === 25) {
    clockTitle.innerText = "Today is Christmas!!!";
  } else {
    clockTitle.innerText = `${ddayDays}d ${ddayHours}h ${ddayMinutes}m ${ddaySeconds}s`;
  }
}
getDate();
setInterval(getDate, 1000);
