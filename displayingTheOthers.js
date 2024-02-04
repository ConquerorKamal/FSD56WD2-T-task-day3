let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();


xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function(){
    let countries = JSON.parse(xhr.responseText)
    let k = 0
    while(k<countries.length){
       

        console.log(countries[k].region)
        console.log(countries[k].subregion)
        console.log(countries[k].population)
        console.log(countries[k].name)

        k++
    }
   
   
}