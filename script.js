const colorsCount = document.querySelector(".colors-count");
const colorsContainer = document.querySelector(".colors-container");

colorsCount.oninput = function () {
  const colorsCountValue = colorsCount.value;
  colorsContainer.innerHTML = "";

  for (let i = 0; i < colorsCountValue; i++) {
    const newInput = document.createElement("input");
    newInput.placeholder = "Enter a color";
    colorsContainer.append(newInput);

    newInput.oninput = function () {
      newInput.style.color = newInput.value;
    };
  }

  if (colorsCountValue > 0) {
    const pickColorButton = document.createElement("button");
    pickColorButton.textContent = "Pick a color";
    colorsContainer.append(pickColorButton);
    pickColorButton.onclick = function () {
      const colors = [];

      Array.from(colorsContainer.children).forEach(function (inputColor) {
        if (inputColor.value) colors.push(inputColor.value);
      });
      const randomNum = Math.floor(Math.random() * colors.length);
      const color = colors[randomNum];

      document.body.style.backgroundColor = color;
    };
  }
};
