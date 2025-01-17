class button extends HTMLElement {

    constructor(){
 
       super();
 
       const button = document.querySelector('#button');
       const shadow = button.attachShadow({mode:"open"});
       const texto = document.createElement('span');
       texto.textContent = 'Clique aqui';
       texto.setAttribute('class', 'texto');
       texto.setAttribute('label', 'Clique aqui');
       texto.addEventListener('click', () =>{
          console.log("Olha o cara ai mermo!");
 
 
       });
 
       const style = document.createElement('style');
         style.textContent = `
          .texto{
             color: black;
             font-family: Arial, Helvetica, sans-serif;
             font-size: 30px;
 
             background-color: red;
             border-radius: 10px
          }
              `
 
       
       
       shadow.appendChild(texto)
       shadow.appendChild(style)
 
 
    } 
    
 }

 customElements.define('custom-button', button);