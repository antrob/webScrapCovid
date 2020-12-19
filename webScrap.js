// webScrap.js 

const urlSite = "https://tvi24.iol.pt/geral/30-11-2020/veja-a-lista-do-numero-de-casos-por-concelho-por-100-mil-habitantes";

// Vamos usar o 'node-fetch' module do npm
// A light-weight module that brings window.fetch to Node.js
const fetch = require('node-fetch');

function webScrapCovid( callback ) {

    fetch(urlSite)
    .then(res => res.text())
    .then(data => { 
        let lista = extrairDoHtml( data );
        callback( lista );
    })
    .catch( err => console.log("Error: " + err.message) );
    
}

function extrairDoHtml( html ) {
    console.log( "A extrair do Html"  );

    let regExp = new RegExp("<tr>[^<]*<td>(?<concelho>[^<]*)</td>[^<]*<td[^>]*>(?<casos>[^<]*)<", "gi");

    let matches = html.matchAll(regExp);
    
    let lista = [];
    for (const match of matches) 
    {
        //console.log(match.index);   
        //console.log(match.groups);
        //console.log(match.groups.concelho, match.groups.casos );
        lista.push( { concelho: match.groups.concelho, casos: Number( match.groups.casos )} );
    }

    return( lista );
}

module.exports = webScrapCovid;

