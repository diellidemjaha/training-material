function Person(name, last, age, eyes) {
    this.firstName = name
    this.lastName = last
    this.age = age
    this.eyeColor = eyes
}

const Dielli = new Person("Dielli", "Demjaha", "35", "kafte");

let results = document.querySelector(".results");

results.textContent = `Emri dhe Mbiemri: ${Dielli.firstName} ${Dielli.lastName}, dhe eshte ${Dielli.age} vjecar.`;

let button = document.querySelector(".button");
function functionOne() {
    let currentColor = results.style.color || "black"; // Default to black if unset
    let newColor;

    switch (currentColor) {
        case "violet":
            newColor = "red";
            break;
        case "red":
            newColor = "blue";
            break;
        case "blue":
            newColor = "green";
            break;
        default: // Handle initial click and reset after "green"
            newColor = "violet";
            break;
    }
    results.style.color = newColor;
}

button.addEventListener("click", functionOne)