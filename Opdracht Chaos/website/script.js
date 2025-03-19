let box = document.getElementById("playground");

window.onload = function() {
    let firstbox = document.createElement("div");
    firstbox.style.height = "200px";
    firstbox.style.width = "200px";
    firstbox.style.backgroundColor = "red";  // Fixed incorrect property
    firstbox.style.position = "relative";

    firstbox.style.left = "50%";
    firstbox.style.top = "50%";
    firstbox.style.transform = "translate(-50%, -50%)"; 

    document.getElementById("playground").appendChild(firstbox);
};
box.addEventListener("click", function(event)
{
    switch(Math.floor(Math.random() * 11)) 
    {
        case 1:
            addImg(event);
            break;

        case 2:
            randomColorBackground();
            break;
        
        case 3:
            randomColorbox()
            break;
    
        case 4:
            randomRotate();
            break;

        default:
            break;
    }
});

function addImg(event)
{
    let meme = document.createElement("img");

    let randomMemeNumber = Math.floor(Math.random() * 6) + 1;
    meme.src = `images/meme${randomMemeNumber}.jpg`;

    let randomSize = Math.floor(Math.random() * 200) + 50; // Random size between 50px-100px
    meme.style.width = `${randomSize}px`;
    meme.style.height = `${randomSize}px`;

    meme.style.position = "absolute";

    meme.style.left = `${event.pageX}px`;
    meme.style.top = `${event.pageY}px`;

    document.getElementById("playground").appendChild(meme);
}

function randomColorBackground()
{
    // Change background color to a random color
    box.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function jebBox()
{

}

function randomColorbox()
{
    // Get all divs on the playground
    let divs = playground.querySelectorAll("div");

    // Ensure there are divs to pick from
    if (divs.length === 0) {
        console.log("No divs found on the page.");
        return;
    }

    // Pick a random div
    let randomIndex = Math.floor(Math.random() * divs.length);
    let randomDiv = divs[randomIndex];

    // Change background color to a random color
    randomDiv.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
    console.log("Random div picked:", randomDiv);
}

function randomRotate()
{
    // Get all divs on the playground
    let elements = document.getElementsByTagName('*');

    // Ensure there are divs to pick from
    if (elements.length === 0) {
        console.log("No divs found on the page.");
        return;
    }

    // Pick a random div
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    rotateElement(randomElement);
}

function rotateElement(element) {
    if (!element) {
        console.error("Element reference is invalid.");
        return;
    }

    let angle = 0; // Starting angle for the element

    // Function to continuously rotate the element
    function rotate() {
        angle += 1; // Increase angle (adjust for speed)
        element.style.transform = `rotate(${angle}deg)`;

        requestAnimationFrame(rotate); // Keep rotating
    }

    rotate(); // Start rotation for the given element
}