
const webScrap = require("./webScrap");
const fs = require('fs');

console.log( "Chama webScrap");

webScrap( (lista) => {
    //console.log( "Lista obtida ", lista );

    // Serializa 'lista' para JSON
    let listaJson = JSON.stringify( lista );

    console.log( "Chama writeFile");
    // Escrever a lista para um ficheiro 
    fs.writeFile("concelhos.json",listaJson, function (err) {
        if (err) return console.log(err);
        console.log("Lista dos concelhos escrita para o ficheiro 'concelhos.json'");
      });
      console.log( "Depois de chamar writeFile");  
});

console.log("Depois de chamar o webScrap");