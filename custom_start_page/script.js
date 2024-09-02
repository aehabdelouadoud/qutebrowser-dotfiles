const quotes = [
  {
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.",
    author: "Steve Jobs",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    text: "The people who are crazy enough to think they can change the world are the ones who do.",
    author: "Steve Jobs",
  },
];

function performSearch() {
  var query = document.getElementById("search-input").value;
  var searchUrl = "https://duckduckgo.com/?q=" + encodeURIComponent(query);
  window.location.href = searchUrl;
}

document
  .getElementById("search-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      performSearch();
    }
  });

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strTime = `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("time").textContent = strTime;
}

function calculateAge() {
  const birthDate = new Date("2000-01-01T00:00:00"); // Put your birthday here. YYYY-MM-DDT00:00:00 ex 2000-01-01T00:00:00
  const now = new Date();
  const totalMilliseconds = now - birthDate;

  const millisecondsInSecond = 1000;
  const secondsInMinute = 60;
  const minutesInHour = 60;
  const hoursInDay = 24;
  const daysInMonth = 30.44; // Average days per month
  const daysInYear = 365.25; // Average days per year

  let totalSeconds = Math.floor(totalMilliseconds / millisecondsInSecond);
  let totalMinutes = Math.floor(totalSeconds / secondsInMinute);
  let totalHours = Math.floor(totalMinutes / minutesInHour);
  let totalDays = Math.floor(totalHours / hoursInDay);
  let totalMonths = Math.floor(totalDays / daysInMonth);
  let totalYears = Math.floor(totalMonths / 12);

  const seconds = String(Math.floor(totalSeconds % secondsInMinute)).padStart(
    2,
    "0",
  );
  const minutes = String(Math.floor(totalMinutes % minutesInHour)).padStart(
    2,
    "0",
  );
  const hours = String(Math.floor(totalHours % hoursInDay)).padStart(2, "0");
  const days = String(Math.floor(totalDays % daysInMonth)).padStart(2, "0");
  const months = String(totalMonths % 12).padStart(2, "0");
  const years = totalYears;

  document.getElementById("age").textContent =
    `Me: ${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quote").textContent = quote.text;
  document.getElementById("quote-owner").textContent = `- ${quote.author}`;
}

// Update time and age every second
setInterval(updateTime, 1000);
setInterval(calculateAge, 1000);

// Initial update
updateTime();
calculateAge();

// Display a random quote on page load
displayRandomQuote();
