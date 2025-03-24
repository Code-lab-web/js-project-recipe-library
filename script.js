const allButton = document.getElementById("all")
const italyButton = document.getElementById("italy")
const usaButton = document.getElementById("usa")
const chinaButton = document.getElementById("china")
const sortByTimeAscButton = document.getElementById("highToLow")
const sortByTimeDescButton = document.getElementById("lowToHigh")
const recipesSection = document.getElementById("recipes")
const messagesSection = document.getElementById("messages")

// Function to remove active class from all buttons in a group
const removeActiveClass = (buttons) => {
  buttons.forEach(button => button.classList.remove("active"))
}

const recipe =   {
  name: "Baked Chicken",
  cuisineType: ["American"],
  ingredients: [
    "6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
    "1/2 teaspoon coarse salt",
    "1/2 teaspoon Mrs. Dash seasoning",
    "1/4 teaspoon freshly ground black pepper",
  ],
  source: "Martha Stewart",
  totalTime: 90,
  url: "http://www.marthastewart.com/318981/baked-chicken",
  image: "./recipe-images/baked-chicken.jpg",
}

const updateHTML = (filter, button, buttonGroup) => {
  removeActiveClass(buttonGroup) // Remove active class from all buttons
  button.classList.add("active") // Add active class to clicked button

  console.log(filter)
  let message = ""
  if (filter === "chinese") {
    message = "You chose Chinese"
  } else if (filter === "all") {
    message = "You eat everything, maybe liver then?"
  } else if (filter === "american") {
    message = "Cranberry sauce?"
  } else if (filter === "italian") {
    message = "Are you a pasta or a pizza person?"
  } else if (filter === "ascending") {
    message = `You in a hurry mate?`
  } else {
    message = `You want to impress on someone?`
  }
  messagesSection.innerHTML += `<p>${message}</p>`
}

// allButton.addEventListener("click", () => {
//   updateHTML("all")
// })

// italyButton.addEventListener("click", () => {
//   updateHTML("italian")
// })

// usaButton.addEventListener("click", () => {
//   updateHTML("american")
// })

// chinaButton.addEventListener("click", () => {
//   updateHTML("chinese")
// })

// sortByTimeAscButton.addEventListener("click", () => {
//   updateHTML("ascending")
// })
// sortByTimeDescButton.addEventListener("click", () => {
//   updateHTML("descending")
// })

// ✅ Event Listeners for Cuisine Filters
const filterButtons = [allButton, italyButton, usaButton, chinaButton]
allButton.addEventListener("click", () => updateHTML("all", allButton, filterButtons))
italyButton.addEventListener("click", () => updateHTML("italian", italyButton, filterButtons))
usaButton.addEventListener("click", () => updateHTML("american", usaButton, filterButtons))
chinaButton.addEventListener("click", () => updateHTML("chinese", chinaButton, filterButtons))

// ✅ Event Listeners for Sorting Buttons
const sortButtons = [sortByTimeAscButton, sortByTimeDescButton]
sortByTimeAscButton.addEventListener("click", () => updateHTML("ascending", sortByTimeAscButton, sortButtons))
sortByTimeDescButton.addEventListener("click", () => updateHTML("descending", sortByTimeDescButton, sortButtons))