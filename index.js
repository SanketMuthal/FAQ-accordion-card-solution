
var ques = document.querySelectorAll(".questions");
var ans = document.querySelectorAll(".answers");

for (let i = 0; i < 5; i++) {

    ques[i].addEventListener("click", function () {             // identifies click.
                                                                   
        for (let j = 0; j < 5; j++) {
          if (j !== i) {

            ques[j].classList.remove("questionAfterClick") ;  // this applies to unclicked question
            ans[j].classList.remove("answerAfterClick") ;     // this applies to unclicked answer  
          }           
        }

        var body = this.nextElementSibling;                     // for answer next to the question.       
                                                               
        this.classList.toggle("questionAfterClick");            // this applies to clicked question
        body.classList.toggle("answerAfterClick");              // this applies to clicked answer
     
    });           
}
