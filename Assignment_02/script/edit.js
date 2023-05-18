"use strict";

const sidebar = document.getElementById("sidebar");

const toggleActive = function (e) {
  this.classList.toggle("active");
};

sidebar.addEventListener("click", toggleActive);

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
const types = ["Dog", "Cat"];
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

const id = document.getElementById("input-id");
const petName = document.getElementById("input-name");
const age = document.getElementById("input-age");
const type = document.getElementById("input-type");
const weight = document.getElementById("input-weight");
const length = document.getElementById("input-length");
const color = document.getElementById("input-color-1");
const breed = document.getElementById("input-breed");
const vaccinated = document.getElementById("input-vaccinated");
const dewormed = document.getElementById("input-dewormed");
const sterilized = document.getElementById("input-sterilized");

const submitBtn = document.getElementById("submit-btn");
const healthyBtn = document.getElementById("healthy-btn");
const calculateBtn = document.getElementById("calculate-btn");

const formContainer = document.getElementById("container-form");

const selectBreed = document.getElementById("input-breed");
const selectType = document.getElementById("input-type");
const tbody = document.getElementById("tbody");

const checkIcon = "<i class='bi bi-check-circle-fill'></i>";
const unCheckIcon = '<i class="bi bi-x-circle-fill"></i>';

//get data from localStorage or fake data
const petArray = getFromStorage("petArr", pets);
const breedArray = getFromStorage("breedArr", breeds);

// Handle events form submition
submitBtn.addEventListener("click", () => {
  //creat a pet from form data

  const pet = {
    id: id.value,
    name: petName.value,
    age: age.value,
    type: type.value,
    weight: weight.value,
    length: length.value,
    breed: breed.value,
    color: color.value,
    vaccinated: vaccinated.checked,
    dewormed: dewormed.checked,
    sterilized: sterilized.checked,
    dateAdded: Date.now(),
  };

  const petIndex = getPetIndexById(id.value);
  //check form input validate
  const isValid = validateData(pet); //->true/false

  if (isValid) {
    //data already validate -> add to petArray and re-render
    petArray[petIndex] = pet;

    //re-render pet table
    tbody.innerHTML = renderTableData(petArray);
    saveToStorage("petArr", JSON.stringify(petArray));
    clearInput();
    formContainer.classList.add("hide");
  }
});

//Validate
const validateData = (pet) => {
  //Check empty and send an alert to customer
  for (const key in pet) {
    if (pet[key] === "") {
      alert(`Please input ${key}`);
      return false;
    }
  }

  //validate age
  if (!(pet.age >= 1 && pet.age <= 15)) {
    alert("Age must be between 1 and 15!");
    return false;
  }
  //validate weight
  if (!(pet.weight >= 1 && pet.weight <= 15)) {
    alert("Weight must be between 1 and 15!");
    return false;
  }
  //validate length
  if (!(pet.length >= 1 && pet.length <= 100)) {
    alert("Length must be between 1 and 100!");
    return false;
  }

  return true;
};

//Clear input
const clearInput = () => {
  id.value = "";
  petName.value = "";
  age.value = "";
  type.value = "";
  weight.value = "";
  length.value = "";
  breed.value = "";
  color.value = "#000000";
  vaccinated.checked = false;
  dewormed.checked = false;
  sterilized.checked = false;
};

//get petIndexById in pet array
const getPetIndexById = (petId) =>
  petArray.findIndex((pet) => pet.id === petId);

//handleEdit a pet by id
tbody.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-pet")) {
    formContainer.classList.remove("hide");
    const { petId } = e.target.dataset;
    let index = getPetIndexById(petId);

    const BreedFilter = breedArray.filter(
      (breed) => breed.type === petArray[index].type
    );
    renderBreed(BreedFilter);
    fillDataToForm(petArray[index]);
  }
});

//fill pet data to form
const fillDataToForm = (pet) => {
  id.value = pet.id;
  petName.value = pet.name;
  age.value = pet.age;
  type.value = pet.type;
  weight.value = pet.weight;
  length.value = pet.length;
  breed.value = pet.breed;
  color.value = pet.color;
  vaccinated.checked = pet.vaccinated;
  dewormed.checked = pet.dewormed;
  sterilized.checked = pet.sterilized;
};

//Render petArray to html
const renderTableData = (petArray) => {
  //check generate pet array by filter status
  const htmls = petArray.map((pet) => renderRow(pet)).join("");
  return htmls;
};

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
            <td>
            <button type="button" class="btn btn-warning edit-pet" data-pet-id="${
              pet.id
            }">
                Edit
            </button>
            </td>
        </tr>
    
    `;
  return html;
};

//Re-Render after change pet type
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
  //Init pet table
  tbody.innerHTML = renderTableData(petArray);

  //Init pet type
  selectType.innerHTML += types.map(
    (type) => `
      <option value=${type}>${type}</option>
  `
  );
};
init();
