// In your JavaScript file, load your home inventory from local storage.
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
const HomeInventoryDatabase = loadDatabase("HomeInventory")
console.log(HomeInventoryDatabase)

// Iterate over every data set in the database and create a <section> component.
const artRef = document.querySelector("#myStuff")

for(let i = 0;i<=HomeInventoryDatabase.length;i++){
const secRef = document.createElement("section")
// That component itself should contain three <p> components. One for the name, location, and description.

const pRef = document.createElement('p').textContent= HomeInventoryDatabase[i].furniture.description

}