






























const nome1 = "João Renato Chiquito Iaroczinski"
const nome2 = "Gabriel dos Santos Xavier"
//------------------------------------------------------------------------------
const altura1 = 1.68
const altura2 = 1.91
//------------------------------------------------------------------------------
const serie1 = "2 Ano"
const serie2 = "2 Ano"
//------------------------------------------------------------------------------
const turma1 = "DSB"
const turma2 = "DSB"
//------------------------------------------------------------------------------    


const esportes1 = ["Esports", "Basquete", "Volei"]
const esportes2 = ["Esports", "Basquete", "Tênis de mesa"]
contador--

function apresentacao(){
    console.log("********************************************************************************************************************************************************************************************")
    console.log("Olá! Nós somos os alunos:", nome1, "e", nome2, ", na ordem temos", altura1,"cm", "e", altura2,"cm", "de altura e estamos no", serie1, "na turma", turma1, "do aurudo professor Patruca." )
    console.log("********************************************************************************************************************************************************************************************")
}

function esportes(){
    console.log("********************************************************************************************************************************************************************************************")
    console.log("Esportes do chiquito: ")
    esportes1.forEach((esporte)=>{
        console.log(esporte)
 })
    console.log("********************************************************************************************************************************************************************************************")
    console.log("Esportes do pipoca: ")
    esportes2.forEach((esporte)=>{
        console.log(esporte)
 })
   
}

function altura_1_MaiorQuePatruca(){
    console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------")
    if (altura1>1.73){
    console.log(nome1, "é maior que o professor.")
  }
    else if(altura1 == 1.73){
        console.log(nome1, "é da mesma altura que o professor.")
  }
    else{
        console.log(nome1, "é menor que o professor.")  
    }
}

function altura_2_MaiorQuePatruca(){
    console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------")
    if (altura2>1.73){
    console.log(nome2, "é maior que o professor.")
  }
    else if(altura2 == 1.73){
        console.log(nome2, "é da mesma altura que o professor.")
  }
    else{
        console.log(nome2, "é menor que o professor.")  
    }
    console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------")
}

function contadorDez_Negativo(){

   let contador = 0
    while(contador > -11){
        console.log(contador--)
    }   
}  
    




apresentacao()
esportes();
altura_1_MaiorQuePatruca();
altura_2_MaiorQuePatruca();
contadorDez_Negativo();
