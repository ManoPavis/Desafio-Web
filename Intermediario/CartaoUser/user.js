
function constructor(){
    const Card = document.querySelector('#Card');
    const shadow = Card.attachShadow({mode: 'open'});
    const img = document.createElement('img');
    img.setAttribute('src', 'Gotica.webp');
    img.setAttribute('class','imagem');
    const div = document.createElement('div');
    div.setAttribute('class', 'fundo');
    div.insertAdjacentHTML('beforeend', '<img src="Gotica.webp" class="imagem"></img>');
    div.insertAdjacentHTML('beforeend', '<h1 class="texto">Julia Ernandes</h1>');
    div.insertAdjacentHTML('beforeend', '<h2 class="texto">juliafraga@gmail.com</h2>');
    div.insertAdjacentHTML('beforeend','<button class="meuBotao" onclick="chat()">Detalhes</button>');
   
    

    const style = document.createElement('style');
    style.textContent = `
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    }
    .imagem{
    margin-top: 50px;
    margin-left:33%;
    height: 140px;
    width: 140px;
    object-fit: cover;
    border-radius: 50%;
    }   
    .fundo{
    height: 350px;
    width: 400px;
    background-color: gray;
    border-radius: 10%;
    border: 5px solid #ccc;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    
    }
    .texto{
        text-align: center;
    
    }
    .meuBotao{
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: 2px solid white;
     box-shadow: 0 0 10px white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    margin-left: 36%;
    }
    
    `
    shadow.appendChild(div);
    shadow.appendChild(style);
}

function chat(){
    console.log('Esta pessoa não te quer. Por favor não insista.');
}


customElements.define('user-card', constructor());