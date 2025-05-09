/*
Greeting/welcome statement that change dynamically each 4
*/

const greetings = ["Welcome to the best dining experience!", "Enjoy delicious meals every day!", "Quality food, amazing taste!", "Your satisfaction is our priority!"];
let index = 0;
setInterval(() => {
    document.getElementById('greeting').textContent = greetings[index++ % greetings.length];
}, 4000);

/* Apply the validation for each input (make sure all inputs are required).*/ 
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert("All fields are required. Please fill out all fields.");
            return; 
        }

        const successMessage = document.createElement('p');
        successMessage.textContent = "Form submitted successfully!";
        successMessage.style.color = "green";        
        successMessage.style.fontWeight = "bold";        
        
        form.insertAdjacentElement('afterend', successMessage);
        setTimeout(function() {
            location.reload();
        }, 2000); 
    });
});

/*
Change all inputs text to uppercase (onchange).

Change all inputs text color (onchange).
*/ 
function inputChange(element) {
    element.value = element.value.toUpperCase();
    element.style.color="#bc1823";
}
/*if the user hover on price the font-size of price will increase.*/
document.addEventListener('DOMContentLoaded', function() {

    const priceElements = document.querySelectorAll('.item h5.price');


    priceElements.forEach(function(element) {
        element.addEventListener('mouseover', function() {
            element.style.fontSize = '20px'; 
        });

        element.addEventListener('mouseout', function() {
            element.style.fontSize = '15px'; 
        });
    });
});

/*If the user clicks on the buy/choose button, change the image of the meal to this image/ any related image.*/
function changeImage(imageId, newImageSrc) {
    const mealImage = document.getElementById(imageId); 
    mealImage.src = newImageSrc; 
}