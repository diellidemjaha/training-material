let results = document.querySelector(".results");
let fruitSelect = document.querySelector("#fruits"); // Correct selection using ID


results.innerHTML = "Please select a fruit."

    function FruitResults () {
    let fruitChoice = fruitSelect.value; // Get selected value when user changes selection
    let message;
    
    switch (fruitChoice) {
        case "Banana":
            message = "Bananas are rich in potassium!";
            break;
        case "Apple":
            message = "Apple keeps the doctor away!";
            break;
            case "Grapes":
            message = "Grapes are great for making wine!";
            break;
            case "Mango":
            message = "Mangoes are the king of fruits!";
            break;
            default:
            message = "Please select a fruit.";
        }
                
        results.innerHTML = message;
    };
        fruitSelect.addEventListener("change", FruitResults);