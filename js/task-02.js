const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const parentList = document.querySelector('#ingredients');
const newListArray = [];

for (const ingredient of ingredients) {
  const newListItem = document.createElement("li");
  newListItem.textContent = ingredient;
  newListItem.classList.add("item")
  newListArray.push(newListItem);
  console.log(newListItem.classList);
  console.log(newListItem);
  console.log(newListArray);
};

parentList.append(...newListArray);