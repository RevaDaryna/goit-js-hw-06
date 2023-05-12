const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listContainerEl = document.querySelector('#ingredients');

const ingredient = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li')
  ingredientItem.append(ingredient)
  return ingredientItem 
})

listContainerEl.append(...ingredient)
console.log(listContainerEl)