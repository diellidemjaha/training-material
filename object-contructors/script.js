function Person(name, last, age, eyes) {
    this.firstName = name
    this.lastName = last
    this.age = age
    this.eyeColor = eyes
}

const Dielli = new Person("Dielli", "Demjaha", "35", "kafte");

let results = document.querySelector(".results");

results.textContent = `Emri dhe Mbiemri: ${Dielli.firstName} ${Dielli.lastName}, dhe eshte ${Dielli.age} vjecar.`;
