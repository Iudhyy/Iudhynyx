// const cep = document.querySelector("#cep")

// cep.addEventListener("blur",(e)=>
// {
//     let search = cep.value.replace("-", "")
//     const options ={
//         method: 'GET',
//         mode: 'cors',
//         Cache:'default'
//     }
//     fetch(`https://viacep.com.br/ws/${search}/json`,options)


//     .then(Response => {
//         Response.json()
//         .then(data => mostraDados(data))
//     })
//     .catch(e => console.log('Erro inesperado' + e,message))
// })

// const mostrarDados = (result) => {
//     for (const campo in result){
//         if (document.querySelector("#"+campo)){
//         document.querySelector("#"+campo).value = result[campo]
//         }
//     }
// }
const cep = document.querySelector("#cep")

//aqui evento perde o foco e busco os valores do cep e prepara para envio 
cep.addEventListener("blur",(e)=>
{          //arrow function
    let search = cep.value.replace("-", "")
    const options ={
        method: 'GET', //solicitação
        mode: 'cors',  //acesso externo
        Cache: 'default'
    }


    
//aqui envia o cep digitado para o via cep e retorna
    fetch(`https://viacep.com.br/ws/${search}/json`,options)
    //quando se acessa uma URl com fatch api retorna se uma promessa
    //se der certo .then()
    //se der errado . catch()
    .then(Response => {Response.json()
        .then(data => mostrarDados(data))
    })
    .catch(e => console.log('Erro Inesperado '+ e,message))
})

//alimentar todos os campos do formulário
const mostrarDados = (result)=>{ //aqui busco o retorno
    for(const campo in result){  //aqui armazenos todo o retorno na variavel campo
        if(document.querySelector("#"+campo)){ //verifico se o campo existe
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}





/*
const cep = document.querySelector("#cep")
//alimentar todos os campos do formulário
const mostrarDados = (result)=>{ //aqui busco o retorno
    for(const campo in result){  //aqui armazenos todo o retorno na variavel campo
        if(document.querySelector("#"+campo)){ //verifico se o campo existe
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}




//aqui evento perde o foco e busco os valores do cep e prepara para envio 
cep.addEventListener("blur",(e)=>{          //arrow function
    let search = cep.value.replace("-", "")
    const options ={
        method: 'GET', //solicitação
        mode: 'cors',  //acesso externo
        Cache: 'default'
    }
//aqui envia o cep digitado para o via cep e retorna
    fetch(`https://viacep.com.br/ws/${search}/json`,options)
    //quando se acessa uma URl com fatch api retorna se uma promessa
    //se der certo .then()
    //se der errado . catch()
    .then(Response => {Response.json()
        .then(data => mostrarDados(data))
    })
    .catch(e => console.log('Erro Inesperado '+ e,message))
})
*/


    
