window.onload = function() {
    alert("Сторінка повністю завантажена!");
};

window.onunload = function() {
    alert("Користувач залишає сторінку.");
};

window.onbeforeprint = function() {
    alert("Сторінка буде надрукована.");
};

window.onafterprint = function() {
    alert("Сторінка була надрукована.");
};

window.onbeforeunload = function() {
    return "Ви дійсно хочете залишити сторінку?";
};

window.onblur = function() {
    console.log("Вікно втратило фокус.");
};

window.onfocus = function() {
    console.log("Вікно отримало фокус.");
};

window.onerror = function(message, source, lineno, colno, error) {
    console.log("Сталася помилка: " + message);
};

window.ononline = function() {
    alert("Документ тепер в мережі.");
};

window.onoffline = function() {
    alert("Документ перейшов в автономний режим.");
};

window.onresize = function() {
    console.log("Розмір вікна змінено.");
};
