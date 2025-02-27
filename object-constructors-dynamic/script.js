  // Person Constructor with Nested Job & Car
  function Person(name, last, age, eyes, jobTitle, company, salary, carBrand, carModel, carYear) {
    this.firstName = name;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyes;

    // Job object inside Person
    this.job = {
        title: jobTitle,
        company: company,
        salary: salary,
        getJobDetails: function() {
            return `${this.title} at ${this.company} earning $${this.salary} per year.`;
        }
    };

    // Car object inside Person
    this.car = {
        brand: carBrand,
        model: carModel,
        year: carYear,
        getCarDetails: function() {
            return `${this.year} ${this.brand} ${this.model}`;
        }
    };

    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
}

// Array to store people
let people = [];

// Function to add a person dynamically
function addPerson(person) {
    people.push(person);

    // Get the container
    let buttonsContainer = document.getElementById("buttons-container");

    // Create a button for this person
    let button = document.createElement("button");
    button.textContent = `Show ${person.getFullName()} Details`;
    button.addEventListener("click", function() {
        showPersonDetails(person);
    });

    // Add button to the container
    buttonsContainer.appendChild(button);
}

// Function to display person details
function showPersonDetails(person) {
    let results = document.querySelector(".results");
    results.innerHTML = `
        <h3 class="person-title">Details for ${person.getFullName()}</h3>
        <p><strong class="person-title">Age:</strong> ${person.age} years old</p>
        <p><strong class="person-title">Eye Color:</strong> ${person.eyeColor}</p>
        <p><strong class="person-title">Job:</strong> ${person.job.getJobDetails()}</p>
        <p><strong class="person-title">Car:</strong> ${person.car.getCarDetails()}</p>
    `;
}

// Adding sample people
addPerson(new Person("Dielli", "Demjaha", 35, "brown", "Software Engineer", "Tech Corp", 75000, "Tesla", "Model S", 2022));
addPerson(new Person("Arber", "Gashi", 28, "blue", "UI/UX Designer", "Creative Agency", 62000, "BMW", "X5", 2020));
addPerson(new Person("Era", "Berisha", 30, "green", "Product Manager", "FinTech Inc", 90000, "Audi", "A4", 2021));
