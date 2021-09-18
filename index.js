// Traversing the DOM
// const buttons = document.querySelectorAll('.question-btn');
// buttons.forEach(function name(element) {
//     element.addEventListener('click',function (ele) {
//         const question=ele.currentTarget.parentElement.parentElement;
//        question.classList.toggle('show-text');
//     })
// });

//Using the query Selectors
const questions=document.querySelectorAll(".question");
questions.forEach(function (question){
 const buttons = question.querySelector('.question-btn');
 buttons.addEventListener("click",function () {
    question.classList.toggle("show-text");
 })
});

