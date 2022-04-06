botao = document.getElementById("voltar_ao_topo");

// Aparece ao rolar 100px da página
window.onscroll = function() {rolarPagina()};

function rolarPagina() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        botao.style.display = "block";
    } else {
        botao.style.display = "none";
    }
}

function voltarAoTopo() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });
}