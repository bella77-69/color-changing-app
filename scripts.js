// get colors
let colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6"
];

// change background when button is clicked
let button = document.getElementById("button");

button.addEventListener("click", function() {
    let color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = color;
});
