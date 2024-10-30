//exercicio-1

function formatarNome (nomeCompleto){
    const nomeMaisculo = nomeCompleto.toUpperCase ();
    const nomeMinusculo = nomeCompleto.toLowerCase ();

console.log("Nome em Maisculo:" , nomeMaisculo);
console.log("Nome em minusculo:", nomeMinusculo);
}
const nome ="Thiago"
formatarNome(nome);


//exercicio-2

let frase = 'Amigao';
console.log(frase.includes('a') ? frase.indexOf('a') : 'Não encontrado');


//exercicio-3

let texto = 'Tricolor é tri mundial';
console.log(texto.slice(10, 30));


//exercicio-4

let mensagem = 'Os tricolores estao por ai '.concat('Domingao tem jogo nois vai fazer fuzue');
console.log(mensagem);


//exercicio-5

let novaFrase = 'carros sao velozes e pequenos'.replace(/carro/g, 'caminhao');
console.log(novaFrase);


//exercicio-6

let frase1 = 'energia solar e bem legal';
let palavrasComHifen = frase1.split(' ').join('-');
console.log(palavrasComHifen);


//exercicio-7

let fila = [55, 56, 57, 58, 59];
let senhaAtendida = fila.pop();

console.log('Fila:', fila);
console.log('Senha atendida:', senhaAtendida);


//exercicio-8

let listaDeClientes = [];

function adicionarCliente(nome) {
    listaDeClientes.unshift(nome);
}

function atenderCliente() {
    return listaDeClientes.length > 0 ? listaDeClientes.shift() : "Não há clientes na fila.";
}

adicionarCliente("Alef");
adicionarCliente("Thiago");
console.log(atenderCliente()); 
console.log(atenderCliente()); 
console.log(atenderCliente()); 



//exercicio-9

function inverterLista(numeros) {
    return numeros.reverse();
}

const listaNumeros = [1, 2, 3, 4, 5];
const listaInvertida = inverterLista(listaNumeros.slice()); // Usamos slice() para não modificar a original

console.log("Lista original:", listaNumeros);
console.log("Lista invertida:", listaInvertida);



//exercicio-10

const precos = [100, 200, 300, 400, 500];
const precosComDesconto = precos.map(preco => preco * 0.9); 

console.log("Preços com desconto:", precosComDesconto);



//exercicio-11

const notas = [5.5, 7.2, 8.0, 6.9, 9.1];
const aprovados = notas.filter(nota => nota > 7); 

console.log("Alunos aprovados:", aprovados);


//exercicio-12

function calcularTotal(valores) {
    const total = valores.reduce((acc, valor) => acc + valor, 0);
    console.log("Total:", total);
}
calcularTotal([10, 20, 30]);


//exercicio-13

function ordenarLivros(titulos) {
    const titulosOrdenados = titulos.sort();
    console.log(titulosOrdenados);
}
ordenarLivros(["O Senhor dos Anéis", "1984", "Dom Quixote"]);


//exercicio-14

function gerarNumeroAleatorio() {
    const numero = Math.floor(Math.random() * 101);
    console.log(numero);
}
gerarNumeroAleatorio();


//exercicio-15

function exibirDadosCliente(cliente) {
    console.log("Campos:", Object.keys(cliente));
    console.log("Dados:", Object.values(cliente));
}
exibirDadosCliente({ nome: "João", idade: 30 });


//exercicio-16

const carro = {
    marca: "Ford",
    modelo: "Fusion",
    ano: 2020,
    detalhes: function() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
};
carro.detalhes();


//exercicio-17

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.detalhes = function() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    };
}
const funcionario = new Pessoa("Maria", 28);
funcionario.detalhes();


//exercicio-18

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    detalhes() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco}`);
    }
}
const produto = new Produto("Cadeira", 150);
produto.detalhes();


//exercicio-19

const relogio = {
    hora: new Date().toLocaleTimeString(),
    exibirHora: function() {
        setTimeout(() => {
            console.log(`Hora atual: ${this.hora}`);
        }, 1000);
    }
};
relogio.exibirHora();


//exercicio-20

const usuario = {
    nome: "Carlos",
    email: "carlos@example.com",
    exibirUsuario: function() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}`);
    }
};
const mostrarUsuario = usuario.exibirUsuario.bind(usuario);
mostrarUsuario();


//exercicio-21

function converterParaInteiro(numero) {
    console.log(parseInt(numero));
}
converterParaInteiro("10.5");


//exercicio-22

function converterArrayParaInteiros(array) {
    const inteiros = array.map(num => parseInt(num));
    console.log(inteiros);
}
converterArrayParaInteiros(["1", "2.5", "3", "4.8"]);
