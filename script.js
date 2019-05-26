var button = document.getElementById("button");
var mustDo = document.getElementById("mustDo");
var input = document.getElementById("input");
var form = document.getElementById("from");
var clear = document.getElementById("clear");
var select = document.getElementById("select");
var whyNot = document.getElementById("whyNot");
var shopping = document.getElementById("shopping");

button.onclick = buttonclick;
clear.onclick = clearclick;

function buttonclick() {
    var place = select.value;

    var box = document.createElement("div");
    var newButton = document.createElement("button");
    var newInput = document.createElement("p");
    newButton.classList.add("toggle");
    newInput.classList.add("text");

    newInput.appendChild(document.createTextNode(input.value));

    newButton.appendChild(document.createTextNode("Press to complete task!"));
    box.appendChild(newInput) + box.appendChild(newButton);

    if(place == "mustdo"){
        mustDo.appendChild(box);
        newInput.style.textTransform = "capitalize";

        input.value = "";
    }

    if(place == "whynot"){
        whyNot.appendChild(box);
        newInput.style.textTransform = "capitalize";
    
        input.value = "";
    }

    if(place == "shop"){
        shopping.appendChild(box);
        newInput.style.textTransform = "capitalize";
        
        input.value = "";
    }

    newInput.addEventListener("click", inputclick);
    newButton.addEventListener("click", toggleclick);

    function inputclick() {
        box.removeChild(newInput);
        box.removeChild(newButton);
        console.log("I was clicked");
    }
    function toggleclick() {
        var currentClass = newButton.getAttribute("class");
        if (currentClass == "toggle") {
            newButton.setAttribute("class", "trigger")
            newInput.setAttribute("class", "text2")
        }
        else {
            newButton.setAttribute("class", "toggle")
            newInput.setAttribute("class", "text")
        }
    }
}

function clearclick() {
    mustDo.innerHTML = "";
    whyNot.innerHTML = "";
    shopping.innerHTML = "";

}

console.log(button);