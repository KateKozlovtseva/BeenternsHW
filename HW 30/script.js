
window.addEventListener('load', function() {
    var button = document.getElementById("main-button");
    var secbutton = document.getElementById("secondary-button");

    var iframe = document.getElementById("myFrame");
    var elmnt = iframe.contentWindow.document.getElementById("number");

    var plus = document.getElementById("number-plus");

    button.addEventListener('click', function() {
        var sign = window.prompt('Введите число');
        if (isNaN(sign))
            elmnt.innerHTML = "Вы ввели не число. Попробуйте еще раз!";
        else{
            elmnt.innerHTML = sign.toLowerCase();
            secbutton.style.display = "block";
            plus.style.display = "block";
        }
    });

    secbutton.addEventListener('click', function() {
        plus.innerHTML = +elmnt.innerHTML + 1;
    });
});