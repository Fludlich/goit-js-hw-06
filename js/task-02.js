const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul')
list.classList.add('item')

function getLi (ingredients){
  for (const ingredient of ingredients) {
    console.log(ingredient)

    const item = document.createElement("li");
    item.textContent = [ingredient];
    list.append(item);
    item.classList.add('item')
  }

}
getLi(ingredients)