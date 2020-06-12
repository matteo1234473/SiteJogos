/*----------------------------------------------------------------------------------------------Gravador*/
var tituloNotas = [];
var textoNotas = [];
var querJaFav = [];
var nota = []

function gravarNota() {
    const titulo = document.querySelector("#titulo").value;
    const texto = document.querySelector("#texto").value;
    const querJa = document.querySelector("#querJa").value;
    const notaJogo = document.querySelector("#nota").value;

    querJaFav.push(querJa);
    tituloNotas.push(titulo);
    textoNotas.push(texto);
    nota.push(notaJogo);

    
    atualizarListaNotas();
}

function atualizarListaNotas() {
    const elements = document.querySelectorAll(".item-show");

    for (let i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }


    for (let i = 0; i < tituloNotas.length; i++) {
        const cloneItem = document.querySelector("#base-item").cloneNode(true);
        const parent = document.querySelector("#content");
        parent.appendChild(cloneItem);
        cloneItem.className = "item-show";

        cloneItem.querySelector('#excluir').onclick = function() {
            if (confirm("Tem Certeza ?")) {
                tituloNotas.splice(i,1);
                textoNotas.splice(i, 1);
                querJaFav.splice(i,1);
                nota.splice(i,1);

                atualizarListaNotas();  
                } else {
                    return false;
                }
        }

        cloneItem.querySelector('#editar').onclick = function() {

            var editarJogo = prompt ('Edite o jogo') ;
            var editarEstilo = prompt ('Edite o Estilo');
            var editarQuer = prompt ('Edite o Status');
            var editarNota = prompt ('Edite a Nota');
                
                nota[i] = editarNota;
                tituloNotas[i] = editarJogo;
                textoNotas[i] = editarEstilo;
                querJaFav[i] = editarQuer;

           atualizarListaNotas();

        }

        cloneItem.querySelector(".item-title").textContent ="Jogo: " + tituloNotas[i] + " | " + nota[i];
        cloneItem.querySelector(".item-text").textContent ="Estilo: " + textoNotas[i];
        cloneItem.querySelector(".item-querJaFav").textContent ="Status: " + querJaFav[i];

    }
}
/*----------------------------------------------------------------------------------------------*/

