






function addCart1(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma1", soma)
    window.location.replace("loc.html");

}
function addCart2(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma2", soma)
    window.location.replace("loc.html");

}
function addCart3(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma3", soma)
    window.location.replace("loc.html");

}
function addCart4(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma4", soma)
    window.location.replace("loc.html");

}
function addCart5(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma5", soma)
    window.location.replace("loc.html");

}
function addCart6(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma6", soma)
    window.location.replace("loc.html");

}
function addCart7(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma7", soma)
    window.location.replace("loc.html");

}
function addCart8(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma8", soma)
    window.location.replace("loc.html");

}
function addCart9(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma9", soma)
    window.location.replace("loc.html");

}
function addCart10(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma10", soma)
    window.location.replace("loc.html");

}
function addCart11(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma11", soma)
    window.location.replace("loc.html");

}
function addCart12(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma12", soma)
    window.location.replace("loc.html");

}
function addCart13(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma13", soma)
    window.location.replace("loc.html");

}
function addCart14(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma14", soma)
    window.location.replace("loc.html");

}
function addCart15(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma15", soma)
    window.location.replace("loc.html");

}
function addCart16(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma16", soma)
    window.location.replace("loc.html");

}
function addCart17(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma17", soma)
    window.location.replace("loc.html");

}
function addCart18(){
    let preco = document.getElementById("preco").innerHTML;
    preco = preco.replace("R$","");
    preco = preco.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preco * quantidade;
    sessionStorage.setItem("soma18", soma)
    window.location.replace("loc.html");

}
function getCart(){
    let totalCart = parseFloat(sessionStorage.getItem("soma1"))+
                    parseFloat(sessionStorage.getItem("soma2"))+
                    parseFloat(sessionStorage.getItem("soma3"))+
                    parseFloat(sessionStorage.getItem("soma4"))+
                    parseFloat(sessionStorage.getItem("soma5"))+
                    parseFloat(sessionStorage.getItem("soma6"))+
                    parseFloat(sessionStorage.getItem("soma7"))+
                    parseFloat(sessionStorage.getItem("soma8"))+
                    parseFloat(sessionStorage.getItem("soma9"))+
                    parseFloat(sessionStorage.getItem("soma10"))+
                    parseFloat(sessionStorage.getItem("soma11"))+
                    parseFloat(sessionStorage.getItem("soma12"))+
                    parseFloat(sessionStorage.getItem("soma13"))+
                    parseFloat(sessionStorage.getItem("soma14"))+
                    parseFloat(sessionStorage.getItem("soma15"))+
                    parseFloat(sessionStorage.getItem("soma16"))+
                    parseFloat(sessionStorage.getItem("soma17"))+
                    parseFloat(sessionStorage.getItem("soma18"));
    document.getElementById("totalCarrinho").value = "R$"+totalCart;


    let parcela = document.getElementById("parcela");
parcela.addEventListener("click", (e)=>{
switch (parcela.value){
    case "1":
    document.getElementById("card").value = "R$ " + (totalCart/1).toFixed(2)

    break;
    case "2":
    document.getElementById("card").value = "R$ " + (totalCart/2).toFixed(2)

    break;
    case "3":
    document.getElementById("card").value = "R$ " + (totalCart/3).toFixed(2)

    break;
    case "4":
    document.getElementById("card").value = "R$ " + (totalCart/4).toFixed(2)

    break;

    case "5":
        document.getElementById("card").value = "R$ " + (totalCart/5).toFixed(2)
    
        break;
}
})

}


function session(){
                    sessionStorage.setItem("soma1",0);
                    sessionStorage.setItem("soma2",0);
                    sessionStorage.setItem("soma3",0);
                    sessionStorage.setItem("soma4",0);
                    sessionStorage.setItem("soma5",0);
                    sessionStorage.setItem("soma6",0);
                    sessionStorage.setItem("soma7",0);
                    sessionStorage.setItem("soma8",0);
                    sessionStorage.setItem("soma9",0);
                    sessionStorage.setItem("soma10",0);
                    sessionStorage.setItem("soma11",0);
                    sessionStorage.setItem("soma12",0);
                    sessionStorage.setItem("soma13",0);
                    sessionStorage.setItem("soma14",0);
                    sessionStorage.setItem("soma15",0);
                    sessionStorage.setItem("soma16",0);
                    sessionStorage.setItem("soma17",0);
                    sessionStorage.setItem("soma18",0);

    
}

