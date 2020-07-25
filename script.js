console.log('Cool');

// Several variable that are for grabbing all the elements from the html file that might be used to build this project.
const form = document.querySelector('form');
const addIngredients = document.querySelector('.add-ingredients-button');
const addSteps = document.querySelector('.add-step-button');
const submitButton = document.querySelector('.submitbttn');
const ingredientsButton = document.querySelector('.ingredients-button-container');
const stepsButton = document.querySelector('.step-button-container');


// A function for the add ingredients button, which contains the html element for the new ingredient to be created.
const handleClick = (event) => {
    event.preventDefault();
    const inputHTML = `
    <div>
        <input type="text" id="ingredients" name="ingredients"><br>
    <div>
    `;
    event.target = inputHTML;
    ingredientsButton.insertAdjacentHTML('afterbegin', inputHTML);
    console.log(ingredientsButton);

}


// A function for the add steps button, which contains the html element for the new step to be created.
const handleStepButton = (event) => {
    event.preventDefault();
    const stepHTML = `
    <div>
        <input type="text" id="steps" name="steps"><br>
    <div>
    `;
    event.target = stepHTML;
    stepsButton.insertAdjacentHTML('afterbegin', stepHTML);
    console.log(stepsButton);

}

// A function for the submit button to execute an object of the recipe.
const handleSubmit = (event) => {
    event.preventDefault;
    const forms = event.target;
    const addIngredients = document.querySelector('#ingredients');
    const addSteps = document.querySelector('#steps');

    const recipe = Array.from(forms).map(ele1 => {
        const obj = {};
        Array.from(ele1.querySelectorAll('[name]')).forEach(ele2 => {
            obj[ele2.getAttribute('name')] = ele2.value;
        });
        return obj;
    });
    console.log(recipe);
};




// All three event listners for the two add buttons and one submit button.
addIngredients.addEventListener('click', handleClick);
addSteps.addEventListener('click', handleStepButton);
submitButton.addEventListener('submit', handleSubmit);




