const password = document.getElementById("password");
const copy = document.getElementById("copy");
const generate = document.getElementById("generate");
const numbers = document.getElementById("numbers");
const uppercase = document.getElementById("uppercase");
const symbols = document.getElementById("symbols");
const spaces = document.getElementById("spaces");
const length = document.getElementById("length");

copy.addEventListener("click", () => {
  var TempText = document.createElement("input");
  TempText.value = password.innerText;
  document.body.appendChild(TempText);
  TempText.select();

  document.execCommand("copy");
  document.body.removeChild(TempText);
});

generate.addEventListener("click", () => {
  var result = [];

  var characters = "abcdefghijklmnopqrstuvwxyz";

  if (uppercase.checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numbers.checked) {
    characters += "1234567890";
  }

  if (spaces.checked) {
    characters += " ";
  }

  if (symbols.checked) {
    characters += "#!$%&/=";
  }

  charactersLength = characters.length;
  for (let i = 0; i < length.value; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }

  password.innerText = result.join("");
});
