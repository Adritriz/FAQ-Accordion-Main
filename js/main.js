const acc = document.getElementsByClassName("accordion_btn");
var i;

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(event) {
        this.classList.toggle("active");
        this.classList.toggle("accordion_btn:hover");

    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    };

 });
}; 



function chngimg() {
    const btnImg = document.getElementsByClassName("btn-plus").src;
    if (btnImg.indexOf('icon-plus.svg') !=-1) {
        document.getElementsByClassName("btn-plus").src = 'assets/images/icon-minus.svg';
    } else {
        document.getElementsByClassName("btn-plus").src = 'assets/images/icon-plus.svg'
    };
}



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
 
