// "use strict"

// Class declarations that don't use the extends keyword are called base classes

// class User {
//     constructor(username, email, password){
//         this.user = username;
//         this.email = email;
//         this.pass = password;
//     }

//     static totalUsers() {
//         console.log(`there are total 50 users`);
//     }

//     register() {
//         console.log(`${this.user} is registered`);
//     }
// }

// let saad = new User('saady', 'saad07@gmail.com', '12345');
// console.log(saad);
// saad.register();
// User.totalUsers();


// ===============================================================================================
// =============================   INHERITANCE =======================================
// ===============================================================================================

// class User {
//     constructor(username, email, password){
//         this.user = username;
//         this.email = email;
//         this.pass = password;
//     }
//     static totalUsers() {
//         console.log(`there are total 50 users`);
//     }
//     register() {
//         console.log(`${this.user} is registered`);
//     }
// }

// class Member extends User {
//     constructor(username, email, password, memberPackage){
//         super(username, email, password);
//         this.package = memberPackage;
//     } 
//     getPackage() {
//         console.log(`${this.user} is subscribed to ${this.package} package`);
//     }
// }

// let mike = new Member('mike', 'mike@yahoo.com', '123', 'premium');
// console.log(mike);
// mike.getPackage();


// Under the hood, ES6 classes are not something that is radically new: They mainly provide more convenient
// syntax to create old-school constructor functions. ~ Axel Rauschmayer

