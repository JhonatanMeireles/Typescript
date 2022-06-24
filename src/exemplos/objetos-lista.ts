const pessoa = {
    nome:'Mariana',
    idade: 28,
    profissao:'desenvolvedora'
}

pessoa.idade = 25;

const Andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const Paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 25,
    profissao: Profissao.Desenvolvedora
}
const maria: Pessoa = {
    nome: 'Maria',
    idade: 25,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante ={
    nome: 'Jessica',
    idade: 18,
    materias: ['Matemática','Português']

}

const monica: Estudante ={
    nome: 'Jessica',
    idade: 18,
    materias: ['Matemática','Português']

}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item);
    }
}

listar(monica.materias);