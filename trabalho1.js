
const produtos = [ "Ak47", "AWP", "Galil", "Mac-10", "Desert Eagle", "Tec-9", "M4A1-S", "M4A4", "MP9", "Five-Seven"]
const preco = [ 2700, 4750, 2000, 1050, 700, 500, 3100, 3100, 1250, 500]


function contador1(){

    var contador = 0 

    while(contador < 10){
    console.log(produtos[contador] + ( " = ") + preco[contador])
    contador++
   }
}


function contador2(){

    var contador = 0 

    while(contador < 11){
        console.log(produtos[contador] + ( " = ") + preco[contador])
        contador++
    
    }
}

function adicionaritem(nome, valor){
     
    //coloque seu item aqui:
    produtos.push(nome)
    preco.push(valor)

}

function removeritem([]){
    
    //coloque a posição do item que quer ser removido aqui:
    produtos.splice()

}


console.log("Aqui está o estoque: ")
contador1();

adicionaritem("Dual Berettas", 300);

console.log("------------------------------------------------------------------------------------------")
console.log("Um item foi adicionado.")
contador2();

console.log("------------------------------------------------------------------------------------------")
removeritem([11, 11])
console.log("Um item foi removido.")
contador1();










