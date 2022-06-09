/* let nazwa = document.getElementById("name");
console.log(fname.value); */

let button = document.querySelector("button");


function getDataFrom() {
    let inputFname = document.getElementById("fname").value;
    let inputLname = document.getElementById("lname").value;
    let inputPhone = document.getElementById("phone").value;
  console.log(inputFname);
  
  let parName = document.getElementById("par_name");
  let parLname = document.getElementById("par_lname");
  let parPhone = document.getElementById("par_phone");

  parName.innerText = inputFname;
  parLname.innerText = inputLname;
  parPhone.innerText = inputPhone;
  console.log(parname.innerText + "- to jest mój string z formularza")
}
  
button.addEventListener('click', getDataFrom);