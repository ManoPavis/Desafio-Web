var myArray = [
    {'nome':'Michael', 'idade':'30', 'data_de_nascimento':'11/10/1989'},
    {'nome':'Jéssica', 'idade':'32', 'data_de_nascimento':'11/10/1987'},
    {'nome':'Pedro', 'idade':'17', 'data_de_nascimento':'30/05/2007'},
]

CriarTable(myArray)

function CriarTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].nome}</td>
                        <td>${data[i].idade}</td>
                        <td>${data[i].data_de_nascimento}</td>
                  </tr>`
        table.innerHTML += row


    }
}

customElements.define('data-table', CriarTable());