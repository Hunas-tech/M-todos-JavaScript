let casa = {
    cor: 'white',
    sala: 15,
    cozinha: 10,
    banheiro: 8,
    quarto: 20,

    calcularTamanhoTotalCasaM2: function () {
        const tamanhoTotal = this.sala + this.cozinha + this.banheiro + this.quarto;
        console.log(`O tamanho da casa é de ${tamanhoTotal}m²`);
        return tamanhoTotal;
    }
};

casa.calcularTamanhoTotalCasaM2();

let a = 2.000000001;

console.log(a);
console.log(a.toFixed(3)); 
console.log(a.toString());



let b = 'texto da aula de metodos';
console.log(b.length);



let c = '10110';
console.log(Number.parseInt(c));
console.log(Number.parseInt());



const listaNotas = [
    { nome: 'Daniel', nota: 5 },
    { nome: 'Pedro', nota: 15 },
    { nome: 'Izabelle', nota: 18 },
    { nome: 'Nathalia', nota: 20 },
    { nome: 'Amanda', nota: 20 },
    { nome: 'João', nota: 20 },
    { nome: 'Marcus', nota: 12 },
    { nome: 'Sergio', nota: 13 },
    { nome: 'Diego', nota: 14 },
    { nome: 'Renan', nota: 11 },
    { nome: 'Rodrigo', nota: 9 },
    { nome: 'Messi', nota: 0 },
    { nome: 'CR7', nota: 0 }
];

    const alunosAprovados = listaNotas.filter(function (aluno) {
        return aluno.nota >12;
    });
    console.log(alunosAprovados);

    const alunosQueTiraramZero = listaNotas.find (function (aluno){
        return aluno.nota === 0;
    });
    console.log(alunosQueTiraramZero);


    const listaNomesAlunosAprovados = alunosAprovados.map(function (aluno) {
        return aluno.nome;;
    });
    console.log(listaNomesAlunosAprovados);