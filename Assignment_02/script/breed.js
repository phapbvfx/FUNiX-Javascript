"use strict";

//fake data
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

const sidebar = document.getElementById("sidebar");

const type = document.getElementById("input-type");
const breedInput = document.getElementById("input-breed");

const submitBtn = document.getElementById("submit-btn");
const healthyBtn = document.getElementById("healthy-btn");
const calculateBtn = document.getElementById("calculate-btn");

const selectBreed = document.getElementById("input-breed");
const selectType = document.getElementById("input-type");
const tbody = document.getElementById("tbody");

// toggle sidebar active
const toggleActive = function (e) {
  this.classList.toggle("active");
};

sidebar.addEventListener("click", toggleActive);

const breedArray = getFromStorage("breedArr", breeds);
console.log(breedArray);

const renderBreedTable = (data, container, options = "beforeend") => {
  data.forEach((breed, i) => {
    const html = `<tr>
            <th scope="row">${i + 1}</th>
            <td>${breed.name}</td>
            <td>${breed.type}</td>
            <td>
            <button type="button" class="btn btn-danger remove-breed" data-breed="${i}">
                Delete
            </button>
            </td>
        </tr>`;
    container.insertAdjacentHTML(options, html);
  });
};

renderBreedTable(breedArray, tbody, "beforeend");

//remove a breeds
tbody.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("remove-breed")) {
    const index = e.target.dataset.breed;
    if (index === undefined || index === null) return;
    breedArray.splice(index, 1);
    saveToStorage("breedArr", breedArray);
    tbody.innerHTML = "";
    renderBreedTable(breedArray, tbody, "beforeend");
  }
});

//submit add breed
submitBtn.addEventListener("click", function (e) {
  const breed = {
    type: type.value,
    name: breedInput.value,
  };
  const isValid = validateData(breed);
  if (isValid) {
    //data already validate -> add to petArray and re-render
    breedArray.push(breed);

    //re-render breed table
    saveToStorage("breedArr", breedArray);
    tbody.innerHTML = "";
    renderBreedTable(breedArray, tbody, "beforeend");
    clearInput();
  }
});

const validateData = (breed) => {
  //Check empty and send an alert to customer
  for (const key in breed) {
    if (breed[key] === "") {
      alert(`Please input ${key}`);
      return false;
    }
  }
  return true;
};

selectType.innerHTML += types.map(
  (type) => `
      <option value=${type}>${type}</option>
  `
);

const clearInput = () => {
  type.value = "";
  breedInput.value = "";
};
