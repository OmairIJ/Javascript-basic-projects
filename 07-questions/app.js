const questions = document.querySelectorAll(".question");

questions.forEach(function(question){

    question.querySelector(".question-btn").addEventListener("click",function(e){
        
        questions.forEach(function(item){
            if(item != question){
                item.classList.remove("show-text");
            }
        })

        question.classList.toggle("show-text");
    });
})