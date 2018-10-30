let agora = new Date();

console.log(agora.toLocaleDateString("pt-PT"));

let carros = ["Palio 98", "Toro", "Uno", "147", 10, true, new Date(), function(){}];

console.log(carros);
console.log(carros.length);
console.log(carros[0]);
console.log(carros[6]);
console.log(carros[6].getFullYear());

carros.forEach(function(value, index){
    console.log(index, value);
});
