const agentesInfo = require("./agentes_valorant.json")
console.log(agentesInfo)

agentesInfo.forEach((agentes)=>{
    console.log(agentes.nome + "---" + "Codinome: " + agentes.codinome + " tem a função de: " + agentes.classe + " faz a função de: " + agentes.funcao + " e tem: " + agentes.idade + " Anos.")
})



