var carros = ["Gol", "Palio","Uno"];
console.log (carros);

var primeiroCarro = carros[0];
var segundoCarro = carros[1];
var terceiroCarro = carros[2]
console.log("primeira posição: " + primeiroCarro);
console.log("segunda posição: " + segundoCarro);
console.log("terceira posição: " + terceiroCarro);

carros[2] = "argo";
console.log(carros[2]);

console.log(terceiroCarro);

console.log("tamanho do Array: " + carros.length);

console.log("ultimo elento do arry:" + carros[carros.length - 1]);

carros[3] = "sandero";
console.log("ultimo elento do arry:" + carros[carros.length - 1]);

carros[carros.length] = "honda fit";
console.log("ultimo elento do arry:" + carros[carros.length - 1]);

carros.push("polo");
console.log(carros);

carros.push(123);
console.log(carros);