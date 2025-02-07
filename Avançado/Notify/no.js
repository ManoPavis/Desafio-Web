class meuNotifica extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.atributos();
        this.tempo();
    }

    atributos() {
        const tipo = this.getAttribute('tipo') || 'alert';
        const mensagem = this.getAttribute('mensagem') || 'Nada';
        const styles = this.getStyles(tipo);

        this.shadowRoot.innerHTML = `
            <style>
                .notification {
                    padding: 10px 15px;
                    border-radius: 5px;
                    color: white;
                    font-family: Arial, sans-serif;
                    display: inline-block;
                    animation: fadeIn 0.3s ease-in;
                }
                .success { background-color: green; }
                .error { background-color: red; }
                .alert { background-color: orange; }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
            </style>
            <div class="notification ${styles}">${mensagem}</div>
        `;
    }

    getStyles(tipo) {
        switch (tipo) {
            case 'success': return 'success';
            case 'error': return 'error';
            case 'alert': return 'alert';
            default: return 'alert';
        }
    }

    tempo() {
        const duracao = parseInt(this.getAttribute('duracao')) || 3000;
        setTimeout(() => {
            this.shadowRoot.querySelector('.notification').style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => this.remove(), 300);
        }, duracao);
    }
}

customElements.define('custom-notification', meuNotifica); 