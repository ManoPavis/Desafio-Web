class meuModal extends HTMLElement{
  constructor(){
    super()

    const modal = document.querySelector('#modal');
    const shadow = modal.attachShadow({mode:'open'});
    const dialog = document.createElement('dialog');
    dialog.setAttribute('title', 'é Cego');
    
    dialog.innerHTML = `
    <div>
    <h1>Amor</h1>
    <button id="InnerClose">Ok</button>
    </div>
    
    `
    const buttonOpen = document.createElement('button');
    buttonOpen.textContent = 'Open'
    buttonOpen.onclick = () => {
      dialog.showModal();
    }

    dialog.querySelector('#InnerClose').onclick = () => {
      dialog.close(); // Fecha o dialog
    };
    
    const style = document.createElement('style');
    style.textContent = `
    dialog {
            border: none;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            padding: 20px;
            width: 300px;
            max-width: 90%;
            background-color: #fff;
            text-align: center;
            font-family: Arial, sans-serif;
        }

        
        dialog::backdrop {
            background: rgba(0, 0, 0, 0.5);
        }

        
        slot[name="modal-title"] h1 {
            font-size: 1.5em;
            color: #333;
            margin-bottom: 15px;
        }

        
        button {
            padding: 10px 20px;
            font-size: 1em;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: #007BFF;
            color: #fff;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #0056b3;
        }

        
        #closeModal {
            margin-top: 15px;
        }`;

    shadow.appendChild(style);   
    shadow.appendChild(buttonOpen);
    shadow.appendChild(dialog);
  }
}

customElements.define('custom-modal', meuModal);