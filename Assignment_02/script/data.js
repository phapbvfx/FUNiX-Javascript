"use strict";
const pets = [
  {
    id: "P001",
    name: "Tom",
    age: 3,
    type: "Cat",
    weight: 5,
    length: 50,
    breed: "Tabby",
    color: "#CD0000",
    vaccinated: true,
    dewormed: false,
    sterilized: true,
    dateAdded: Date.now(),
  },
  {
    id: "P002",
    name: "Tyke",
    age: 5,
    type: "Dog",
    weight: 3,
    length: 40,
    breed: "Mixed Breed",
    color: "#CD0000",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    dateAdded: Date.now(),
  },
  {
    id: "P003",
    name: "Tyke",
    age: 5,
    type: "Dog",
    weight: 3,
    length: 40,
    breed: "Mixed Breed",
    color: "#CD0000",
    vaccinated: false,
    dewormed: true,
    sterilized: false,
    dateAdded: Date.now(),
  },
  {
    id: "P004",
    name: "Tyke",
    age: 5,
    type: "Dog",
    weight: 3,
    length: 40,
    breed: "Mixed Breed",
    color: "#CD0000",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    dateAdded: Date.now(),
  },
  {
    id: "P005",
    name: "Tyke",
    age: 5,
    type: "Dog",
    weight: 3,
    length: 40,
    breed: "Mixed Breed",
    color: "#CD0000",
    vaccinated: false,
    dewormed: true,
    sterilized: false,
    dateAdded: Date.now(),
  },
];

const exportBtn = document.getElementById("export-btn");
const importBtn = document.getElementById("import-btn");
const inputFile = document.getElementById("input-file");

//Handle save file
function saveStaticDataToFile() {
  //get pet array and convert to string
  const petArray = JSON.stringify(getFromStorage("petArr", pets));

  //create static file
  const file = new Blob([petArray], {
    //file type
    type: "data:text/json;charset=utf-8,",
  });

  //create link down
  const link = document.createElement("a");
  //create file href
  link.href = URL.createObjectURL(file);
  //create default file name
  link.download = "pets.json";
  //call click event on <a> and save file to the local computer
  link.click();
  URL.revokeObjectURL(link.href);
}
//export and save file to local computer
exportBtn.addEventListener("click", saveStaticDataToFile);

//Import json file
function importDataFromLocal() {
  const file = inputFile.files[0];

  if (file) {
    const reader = new FileReader();

    reader.readAsText(file, "UTF-8");

    reader.onload = function (evt) {
      //parse json file to array
      const pets = JSON.parse(evt.target.result);
      const petArray = getFromStorage("petArr", []);
      //check localStorage  null
      if (petArray !== null) {
        pets.forEach((pet) => {
          let index = petArray.findIndex((newPet) => newPet.id === pet.id);
          console.log(index);
          if (index === -1) {
            //push new pet
            petArray.push(pet);
          } else {
            //replace pet exists
            petArray[index] = pet;
          }
        });
        saveToStorage("petArr", petArray);
      } else {
        //localStorage null-> add file parse to localStorage
        saveToStorage("petArr", pets);
      }
    };
    reader.onerror = function (evt) {
      alert("Cannot read the file");
    };
  }
}

importBtn.addEventListener("click", importDataFromLocal);
