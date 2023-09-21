const colorBox = document.getElementById("color-box");
const generateBtn = document.getElementById("generate-btn");
const customizeBtn = document.getElementById("customize-btn");
const colorCode = document.getElementById("color-code");

// Function to generate a random color in hexadecimal format
function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for the Generate Color button
generateBtn.addEventListener("click", function () {
    const randomColor = generateRandomColor();
    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = `Color Code: ${randomColor}`;
});

// Event listener for the Customize Color button
customizeBtn.addEventListener("click", function () {
    const customColor = prompt("Enter a custom color code (e.g., #RRGGBB):");
    if (customColor) {
        colorBox.style.backgroundColor = customColor;
        colorCode.textContent = `Color Code: ${customColor}`;
    }
});
