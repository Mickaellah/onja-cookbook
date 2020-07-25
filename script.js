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




// All three event listners for the two add buttons and one submit button.
addIngredients.addEventListener('click', handleClick);
addSteps.addEventListener('click', handleStepButton);
submitButton.addEventListener('submit', handleSubmit);




