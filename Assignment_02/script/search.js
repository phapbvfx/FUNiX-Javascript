"use strict";
//fake data
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
const breeds = [
  { name: "Tabby", type: "Cat" },
  { name: "Domestic Medium Hair", type: "Cat" },
  { name: "Mixed Breed", type: "Cat" },
  { name: "Domestic Short Hair", type: "Dog" },
  { name: "Terrier", type: "Dog" },
  { name: "Greyhound", type: "Dog" },
  { name: "Persian", type: "Cat" },
  { name: "Rottweiler", type: "Dog" },
];
const types = ["Dog", "Cat"];

//select form input variable
const id = document.getElementById("input-id");
const petName = document.getElementById("input-name");
const type = document.getElementById("input-type");
const breed = document.getElementById("input-breed");
const vaccinated = document.getElementById("input-vaccinated");
const dewormed = document.getElementById("input-dewormed");
const sterilized = document.getElementById("input-sterilized");

const findBtn = document.getElementById("find-btn");

const selectBreed = document.getElementById("input-breed");
const selectType = document.getElementById("input-type");

const tbody = document.getElementById("tbody");

//icons variable
const checkIcon = "<i class='bi bi-check-circle-fill'></i>";
const unCheckIcon = '<i class="bi bi-x-circle-fill"></i>';

//get data from localStorage
const petArray = getFromStorage("petArr", pets);
const breedArray = getFromStorage("breedArr", breeds);

//Render a pet to html
const renderRow = (pet) => {
  const html = `
        <tr>
            <th scope="row">${pet.id}</th>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.type}</td>
            <td>${pet.weight} kg</td>
            <td>${pet.length} cm</td>
            <td>${pet.breed}</td>
            <td>
                <i class="bi bi-square-fill" style="color: ${pet.color}"></i>
            </td>
            <td>${pet.vaccinated ? checkIcon : unCheckIcon}</td>
            <td>${pet.dewormed ? checkIcon : unCheckIcon}</td>
            <td>${pet.sterilized ? checkIcon : unCheckIcon}</td>
            <td>${new Date(pet.dateAdded).toLocaleDateString("vi-VN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}</td>
            
        </tr>
    
    `;
  return html;
};

//Render petArray to html
const renderTableData = (petArray) => {
  //check generate pet array by filter status
  const htmls = petArray.map((pet) => renderRow(pet)).join("");
  return htmls;
};

//find
findBtn.addEventListener("click", function (e) {
  const pet = {
    id: id.value,
    name: petName.value,
    type: type.value,
    breed: breed.value,
    vaccinated: vaccinated.checked,
    dewormed: dewormed.checked,
    sterilized: sterilized.checked,
  };
  const pets = petArray
    .filter((p) => p.id.includes(pet.id))
    .filter((p) => p.name.includes(pet.name))
    .filter((p) => p.type === pet.type || p.type.includes(pet.type))
    .filter((p) => p.breed === pet.breed || p.type.includes(pet.breed))

    .filter((p) => (pet.vaccinated ? p.vaccinated === pet.vaccinated : true))
    .filter((p) => (pet.dewormed ? p.dewormed === pet.dewormed : true))
    .filter((p) => (pet.sterilized ? p.sterilized === pet.sterilized : true));
  tbody.innerHTML = renderTableData(pets);
});

//filter breed after change pet type
selectType.addEventListener("change", (e) => {
  const type = e.target.value;
  const BreedFilter = breedArray.filter((breed) => breed.type === type);
  renderBreed(BreedFilter);
});

const renderBreed = (breeds) => {
  const htmls =
    ` <option
        selected="true"
        disabled="disabled"
        value=""
      >
        Select Breed
      </option>` +
    breeds
      .map(
        (breed) => `
       <option value=${breed.name}>${breed.name}</option>
      `
      )
      .join("");

  selectBreed.innerHTML = htmls;
};

//Initial form and table
const init = () => {
  selectType.innerHTML += types.map(
    (type) => `
      <option value=${type}>${type}</option>
  `
  );
};

init();
