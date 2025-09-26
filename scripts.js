const numOne = document.getElementById("num-one");
const numTwo = document.getElementById("num-two");
const numThree = document.getElementById("num-three");

function onlyNumber(input) {
  input.value = input.value.replace(/[^0-9]/g, "");
}

numOne.addEventListener("input", () => {
  onlyNumber(numOne);
  const valorNumOne = Number(numOne.value);
  console.log(valorNumOne);
});
numTwo.addEventListener("input", () => {
  onlyNumber(numTwo);
  const valornumTwo = Number(numTwo.value);
  console.log(valornumTwo);
});

numThree.addEventListener("input", () => {
  onlyNumber(numThree);
  const valornumThree = Number(numThree.value);
  console.log(valornumThree);
});
