const numOne = document.getElementById("num-one");
const numTwo = document.getElementById("num-two");
const numThree = document.getElementById("num-three");
const btn = document.querySelector("button");

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
  const valorNumTwo = Number(numTwo.value);
  console.log(valorNumTwo);
});

numThree.addEventListener("input", () => {
  onlyNumber(numThree);
  const valorNumThree = Number(numThree.value);
  console.log(valorNumThree);
});

btn.addEventListener("click", (event) => {
  event.preventDefault();

  const valorNumOne = Number(numOne.value);
  const valorNumTwo = Number(numTwo.value);
  const valorNumThree = Number(numThree.value);

  let numbers = [];
  let numRandom = [];
  if (valorNumOne > 0 && valorNumThree > 0 && valorNumTwo <= valorNumThree) {
    for (let list = valorNumTwo; list <= valorNumThree; list++) {
      numbers.push(list);
    }
    const toggle = document.getElementById("switch");

    if (toggle.checked) {
      numRandom = [...numbers];
      for (let i = numRandom.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numRandom[i], numRandom[j]] = [numRandom[j], numRandom[i]];
      }
      numRandom = numRandom.slice(0, valorNumOne);
      console.log("sem repeti");
    } else {

      for (let i = 0; i < valorNumOne; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        numRandom.push(numbers[randomIndex]);
      }
      console.log("repetindo");
    }
  } else {
    alert("Valores incorretos");
    numOne.value = "";
    numTwo.value = "";
    numThree.value = "";
    return;
  }

  const form = document.getElementById("form");
  form.style.display = "none";
  const result = document.getElementById("result");
  result.style.display = "flex";

  const ul = document.querySelector("ul");

  numRandom.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    ul.appendChild(li);
  });
});

const btnResult = document.getElementById("btn-result");

btnResult.addEventListener("click", () => {
  const form = document.getElementById("form");
  form.style.display = "flex";
  

  const result = document.getElementById("result");
  result.style.display = "none";
  numOne.value = "";
  numTwo.value = "";
  numThree.value = "";

  const ul = document.querySelector("ul");
  ul.innerHTML = "";
});
