const calendarGrid = document.querySelector(".calendar-grid");

const frontImages = [
  "img/cadeaux1.png",
  "img/cadeaux2.png",
  "img/cadeaux3.png",
  "img/cadeaux4.png",
  "img/cadeaux5.png",
  "img/cadeaux6.png",
];

const backImages = [
  "img/uber.jpg",
  "img/gold.jpg",
  "img/horde.jpg",
  "img/gobelin.jpg",
  "img/powerlevel.jpg",
  "img/potGileon.jpg",
  "img/uber.jpg",
  "img/rune.jpg",
  "img/horde.jpg",
  "img/potGileon.jpg",
  "img/rune.jpg",
  "img/gold.jpg",
  "img/potGileon.jpg",
  "img/uber.jpg",
  "img/powerlevel.jpg",
  "img/rune.jpg",
  "img/horde.jpg",
  "img/powerlevel.jpg",
  "img/powerlevel.jpg",
  "img/horde.jpg",
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateCalendar(days) {
  const shuffledFrontImages = [...frontImages];
  const shuffledBackImages = [...backImages];
  shuffleArray(shuffledFrontImages);
  shuffleArray(shuffledBackImages);

  calendarGrid.innerHTML = "";
  for (let i = 1; i <= days; i++) {
    const calendarItem = document.createElement("div");
    calendarItem.className = "calendar-item";

    const number = document.createElement("span");
    number.className = "calendar-number";
    number.innerText = i;

    const front = document.createElement("div");
    front.className = "front";
    const frontImage =
      shuffledFrontImages[(i - 1) % shuffledFrontImages.length];
    front.innerHTML = `<img src="${frontImage}" alt="Image ${i}">`;

    const back = document.createElement("div");
    back.className = "back";
    const backImage = shuffledBackImages[(i - 1) % shuffledBackImages.length];
    back.innerHTML = `<img src="${backImage}" alt="Image Back ${i}">`;

    back.addEventListener("click", () => {
      calendarItem.classList.add("flipped-permanent");
    });

    calendarItem.appendChild(number);
    calendarItem.appendChild(front);
    calendarItem.appendChild(back);
    calendarGrid.appendChild(calendarItem);
  }
}

generateCalendar(20);
