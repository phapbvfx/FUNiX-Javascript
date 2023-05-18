"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

let currenctAccount;
let isSort = false;

//Display movement
const displayMovement = (movements, sort = false) => {
  containerMovements.innerHTML = "";
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((movement, i) => {
    const type = movement > 0 ? "deposit" : "withdrawal";

    const html = `
     <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${movement}</div>
        </div>
    
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// calculator and display sumary
const calcDisplaySumary = (acc) => {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = interest;
};
// calculator and display balance
const calcDisplayBalance = (acc) => {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = `${acc.balance}€`;
};

//create username
const createUsernames = (accounts) => {
  accounts.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

//Update ui
const updateUI = (acc) => {
  calcDisplayBalance(acc);
  displayMovement(acc.movements);
  calcDisplaySumary(acc);
};

//Request login
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  currenctAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currenctAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ${
      currenctAccount.owner.split(" ")[0]
    }`;
    inputLoginPin.value = inputLoginUsername.value = "";
    inputLoginPin.blur();
    containerApp.style.opacity = 1;

    updateUI(currenctAccount);
  }
});

//request transfer money
btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferTo.value = inputTransferAmount.value = "";
  if (
    amount > 0 &&
    receiverAcc &&
    currenctAccount.balance >= amount &&
    receiverAcc?.username !== currenctAccount.username
  ) {
    console.log("transfer valid: ", amount);
    currenctAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currenctAccount);
  } else {
    console.log("failsssss");
  }
});

// request loan money
btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currenctAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currenctAccount.movements.push(amount);
    updateUI(currenctAccount);
  }
  inputLoanAmount.value = "";
});

//remove account
btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currenctAccount.username &&
    Number(inputClosePin.value) === currenctAccount.pin
  ) {
    const currentIndex = accounts.findIndex(
      (acc) => acc.username === currenctAccount.username
    );
    accounts.splice(currentIndex, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  isSort = !isSort;
  displayMovement(currenctAccount.movements, isSort);
});
//147, 151, 153 (từ 9:40), 155 (từ 7:25), 157 => 164)
