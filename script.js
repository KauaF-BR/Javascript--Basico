var idade = prompt("Qual sua idade?");

if (idade >= 75) {
  alert("bem vindo senhor");
  alert("Recomendamos beber com moderação");
  alert("em que posso te ajudar?");
} 


else if (idade >= 18) {
  alert("bem vindo a loja");
  alert("em que posso te ajudar?");
} 

else if (idade < 18) {
  alert("você nao tem idade pra acessar nossa loja");
  alert("ficaremos felizes em te atender quando você for maior de idade");
} 


else alert("o campo nao foi preenchido corretamente");
