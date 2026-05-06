
/* COPIE E COLE ESTE ENUNCIADO NO VSCODE! */

/* Prova prática de recuperação do nivelamento (AV1) + prova (AV2).
Pode consultar o seu GitHub ou o do professor: https://github.com/profpatrickoli
Cópia de outros colegas ou uso de outros sites na internet (Google, IA, etc) = zero na recuperação! 
A prova pode ser realizada em duplas! Responder cada questão com as informações de cada integrante da dupla, basta criar variáveis com nomes diferentes. Exemplo: aluno1 e aluno2 
Para enviar a atividade, poste o código no GitHub de algum integrante da dupla e envie o link na atividade do Class. */

/* 1) (1,0 p) Crie variáveis para armazenar seu nome completo, altura, série e turma. Após isso, mostre no terminal uma mensagem personalizada se apresentando. */

/* 2) (1,0 p) Crie uma lista com 3 esportes que você gosta e mostre-os no terminal, usando o laço de repetição que preferir */

/* 3) (1,5 p) Crie uma condição que verifica se você é maior que o professor Patrick, que possui 1.73 de altura */

/* 4) (1,5 p) Crie um laço de repetição que conta de 0 até -10 */



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
