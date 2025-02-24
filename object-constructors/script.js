function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  const mySister = new Person("Anna", "Rally", 18, "green");
  
  const mySelf = new Person("Johnny", "Rally", 22, "green");
  
  let results = document.querySelector(".results");
  
  results.textContent = myFather.firstName + " " + myFather.lastName;
  results.style.fontFamily = "sans-serif";
  results.style.color = "red";
  results.style.padding = "50px 50px";
  results.style.fontSize = "100px";