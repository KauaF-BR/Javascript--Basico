var nota1 = 9.5
var nota2 = 6.9


var media = (nota1 + nota2) / 2


var conceito = ""

if(media >= 8){

    var conceito = "Ótimo"
}

else if( media >= 6.5){

    
    conceito = "Bom"
}

else {

    conceito = "Regular"

}   
console.log(media)                                                                          
console.log(conceito)       

switch(conceito){

    case "Ótimo":
    
    case "Bom":

    default ""


}