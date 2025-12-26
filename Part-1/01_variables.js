const accoundId = 14453;

let accountEmail = "adityasingh@gmail.com";

var accountPassword = "12345";

accountCity = "Jaipur";

let accountState; // undefined
// accoundId = 2; // Not allowed to change

accountEmail = "hchc@essf.com";

accountPassword = "5678";

accountCity = "Bengaluru";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accoundId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
