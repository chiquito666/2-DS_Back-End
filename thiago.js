const produtos = ["Whisky", "Vodka", "Brahma", "Gin", "Corote", "Camelinho", "Bananinha", "Jurupinga", "Velho Barreiro", "Refri"]
const preco = [150, 40, 4, 60, 10, 7, 30, 40, 60, 10]

function items(){

    let contador = 0
    while (contador < produtos.length){
        console.log("Produto: " + produtos[contador] + " | Preço: " + preco[contador])
        contador ++
        
        
    }
}

function  adicionaritem(nome, valor){
    
    produtos.push(nome)
    preco.push(valor)
    console.log("---------------------------------------------------------------------------------------------")
    console.log("UM ITEM FOI ADICIONADO: ")
}

function removeritem([]){

    produtos.push([])
    preco.push([])
    
    console.log("---------------------------------------------------------------------------------------------")
    console.log("UM ITEM FOI REMOVIDO: ")
}

items()
adicionaritem("Monster", 15)
items()
removeritem([11])
items()