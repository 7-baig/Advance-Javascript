// SESSION STORAGE

// The sessionStorage object is used much less often than localStorage.

// Properties and methods are the same, but it’s much more limited:

// The sessionStorage exists only within the current browser tab.
// Another tab with the same page will have a different storage.
// But it is shared between iframes in the same tab (assuming they come from the same origin).
// The data survives page refresh, but not closing/opening the tab.

// sessionStorage.setItem('fname', 'Umair')
// sessionStorage.setItem('lname', 'Ahmed')

// const abc = sessionStorage.getItem('fname')

// console.log(abc) // RESULT: Umair

// sessionStorage.removeItem('fname')

// sessionStorage.getItem('fname') // RESULT: nothing will be displyed

// console.log(sessionStorage.key(0)) // RESULT: lname (This value can be different)

// console.log(sessionStorage.length) // RESULT: 1 (This value can be different)

// sessionStorage.clear() // this line will remove all the data from session storage

// console.log(sessionStorage.length) // RESULT: 0 (This value can be different)
