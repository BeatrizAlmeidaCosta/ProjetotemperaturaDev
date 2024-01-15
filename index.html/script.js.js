// variaveis ==> espaço da memoria do comutador no qual se guarda algo
//funçao==> um trecho de codigo que é executado quando chamado

let chave = "634154312d97347fa563bdac2998f20e"
async function buscarcidade(cidade){ let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
cidade + 
"&appid=" + 
chave +
"&lang=pt_br" + 
"&units=metric") 
.then( resposta => resposta.json())
colocarnatela(dados)
}

function colocarnatela(dados){ console.log(dados) 
document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
document.querySelector(".descricao").innerHTML = dados.weather[0].description
document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
document.querySelector(".icone").src = "http://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}


function cliqueinobotao(){let cidade = document.querySelector(".input-cidade").value

buscarcidade(cidade)
}
