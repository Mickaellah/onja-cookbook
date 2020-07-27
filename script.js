// console.log('Cool');

// Several variable that are for grabbing all the elements from the html file that might be used to build this project.
const form = document.querySelector('form');
const ingredientsList = document.querySelector("#ingredientsList");
const stepsList = document.querySelector("#stepsList");
const addIngredients = document.querySelector('.add-ingredients-button');
const addSteps = document.querySelector('.add-step-button');
const submitButton = document.querySelector('.submitbttn');
const ingredientsButton = document.querySelector('.ingredients-button-container');
const stepsButton = document.querySelector('.step-button-container');
const recipes = [];


// A function for the add ingredients button, which contains the html element for the new ingredient to be created.
const handleClick = (event) => {
    const number = ingredientsList.children.length + 1;
    const inputHTML = `
    <li>
        <input id="ingredient${number}" type="text" id="ingredients" name="ingredients"><br>
    </li>
    `;
    ingredientsList.insertAdjacentHTML('beforeend', inputHTML);
    console.log(ingredientsList);

}


// A function for the add steps button, which contains the html element for the new step to be created.
const handleStepButton = (event) => {
    const stepHTML = `
    <li>
        <input type="text" id="steps" name="steps"><br>
    </li>
    `;
    stepsList.insertAdjacentHTML('beforeend', stepHTML);
    console.log(stepsList);

}

// A function for the submit button to execute an object of the recipe.
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit', event);
    const form = event.currentTarget;
    const {title, picture, author, difficulty, timing} = form;

    const ingredients = [];
    for (let i = 0; i < ingredientsList.children.length; i++) {
        ingredients.push(ingredientsList.children[i].children[0].value);
    }
    console.log(ingredients);

    const steps = [];
    for (stepChildren of stepsList.children) {
        steps.push(stepChildren.children[0].value);
    }
    console.log(steps);

    const recipe = {
        title: title.value,
        picture: picture.value,
        author: author.value,
        difficulty: difficulty.value,
        timing: timing.value,
        ingredients: ingredients,
        steps: steps,
    };
    console.log(recipe);
    recipes.push(recipe);
};




// All three event listners for the two add buttons and one submit button.
addIngredients.addEventListener('click', handleClick);
addSteps.addEventListener('click', handleStepButton);
form.addEventListener('submit', handleSubmit);

