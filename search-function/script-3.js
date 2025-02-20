let searchValue = document.getElementById("search-input")
let results = document.getElementById("results")

function handleSearch(e){

    const searchText = searchValue.value.toLowerCase();
    const students = ["Sara", "Dreni", "Reis", "Molos", "Lum", "Dielli"]

    const filteredSearch = students.filter(student => 
        student.toLowerCase().includes(searchText)
    );

    if (filteredSearch.length) {
        results.innerHTML = filteredSearch.map(item => `<p>${item}</p>`).join("");
    } else {
        results.innerHTML = `<p>There are no results!</p>`;
    }
}

searchValue.addEventListener("input", handleSearch)