// ::::::::::::::::::::::::: //
// :::::  Challenge-01 ::::: //
// ::::::::::::::::::::::::: //

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named createList that takes in an array of the current store intentory.
The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]
This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------ */

const createList = (availableItems) => {
  // TODO: build this out!
}

const inventory = [
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
];

console.log('AVAILABLE PRODUCTS:', createList(inventory));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7
Write a function named fizzbuzz that takes in an array of numbers.
Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.
Return the resulting output array.
------------------------------------------------------------------------------------------------ */

const fizzbuzz = (arr) => {
  // TODO: build this out!
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log('FIZZBUZZ:', fizzbuzz(nums));

// ::::::::::::::::::::::::: //
// :::::  Challenge-02 ::::: //
// ::::::::::::::::::::::::: //

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function that accepts two arrays. Append the values from the second array into the first,
maintaining the ordering.
The function should modify the first array in place. Do not use a return statement.
For example:
const a = [1, 2]; NOTE: If you assign an array to a `const`, you can't re-assign it later, but you can change the values in the array.
const b = [3, 4];
append(a, b);
console.log(a) prints [1, 2, 3, 4]
------------------------------------------------------------------------------------------------ */

const append = (arr1, arr2) => {
  // TODO: build this out!
}

const nums1 = [1, 2, 3, 4];
const nums2 = [5, 6, 7, 8];

append(nums1, nums2);

console.log('APPEND:', nums1);

// ::::::::::::::::::::::::: //
// :::::  Challenge-03 ::::: //
// ::::::::::::::::::::::::: //

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named sortNumbersByLength that takes in an array of numbers and sorts those numbers by their length.
For example, [1, 14, 0.2, -281, 54782] is only correctly sorted in that order.
------------------------------------------------------------------------------------------------ */

const sortNumbersByLength = (arr) => {
  // TODO: build this out!
};

console.log('SORT BY LENGTH:', sortNumbersByLength([20, 100, 100.5, 3000, -26]));

// ::::::::::::::::::::::::: //
// :::::  Challenge-04 ::::: //
// ::::::::::::::::::::::::: //

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
You want to teach a friend how to play hangman and want to show them using a partially complete puzzle.
Write a function named hangman which uses the replace method to remove all of the vowels (a, e, i, o, u) from the hangman string and replace them with an underscore. 
The function should return a string containing the consonants in their original positions and underscores where the vowels were previously located.
For example, 'Welcome to Code 301!' will return 'W_lc_m_ t_ C_d_ 301!'.
------------------------------------------------------------------------------------------------ */

let hangman = (str) => {
  // TODO: build this out!
};

const hangmanStr = 'guess these words and stuff';

console.log('HANGMAN:', hangman(hangmanStr));

// ::::::::::::::::::::::::: //
// :::::  Challenge-05 ::::: //
// ::::::::::::::::::::::::: //

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7
Write a function named removeLastCharacters that takes in a string and a number. The numberOfCharacters argument determines how many characters will be removed from the end of the string. Return the resulting string.
If the numberOfCharacters argument is greater than the length of the input string, the function should return an empty string.
If the numberOfCharacters argument input is a negative number, the function should return the input string without any changes.
For example:
removeLastCharacters('Gregor', 2) returns 'Greg'
removeLastCharacters('Gregor', -2) returns 'Gregor'
removeLastCharacters('Gregor', 9) returns ''
------------------------------------------------------------------------------------------------ */

const removeLastCharacters = (str, numberOfCharacters) => {
  // TODO: build this out!
};

console.log('REMOVE LAST CHAR:', removeLastCharacters('Brian', 2));

// ::::::::::::::::::::::::: //
// :::::  Challenge-06 ::::: //
// ::::::::::::::::::::::::: //

/*------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    children: [],
    house: 'Stark'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
]

const getHouses = (arr) => {
  // TODO: build this out!
}

console.log('GET HOUSES:', getHouses(characters));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.
This function should take in an array of data and a character name and return a Boolean.
For example: 
hasChildrenValues(characters, 'Sansa') will return true 
hasChildrenValues(characters, 'Eddard') will return false
------------------------------------------------------------------------------------------------ */

const hasChildrenValues = (arr, character) => {
  // TODO: build this out!
}

console.log('CHILDREN VALUES:', hasChildrenValues(characters, 'Mace'));

// ::::::::::::::::::::::::: //
// :::::  Challenge-07 ::::: //
// ::::::::::::::::::::::::: //

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Use the snorlaxAbilities data, below, for this challenge.
Write a function named extractAbilities that, given the array of abilities, uses map to create an array containing only the ability name.
Note: Because this function is expecting the array of abilities, it will be invoked as:
extractAbilities(snorlaxAbilities.abilities)
------------------------------------------------------------------------------------------------ */

const snorlaxAbilities = {
  abilities: [
    {
      slot: 3,
      is_hidden: true,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/82/',
        name: 'gluttony',
      },
    },
    {
      slot: 2,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/56/',
        name: 'cute charm',
      },
    },
    {
      slot: 1,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/17/',
        name: 'immunity',
      },
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractAbilities = (arr) => {
  // TODO: build this out!
};

console.log('EXTRACT ABILITIES:', extractAbilities(snorlaxAbilities.abilities));

// ::::::::::::::::::::::::: //
// :::::  Challenge-08 ::::: //
// ::::::::::::::::::::::::: //

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named getCharactersWithoutChildren that, given the array of characters, below, uses filter to return an array of all characters without children.
------------------------------------------------------------------------------------------------ */

const people = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const getCharactersWithoutChildren = (arr) => {
  // TODO: build this out!
};

console.log('GET CHARS W/O CHILDREN:', getCharactersWithoutChildren(people));

// ::::::::::::::::::::::::: //
// :::::  Challenge-09 ::::: //
// ::::::::::::::::::::::::: //

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.
Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
------------------------------------------------------------------------------------------------ */

const reversedString = (arr) => {
  // TODO: build this out!
};

console.log('REVERSE STR:', reversedString('Cool String'));
