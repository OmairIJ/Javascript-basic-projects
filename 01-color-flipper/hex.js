const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const body = document.body;
const colorText = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let color = "#";
    for (let i = 0; i < 6; i++){
        let randNumber = getRandomNumber();
        color += hex[randNumber];
    }
    body.style.backgroundColor = color;
    colorText.textContent = color;
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}