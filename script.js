'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// // const accounts = [account1, account2, account3, account4];

// // // Elements
// // const labelWelcome = document.querySelector('.welcome');
// // const labelDate = document.querySelector('.date');
// // const labelBalance = document.querySelector('.balance__value');
// // const labelSumIn = document.querySelector('.summary__value--in');
// // const labelSumOut = document.querySelector('.summary__value--out');
// // const labelSumInterest = document.querySelector('.summary__value--interest');
// // const labelTimer = document.querySelector('.timer');

// // const containerApp = document.querySelector('.app');
// // const containerMovements = document.querySelector('.movements');

// // const btnLogin = document.querySelector('.login__btn');
// // const btnTransfer = document.querySelector('.form__btn--transfer');
// // const btnLoan = document.querySelector('.form__btn--loan');
// // const btnClose = document.querySelector('.form__btn--close');
// // const btnSort = document.querySelector('.btn--sort');

// // const inputLoginUsername = document.querySelector('.login__input--user');
// // const inputLoginPin = document.querySelector('.login__input--pin');
// // const inputTransferTo = document.querySelector('.form__input--to');
// // const inputTransferAmount = document.querySelector('.form__input--amount');
// // const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// // const inputCloseUsername = document.querySelector('.form__input--user');
// // const inputClosePin = document.querySelector('.form__input--pin');

// // /////////////////////////////////////////////////
// // /////////////////////////////////////////////////
// // // LECTURES

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// let arr = ['a', 'b,', 'c', 'd', 'e'];

// //SLice
// console.log(arr.slice(2));

// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));

// console.log(arr.slice(1, -2));

// console.log(arr.slice());
// console.log([...arr]);

// //Splice
// console.log(arr.splice(2));
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// //reverse

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // Concat
// console.log('====================concat=================');
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //join

// console.log(letters.join('-'));

// /////////////////////////////////////
// //at() method
// const arry = [23, 11, 44];
// console.log(arry[arry.length - 1]);
// console.log(arry.slice(-1)[0]);
// console.log(arry.at(-1));

// /////////////////////////////
// // for each loop

// const movements = [200, 450, -400, 3000, -640, 120, 70, -399];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log('you deposit', Math.abs(movement));
//   } else {
//     console.log('you withdraw', Math.abs(movement));
//   }
// // }

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log('Movments:', i + 1, 'you deposit', Math.abs(movement));
//   } else {
//     console.log('Movments:', i + 1, 'you withdraw', Math.abs(movement));
//   }
// }

// console.log('===========================');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log('you deposit', Math.abs(mov));
//   } else {
//     console.log('you withdraw', Math.abs(mov));
//   }
// });

// const currencies = new Map(
//   ['USD', 'united State Dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling']
// );

// console.log(currencies);

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// console.log(currencies);

// currencies.forEach(function (value, key, map) {
//   console.log(key, ':', value);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(key, ':', value);
// });

///////////////////////===========================

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovments = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov < 0 ? 'withdrawal' : 'deposit'; //: 'Withdrawal';

    const html = `

      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>

          <div class="movements__value">${mov}</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

//calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      //console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

//
//
//UPDATE UI
const updateUI = function (acc) {
  // Display movements

  displayMovments(acc.movements);
  // Display balanace
  calcDisplayBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
};

////Event Handler

console.log('==============');
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log('=login=');
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;
    //clear input fields

    inputLoginUsername.value = '';
    inputLoginPin.value = '';

    // update ui

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //
    //update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value == currentAccount.username &&
    Number(inputClosePin.value) == currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // delete Account
    accounts.splice(index, 1);

    // Hide UI

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovments(currentAccount.movements, !sorted);
  sorted = !sorted;
});

////////

// console.log(accounts);

//
// console.log('--------------');

// const withdrawal = [];

// for (const mov of movements) {
//   if (mov < 0) withdrawal.push(mov);
// }
// console.log(withdrawal);

// const withdra = movements.filter(mov => mov < 0);

// console.log(withdra);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log('iteration', i, acc);
//   return acc + cur;
// }, 0);
// console.log(balance);
// console.log('==============');

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// const balance3 = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance3);

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   console.log(dogsJuliaCorrected);
//   dogsJuliaCorrected.splice(0, 1);
//   console.log(dogsJuliaCorrected);

//   dogsJuliaCorrected.splice(-2);
//   console.log(dogsJuliaCorrected);
//   // console.log(dogsJuliaCorrected);

//   console.log('==========');

//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log('Dog Number ', i + 1, 'is Adult and is ', dog, 'yaer old');
//     } else {
//       console.log('Dog Number', i + 1, 'is still a puppy');
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// //

// // const euroToUsd = 1.1;

// // // const movementUSD = movements.map(function (mov) {
// // //   return mov * euroToUsd;
// // // });

// // console.log(movements);
// // //console.log(movementUSD);

// // console.log('===================');

// // const movementUSD = movements.map(mov => mov * euroToUsd);
// // console.log(movementUSD);

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adult = humanAge.filter(age => age >= 18);
//   console.log(adult);
//   console.log(humanAge);

//   const average = adult.reduce((acc, age) => acc + age, 0) / adult.length;
//   return average;
// };
// const calcAverageHumanAge2 = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.lenght, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1);
// console.log(avg2);

// console.log('===============================');

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstwothdral = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstwothdral);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);
/////////////////////////////////////////////////////////////////////////////////////////////////
// //Flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // flateMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// /////////////////////////////////////////////////////////////////////////////////////////////////
// //sorting

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b < a) return -1;
// });
// console.log(movements);

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return1;
// });
