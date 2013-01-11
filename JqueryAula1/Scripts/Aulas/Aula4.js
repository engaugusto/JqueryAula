NovaLinha = function () {
    var linhaOculta = $('.linhaOculta', '#tabela');
    var ultimaLinha = $('#tabela > tbody');

    var novaLinha = $(linhaOculta).clone();
    $(novaLinha).removeClass('linhaOculta');

    $(ultimaLinha).append(novaLinha);

    countRow();
    DeuZebra();
};

VisualizarDados = function () {
    var campo1 = $($('td', $(this).closest('tr'))[1]).text().trim();
    var campo2 = $($('td', $(this).closest('tr'))[2]).text().trim();
    var campo0 = $($('td', $(this).closest('tr'))[0]).text().trim();

    $('#campo1').val(campo1);
    $('#campo2').val(campo2);

    $('#hdfId').val(campo0);
}

//Aula 4 . js
Excluir = function (e) {
    $(this).closest('tr').remove();

    DeuZebra();
    countRow();
}

Salvar = function () {
    var campoId = $('#hdfId').val();

    $('td:first', $('#tabela > tbody > tr:visible')).each(function (indice, obj) {
        if ($(obj).text().trim() == campoId) {
            var linha = $('td', $(obj).closest('tr'));

            var tdCampo1 = $(linha)[1];
            var tdCampo2 = $(linha)[2];

            $(tdCampo1).text($('#campo1').val());
            $(tdCampo2).text($('#campo2').val());
        }
    })
}

SincronizarAjax = function () {
    var linhas = $('table > tbody > tr:visible');
    var arrayObj = [];
    var campo0, campo1, campo2;

    $(linhas).each(function (indice2) {
        $('td', linhas).each(function (indice, obj) {
            switch (indice) {
                case 0:
                    campo0 = $(obj).text().trim();
                    break;
                case 1:
                    campo1 = $(obj).text().trim();
                    break;
                case 2:
                    campo2 = $(obj).text().trim();
                    break;
            }
        });
        var objJson = { id: campo0,
            campo1: campo1,
            campo2: campo2
        };
        arrayObj.push(objJson);
    });
    console.log(arrayObj);

    //ajax
    $.ajax({
        url: 'SalvarJson',
        contentType: 'application/json',
        type: 'json',
        data: JSON.stringify(arrayObj),
        success: function(){
            console.log('sucesso');
        },
        error:function(){
            console.log('deu erro');
        }
    });
}

countRow = function () {
    $('tr:visible', $('#tabela > tbody')).each(function (indice, obj) {
        $($('td', obj)[0]).text(indice + 1);
    });
};

DeuZebra = function () {
    $('tr:even', '#tabela').css('background-color', 'lightgray');
};

$(function () {
    //Pegando os elementos que contem a classe EXC que estao dentro do element
    //do Id Tabela
    //Estou vinculando nestes elementos no evento Click o evento Excluir
    $('.exc', $('#tabela')).live('click', Excluir);
    $('.vis', $('#tabela')).live('click', VisualizarDados);
    $('#zebrar').click(DeuZebra);
    $('#salvar').click(Salvar);

    $('#Novo').click(NovaLinha);
    $('#sync').click(SincronizarAjax);
    
    DeuZebra();
    countRow();
});