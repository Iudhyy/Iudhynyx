function login(){
    var usuario = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    
    if (usuario == "" && email == "" && senha === ""){
        alert("preencha o campo :/");
    }
    else  {
        sessionStorage.setItem("login", usuario) 
        alert("bem vindo "+ sessionStorage.getItem("login"))
        location.replace("loc.html");
    }   
}
function  logado(){
    let teste = sessionStorage.getItem("login");
    document.getElementById("user").innerHTML = teste;
}