const acc = document.getElementsByClassName("accordion_btn");
var i;

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(event) {
        this.classList.toggle("active");
        this.classList.toggle("accordion_btn:hover");

    const panel = this.nextElementSibling;
    const plusIcon = this.querySelector(".btn-plus")
    const minusIcon = this.querySelector(".btn-minus");
    if (panel.style.display === "block") {
        panel.style.display = "none";
        plusIcon.style.display = "block";
        minusIcon.style.display = "none";
    } else {
        panel.style.display = "block";
        minusIcon.style.display = "block";
        plusIcon.style.display = "none";
    };

 });
}; 




/* const acc = document.getElementsByClassName("accordion_btn");
var i;

for (let i = 0; i < acc.length; i++) {
    this.addEventListener("click", (event) => {
        const target = event.target;
        target.classList.toggle("active");
        target.classList.toggle("accordion_btn:hover");

    const panel = target.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    } 
 });
}  *//// Does not work perhaps bc i have img in the btn? so the nextElementSibling is img not my div with panel class
 //above speculations was wrong deadass. You cannot use an arrow function (anonymous) bc it interferes w keyword this and target(?)
