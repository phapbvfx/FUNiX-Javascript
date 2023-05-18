"use strict";

// Varible
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
  "Tabby",
  "Domestic Medium Hair",
  "Mixed Breed",
  "Domestic Short Hair",
  "Terrier",
  "Greyhound",
  "Persian",
  "Rottweiler",
];

const types = ["Cat", "Dog"];

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

const selectBreed = document.getElementById("input-breed");
const selectType = document.getElementById("input-type");
const tbody = document.getElementById("tbody");

const checkIcon = "<i class='bi bi-check-circle-fill'></i>";
const unCheckIcon = '<i class="bi bi-x-circle-fill"></i>';

let healthyCheck = false;

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
  //check form input validate
  const isValid = validateData(pet); //->true/false

  if (isValid) {
    //data already validate -> add to pets and re-render
    pets.push(pet);

    //re-render pet table
    tbody.innerHTML = renderTableData(pets);
    clearInput();
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

  //validate unique Id
  if (pets.some((pett) => pett.id === pet.id)) {
    alert("ID must be unique!");
    return false;
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

//remove a pet by id
const removePetIntable = (e) => {
  const id = e.target.dataset.petId;
  let index;
  pets.forEach((pet, i) => {
    if (pet.id === id) {
      index = i;
    }
  });

  pets.splice(index, 1);
  tbody.innerHTML = renderTableData(pets);
};
//Render petArray to html
const renderTableData = (petArray) => {
  //check generate pet array by filter status
  petArray = healthyCheck ? petHealArray(petArray) : petArray;
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
            <td>${pet.bmi ? pet.bmi : "?"}</td>
            <td>${new Date(pet.dateAdded).toLocaleDateString("vi-VN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}</td>
            <td>
            <button type="button" class="btn btn-danger" data-pet-id="${
              pet.id
            }" onclick="removePetIntable(event)">
                Delete
            </button>
            </td>
        </tr>
    
    `;
  return html;
};

//healthy filter
const petHealArray = () =>
  pets.filter((pet) => pet.dewormed && pet.sterilized && pet.vaccinated);

//handle event click filter
healthyBtn.addEventListener("click", () => {
  //toggle filter status
  healthyCheck = !healthyCheck;
  //re-render filter to pet table
  tbody.innerHTML = renderTableData(pets);
  //change button text by status
  healthyCheck
    ? (healthyBtn.innerText = "Show All Pet")
    : (healthyBtn.innerText = "Show Healthy Pet");
});

// Generate BMI
const BMI = (pet) => {
  return ((pet.weight * 703) / pet.length ** 2).toFixed(2);
};

// Render BMI when click calculateBtn
calculateBtn.addEventListener("click", () => {
  pets.forEach((pet) => (pet.bmi = BMI(pet)));
  tbody.innerHTML = renderTableData(pets);
});

//Initial form and table
const init = () => {
  //Init pet table
  tbody.innerHTML = renderTableData(pets);

  //Init pet breed
  selectBreed.innerHTML += breeds.map(
    (breed) => `
       <option value=${breed}>${breed}</option>
      `
  );

  //Init pet type
  selectType.innerHTML += types.map(
    (type) => `
      <option value=${type}>${type}</option>
  `
  );
};

init();
