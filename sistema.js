const agentesInfo = require("./agentes_valorant.json")
console.log(agentesInfo)

function mostrarAgentes(){
agentesInfo.forEach((agentes)=>{
    console.log(agentes.nome + "---" + "Codinome: " + agentes.codinome + " tem a função de: " + agentes.classe + " faz a função de: " + agentes.funcao + " e tem: " + agentes.idade + " Anos.")
})
}

function adicionarItem(itemnovo){
    agentesInfo.push(itemnovo)
    

}

//adicione aqui o objeto novo:
const itemnovo ={
                nome: "Mateo Armendáriz De la Fuente",
                codinome: "Gekko",
                classe: "Iniciador",
                funcao: "Apoio",
                idade: "22",
                }

adicionarItem(itemnovo)
mostrarAgentes()


function converter(){
     agentesInfo.forEach((agentes)=>{
        agentes.idade=Number(agentes.idade)
     }) 
}

converter()
console.log(agentesInfo)



