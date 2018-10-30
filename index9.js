class celular{
    constructor(){
        this.cor = "prata";
    }
    ligar(){
        console.log("Fazer uma Ligação");
        return "lidando....";
    }
}

let objeto = new celular();
console.log(objeto.cor);
console.log(objeto.ligar());