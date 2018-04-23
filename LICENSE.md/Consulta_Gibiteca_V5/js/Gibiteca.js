//data de entrega 23
//prova avaliação heuristica dia 27

//$("#txtHeroi").focus();

//MASCARA PARA ENTRADA DE TEXTO NOS CAMPOS:
$(document).ready(function(){
	$('#txtHeroi').mask('C',{translation: {'C': {pattern: /[A-Z/,\s]/i,recursive: true}}});
	$('#txtAssunto').mask('C',{translation: {'C': {pattern: /[A-Z/,\s]/i,recursive: true}}});
	//$('#txtIsbn').mask('C',{translation: {'C': {pattern: /[A-Z\s\d]/i{3},recursive: true,reverse: true}}});
	$("#txtIsbn").mask("000-00-000-0000-0",{placeholder: "DDD-DD-DDD-DDDD-D"});
	$('#txtTitulo').mask('C',{translation: {'C': {pattern: /[A-Z/,\s\d]/i,recursive: true}}});
	$('#txtAutor').mask('C',{translation: {'C': {pattern: /[A-Z/,\s]/i,recursive: true}}});
	$('#txtDesenhista').mask('C',{translation: {'C': {pattern: /[A-Z/,\s]/i,recursive: true}}});
});

// -------- FUNÇÃO PARA PESQUISAR CAMPOS ---------
var cancelar = 0;
var tamanho;

function pesquisarRef() {
	//CHECA SE OS CAMPOS ESTÃO VAZIOS
	var checacampos=5;
	if ($("#txtHeroi").val()==""){checacampos--;}
	if ($("#txtAssunto").val()==""){checacampos--;}
	if ($("#txtISBN").val()==""){checacampos--;}
	if ($("#txtTitulo").val()==""){checacampos--;}
	if ($("#txtAutor").val()==""){checacampos--;}
	if ($("#txtDesenhista").val()==""){checacampos--;}

	if (checacampos==0)
		alert("Nenhum campo de pesquisa foi preenchido! Digite algo para pesquisar.");
	else{
		cancelar=0;
		//TROCA O BOTAO PESQUISAR PELO BOTAO CANCELAR
		$("#btnPesquisar").removeClass("visivel");
		$("#btnPesquisar").addClass("invisivel");
		$("#btnCancelar").removeClass("invisivel");
		$("#btnCancelar").addClass("visivel");
		$("body").css("cursor", "progress");
		tamanho = 1;
		var id = setInterval(barra, 100);
		function barra() {
			if (tamanho >= 100) {
				clearInterval(id);
				if (cancelar==1)
					alert("Você interrompeu a busca - nenhum resultado foi encontrado.");
				else
					alert("Terminamos a pesquisa mas nenhum gibi foi encontrado com os termos pesquisados. Tente procurar por outras palavras.");
				$("#myBar").css("width","0");
				$("#myBar").text("");
				//SE TERMINAR DESTROCA O CANCELAR PELO PESQUISAR
				$("#btnPesquisar").removeClass("invisivel");
				$("#btnPesquisar").addClass("visivel");
				$("#btnCancelar").removeClass("visivel");
				$("#btnCancelar").addClass("invisivel");
				$("body").css("cursor", "default");
			}
			else {
				if (cancelar==0){
					tamanho++; 
					$("#myBar").css("width",tamanho + '%');
					$("#myBar").text(tamanho * 1 + '%');
				}
				else{
					$("#myBar").css("width","0");
					$("#myBar").text("");
					tamanho=101;
				}
			}
		}
	}
}
function cancelarRef(){
	if (confirm("Deseja interromper a busca?")) {
		cancelar=1;
		//SE CANCELAR DESTROCA O CANCELAR PELO PESQUISAR
		$("#btnPesquisar").removeClass("invisivel");
		$("#btnPesquisar").addClass("visivel");
		$("#btnCancelar").removeClass("visivel");
		$("#btnCancelar").addClass("invisivel");
		$("body").css("cursor", "default");
	}
}


/* ------------ INSERÇÃO DE DICAS ------------ */
$( function() {
	$( document ).tooltip({
		position: {
			my: "center bottom-20",
			at: "center top",
			using: function( position, feedback ) {
				$( this ).css( position );
				$( "<div>" )
					.addClass( "arrow" )
					.addClass( feedback.vertical )
					.addClass( feedback.horizontal )
					.appendTo( this );
			}
		}
	});
 });
/* ---------- FIM INSERÇÃO DE DICAS ---------- */

/* -------------- FUNÇÃO  AJUDA -------------- */
function ajuda(){
	$("#dialog").removeClass("invisivel");
		$("#dialog").addClass("visivel");
    $("#dialog").dialog({
		resizable: false,
		height: "auto",
		width: 800,
		modal: false,
		buttons: {
			Fechar: function() {
				$( this ).dialog( "close" );
			}
		}
    });
};
