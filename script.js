const uploadDogElement = document.getElementById("uploadDog");
const API = "https://dog.ceo/api/breeds/image/random";


document.getElementById("like").addEventListener("click", () => rankingDogs("+"));
document.getElementById("dislike").addEventListener("click", () => rankingDogs("-"));

document.getElementById("skip").addEventListener("click", newDog);

const containerLikeDogs = document.getElementById("containerLikeDogs");
const containerDislikeDogs = document.getElementById("containerDislikeDogs");

containerLikeDogs.classList.add("hidden");
containerDislikeDogs.classList.add("hidden");

async function newDog() {
  uploadDogElement.classList.toggle("hidden", true)
  const res = await fetch(API);
  const resJson = await res.json();
  uploadDogElement.src = resJson.message;
  uploadDogElement.classList.toggle("hidden", false)
}

function rankingDogs(ranking) {
  const newImage = document.createElement("img");
  newImage.src = uploadDogElement.src;

  if (ranking === "+") {
    containerLikeDogs.appendChild(newImage)
  } else {
    containerDislikeDogs.appendChild(newImage)
  }

  newDog()
}

newDog()

