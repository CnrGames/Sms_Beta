



class Produto {

    Nome = '';
    tipo = 'tipo';
    Quantidade = '';

    constructor(nome, tipo, quant) {

        this.Nome = nome;
        this.tipo = tipo;
        this.Quantidade = quant;

    }

}


let tipos = ["face", "protector", 'bateria', "Cabo", "tampa"];


let faceNkia = new Produto('Nokia-Z10', "Face", 25);
let lcdCore = new Produto('Morep-Msx', "Lcd", 5);
let batCore = new Produto('Bl-5cb', "Bateria", 67);
let j5P = new Produto('J5', "Protector", 5);

let produtos = [faceNkia, lcdCore, batCore, j5P];

export const listaA = Array.from({ length: 10 }, (_, index) => `a ${index + 1}`);
export const listaB = Array.from({ length: 15 }, (_, index) => `b ${index + 1}`);
export const listaC = Array.from({ length: 20 }, (_, index) => `c ${index + 1}`);



export default produtos;
export { tipos };
