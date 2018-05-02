// abre o modal
$("#myBtn").onclick = function() {
    $('#modalHelp').style.display = "block";
}
// fechar pelo X
var span = $(".close")[0];
span.onclick = function() {
    $('#modalHelp').style.display = "none";
}
// fechar pelo botao "voltar"
$("#btnCancelar").onclick = function() {
    $('#modalHelp').style.display = "none";
}
// fechar clicando fora do modal
window.onclick = function(event) {
    if (event.target == $('#modalHelp')) {
        $('#modalHelp').style.display = "none";
    }
}