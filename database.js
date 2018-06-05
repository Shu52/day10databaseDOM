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

const homeInventoryFragment = document.createDocumentFragment()
// access and array that is inside of an array inside of an object
const populateDOMForDataset =(dataset) =>{
    const invTable = HomeInventoryDatabase[dataset]
    invTable.forEach(item =>{
        const sectionElement = document.createElement("section")
        for(let key in item){
            const paragraphElement = document.createElement("p")
            paragraphElement.textContent = `${key}: ${item[key]}`
            sectionElement.appendChild(paragraphElement)
        }
        homeInventoryFragment.appendChild(sectionElement)
    })
}
populateDOMForDataset("furniture")

artRef.appendChild(homeInventoryFragment)

// for (let table in HomeInventoryDatabase){
//     const invTable = HomeInventoryDatabase[table]
//     const invTable = HomeInventoryDatabase[dataSet]
//     invTable.forEach(item =>)
// }
// for(let i = 0;i<=HomeInventoryDatabase.length;i++){
// const secRef = document.createElement("section")
// // That component itself should contain three <p> components. One for the name, location, and description.

// const pRef = document.createElement('p').textContent= HomeInventoryDatabase[i][key].description

// }
