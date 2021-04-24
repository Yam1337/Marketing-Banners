import anime from "./anime.es.js";

anime({
  targets: "div.offer",
  keyframes: [
    { translateX: -157, delay: 2000, duration: 800 },
    { translateX: -314, delay: 2000, duration: 800 },
    { translateX: 0, delay: 2000, duration: 800 },
  ],
  easing: "easeInOutExpo",
  loop: true,
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const myFunction = (data) => {
  const itemCount = data.offers.length - 1;
  const randomNumbers = [];
  while (randomNumbers.length < 3) {
    let myRandom = getRndInteger(0, itemCount);
    if (!randomNumbers.includes(myRandom)) {
      randomNumbers.push(myRandom);
    }
  }
  for (let i = 0; i < randomNumbers.length; i++) {
    let myItemImg = document.getElementById(`item${i}img`);
    let myItemName = document.getElementById(`item${i}name`);
    let myItemPrice = document.getElementById(`item${i}price`);
    myItemImg.innerHTML = `<img class="offerImg" alt="${
      data.offers[randomNumbers[i]].name
    }" src="${data.offers[randomNumbers[i]].imgURL}" />`;
    myItemName.innerHTML = `${data.offers[randomNumbers[i]].name}`;
    myItemPrice.innerHTML = `${
      data.offers[randomNumbers[i]].price +
      " " +
      data.offers[randomNumbers[i]].currency
    }`;
  }
};

async function fetchData() {
  await fetch("http://rekrutacjartb.pl/developer/banner.json")
    .then((response) => response.json())
    .then((data) => myFunction(data));
}

fetchData();
