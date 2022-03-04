const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
let number = parseInt(value.textContent);

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
    btn = e.currentTarget;
        if (btn.classList.contains("increase")){
            number++;
        }else if(btn.classList.contains("decrease")){
            number--;
        }else{
            number = 0;
        }

        if(number < 0){
            value.style.color = "red";
        }else if(number > 0){
            value.style.color = "green";
        }else{
            value.style.color = "black";
        }
        value.textContent = number;
    })
})