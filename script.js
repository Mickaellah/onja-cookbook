console.log('Cool');

const form = document.querySelector('form');
// const addIngredients = document.querySelector('#ingredients');
// const addSteps = document.querySelector('#steps');
const addIngredients = document.querySelector('.add-ingredients-button');
const addSteps = document.querySelector('.add-step-button');
const submitButton = document.querySelector('.submitbttn');
const ingredientsButton = document.querySelector('.ingredients-button-container');
const stepsButton = document.querySelector('.step-button-container');

const handleClick = (event) => {
    event.preventDefault();
    const inputHTML = `
    <div>
        <input type="text"><br>
    <div>
    `;
    event.target = inputHTML;
    ingredientsButton.insertAdjacentHTML('afterbegin', inputHTML);
    console.log(ingredientsButton);

}

const handleStepButton = (event) => {
    event.preventDefault();
    const stepHTML = `
    <div>
        <input type="text"><br>
    <div>
    `;
    event.target = stepHTML;
    stepsButton.insertAdjacentHTML('afterbegin', stepHTML);
    console.log(stepsButton);

}


addIngredients.addEventListener('click', handleClick);
addSteps.addEventListener('click', handleStepButton);




