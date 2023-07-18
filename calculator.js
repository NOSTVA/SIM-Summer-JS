const fnum = document.getElementById("fnum");
const snum = document.getElementById("snum");
const submitBtn = document.getElementById("submitBtn");
alert(
  "it’s the first release of a calculator that only has a summation feature."
);

submitBtn.addEventListener("click", () => {
  if (fnum.value === "" || snum.value === "") {
    alert("Please enter both numbers");
    return;
  }
  const fnumValue = Number(fnum.value);
  const snumValue = Number(snum.value);
  alert(`${fnumValue} + ${snumValue} = ${fnumValue + snumValue}`);
});
