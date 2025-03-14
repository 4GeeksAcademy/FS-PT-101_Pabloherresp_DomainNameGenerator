import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //declaración de datos del dominio
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon','sides','sitcom', 'audio'];
  let dom = ['.es','.com','.us','.io']


  //función que realiza la acción principal
  const printResult = (i,j,k,m) => {
    let result = ""

    //condicional para "domain hacks"
    if(k.endsWith("es") && m == ".es"){
      result = i+j+ k.substring(0,k.length - 2) +m
    } else if(k.endsWith("com") && m == ".com"){
      result = i+j+ k.substring(0,k.length - 3) +m
    } else if(k.endsWith("io") && m == ".io"){
      result = i+j+ k.substring(0,k.length - 2) +m
    }
    else{
      result = i+j+k+m
    }

    //mostrar en consola
    console.log(result)

    //mostrar en HTML
    document.getElementById("dom-" + m.substring(1)).innerHTML += `<p class="text-center">${result}</p>`
  }

  //pronoun.forEach(i => adj.forEach(j => noun.forEach(k => dom.forEach(m => printResult(i,j,k,m)))))

  //loop de los elementos
  for(let i in pronoun)
    for(let j in adj)
      for(let k in noun)
        for(let m in dom)
          printResult(pronoun[i],adj[j],noun[k],dom[m])


  console.log("Hello Rigo from the console!");
};
