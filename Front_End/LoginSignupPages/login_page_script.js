let mainPageLink = "../MainPage/main_page.html";
let loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function(){
    window.location.href = mainPageLink;
});