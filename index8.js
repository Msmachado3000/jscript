let celular = function(){
    this.cor = "prata";
    this.ligar = function()
    {
        console.log("Fazer uma Ligação");
        return "lidando...."
    }
}

let objeto = new celular();
console.log(objeto.ligar());