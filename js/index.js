const desconto = 0.1;

let produto ="Mousepad Star Wars";
let valor_produto = 100;
let codigo_produto = '8290385'

let produto2 ="teclado gamer";
let valor_produto2 = 500;

// criaçao de objeto
let product = {
    produto: "Mousepad Star Wars",
    codigo_produto: '8290385',
    valor: 87,
    
};

let teclado = {
    codigo:"848439",
    nome :"teclado",
    valor :500
};

//utilizaçao do objetivo

product.valor //saida disto é 100

function efetuar_desconto( produto_para_dar_desconto ){
    let valor = produto_para_dar_desconto.valor;

    //criando uma variavel que vai receber
    //o valor do produto vezes o valor da const
    //desconto lá no inicio  do codigo
    //100*0.1, qual valor esta inserido em
    //valorDesconto
    let valorDesconto = valor * desconto;
    console.log(valor - valorDesconto)

    

};

efetuar_desconto( product );
efetuar_desconto( teclado );



//criar uma funçao oara adicionar juros 
// nos valores dos produtos que serao
//comprado parcelando
//1 a 10 parcelas nao tera juros
//de 11 e 12 parcelas terao juros
// juros de 0.02

function compraParcelada ( produto, numParcelas ) {
    const juros = 0.02;
    if (numParcelas <= 12){
       if( numParcelas <= 10){
         let valorParcelado = produto.valor / numParcelas;
         console.log(valorParcelado)
    }else{
     let valorDoJuros = produto.valor * juros
     let valorProdutoComJuros = produto.valor + valorDoJuros;
     let valorParcelado = valorProdutoComJuros / numParcelas;
     console.log(valorParcelado)
    }
    };
}

compraParcelada(teclado, 12);

