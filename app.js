const ingredientContainer = document.querySelector(".ingredient-container");
const buttons = document.querySelectorAll("button");

const makeCoffee = (name) => {
  ingredientContainer.className = `ingredient-container fill-${name}`;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    makeCoffee(button.className);
  });
});
