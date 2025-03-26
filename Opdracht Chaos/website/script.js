let box = document.getElementById("playground");

window.onload = function() {
    let firstbox = document.createElement("div");
    firstbox.style.height = "200px";
    firstbox.style.width = "200px";
    firstbox.style.backgroundColor = "red"; 
    firstbox.style.position = "relative";

    firstbox.style.left = "50%";
    firstbox.style.top = "50%";
    firstbox.style.transform = "translate(-50%, -50%)"; 

    document.getElementById("playground").appendChild(firstbox);
};

box.addEventListener("click", function(event)
{
    switch(Math.floor(Math.random() * 5 + 1)) 
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

        case 5:
            addGeometry();
            break;
    }
});

function addImg(event)
{
    let meme = document.createElement("img");

    let randomMemeNumber = Math.floor(Math.random() * 6) + 1;
    meme.src = `images/meme${randomMemeNumber}.jpg`;

    let randomSize = Math.floor(Math.random() * 200) + 50; // Random size between 50px-200px
    meme.style.width = `${randomSize}px`;
    meme.style.height = `${randomSize}px`;

    meme.style.position = "absolute";

    meme.style.left = `${event.pageX}px`;
    meme.style.top = `${event.pageY}px`;

    document.getElementById("playground").appendChild(meme);
}

function randomColorBackground()
{
    box.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function addGeometry()
{
    switch(Math.floor(Math.random() * 3 + 1))
    {
    case 1:
        let square = document.createElement("div");
        let squareSize = `${Math.floor(Math.random() * 300 + 10)}px`;

        square.style.height = squareSize;
        square.style.width = squareSize;
        square.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        square.style.position = "absolute";

        square.style.left = `${Math.random() * 100}%`;
        square.style.top = `${Math.random() * 100}%`;
        square.style.transform = "translate(-50%, -50%)";

        box.appendChild(square);
        break;

    case 2:
        let circle = document.createElement("div");
        let circleSize = `${Math.floor(Math.random() * 300 + 10)}px`;

        circle.style.height = circleSize;
        circle.style.width = circleSize;
        circle.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        circle.style.position = "absolute";

        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.transform = "translate(-50%, -50%)";
        circle.style.borderRadius = "50%";

        box.appendChild(circle);
        break;

    case 3:
        let triangle = document.createElement("div");
        let size = Math.floor(Math.random() * 300 + 10);

        triangle.style.width = "0";
        triangle.style.height = "0";
        triangle.style.borderLeft = `${size / 2}px solid transparent`;
        triangle.style.borderRight = `${size / 2}px solid transparent`;
        triangle.style.borderBottom = `${size}px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
        triangle.style.position = "absolute";

        triangle.style.left = `${Math.random() * 100}%`;
        triangle.style.top = `${Math.random() * 100}%`;
        triangle.style.transform = "translate(-50%, -50%)";

        box.appendChild(triangle);
        break;
    }
}

function randomColorbox()
{
    let divs = playground.querySelectorAll("div");

    if (divs.length === 0) {
        console.log("No divs found on the page.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * divs.length);
    let randomDiv = divs[randomIndex];

    randomDiv.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
    console.log("Random div picked:", randomDiv);
}

function randomRotate()
{
    let elements = document.getElementsByTagName('*');

    if (elements.length === 0) {
        console.log("No divs found on the page.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    rotateElement(randomElement);
}

function rotateElement(element) {
    if (!element) {
        console.error("Element reference is invalid.");
        return;
    }

    let angle = 0; 

    function rotate() {
        angle += 1; 
        element.style.transform = `rotate(${angle}deg)`;

        requestAnimationFrame(rotate); 
    }

    rotate();
}