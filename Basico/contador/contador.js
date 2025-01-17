   


class contador extends HTMLElement{
   constructor(){
      super();

      

      const buttup = document.createElement('butao');
      buttup.setAttribute('class', 'but');
      buttup.textContent = '+';
      buttup.addEventListener('click', () => {
      cont += 1
      span.textContent = cont;
      });
      
      let cont = 0;

      const contador = document.querySelector('#cont');
      const shadow = contador.attachShadow({mode: 'open'});
      const span = document.createElement('span');
      span.setAttribute('id', 'value');
      span.setAttribute('class', 'texto');
      span.textContent = cont;
      const value = document.getElementById('value');

      const style = document.createElement('style');
      style.textContent = `
       .texto{
            color: black;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 30px;

            
         }
         .but{
            color: black;
            font-family: URW Chancery L, cursive;
            font-size: 30px;
            margin-left: 10px;
            margin-right: 10px;
            
         }
         	`
      

      

      const buttdown = document.createElement('butao2');
      buttdown.setAttribute('class', 'but');
      buttdown.textContent = '-';
      buttdown.addEventListener('click', () => {
         cont -= 1
         span.textContent = cont;
      });

      shadow.appendChild(style);
      shadow.appendChild(buttup);
      shadow.appendChild(span); 
      shadow.appendChild(buttdown);
   }
}
customElements.define('custom-counter', contador);



