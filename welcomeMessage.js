const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const date = document.getElementById("dateOfBirth");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  if (fname.value === "" || lname.value === "" || date.value === "") {
    alert("Please enter all required fields");
    return;
  }
  const birthDate = new Date(date.value);
  const birthYear = birthDate.getFullYear();
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  alert(`Welcome ${fname.value} ${lname.value}, you are ${age} years old`);
});
