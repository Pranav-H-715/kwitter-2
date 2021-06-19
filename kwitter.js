function login(){
    window.location="kwitter_page.html"
    var username = document.getElementById("user-name").value
    localStorage.setItem("user",username)
}