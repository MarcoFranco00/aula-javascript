
function clicou(){
   document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
   //console.log(document.getElementById("agradecimento"));
   //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://mangalivre.net");
    //window.location.href = "https://mangalivre.net"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto"); 
}

function voltar(elemento){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function loud(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)

}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
var validar= 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validaIdade(idade)
console.log(validar);
*/

/*
var d= new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getUTCMinutes);
*/

/*
var count = 0;
for(count=0; count <= 5; count++ ){
    alert(count);
}
*/

/*
var count = 0;
while(count < 5);{
console.log(count);
alert(count);
count++;
};
*/

/*
var idade= prompt("Qual a sua idade?");
if(idade => 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var frutas= [{nome:"maca", cor:"vermelha"}, {nome: "uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta= {nome:"maca", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var lista= ["maca", "pera", "laranja"];
lista.pop();
lista.push("uva")
*/

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" "));

//var nome= "Marco Franco";
//var idade= 17
//var idade2= 10
//var frase= "Japao e o melhor time do mundo."
//alert("Bem vindo " + nome + "sua idade é " + idade);
//alert(idade + idade2)
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japao", "Brasil"));
//alert(frase.replace("Japao", "Brasil"));