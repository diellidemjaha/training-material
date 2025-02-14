function toggleTextColor() {
    let result = document.getElementById("results");
    let colorVersion = window.getComputedStyle(result).color;

    var black = "rgb(0, 0, 0)";

    if (colorVersion === black) {
        result.style.color = "white";
    } else{
        result.style.color = "black";
    }
}