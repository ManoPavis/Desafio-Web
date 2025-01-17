class hello extends HTMLElement{
      
    constructor(){
       super(); 

      const hello = document.querySelector('#hello');
      const shadow = hello.attachShadow({ mode: "open" });
      const texto = document.createElement('span');
      texto.textContent = "Olá, Mundo! Eu sou um Web Component!";
      texto.setAttribute('class', 'texto');
      
      


      const style = document.createElement('style');
      style.textContent = `
       .texto{
          color: black;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 30px;
       }
       
      `
      shadow.appendChild(style)
      shadow.appendChild(texto)
      
    }
 }       

 customElements.define('hello-world', hello);