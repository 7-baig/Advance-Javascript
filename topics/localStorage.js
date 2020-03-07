// LOCAL STORAGE

// The main features of localStorage are:

// Shared between all tabs and windows from the same origin.
// The data does not expire. It remains after the browser restart and even OS reboot.


// localStorage.setItem('fname', 'Saad')
// localStorage.setItem('lname', 'Baig')

// const abc = localStorage.getItem('fname')

// console.log(abc) // RESULT: Saad

// localStorage.removeItem('fname')

// localStorage.getItem('fname') // RESULT: nothing will be displyed

// console.log(localStorage.key(0)) // RESULT: Google_experiment_mod (This value can be different)

// console.log(localStorage.length) // RESULT: 4 (This value can be different)

// localStorage.clear() // this line will remove all the data from local storage

// console.log(localStorage.length) // RESULT: 0 (This value can be different)