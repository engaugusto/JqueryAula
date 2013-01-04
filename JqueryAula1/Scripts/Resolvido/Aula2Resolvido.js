//Ao iniciar a tela
$(function () {
    //Chamar a função Init
    Init();
});

//Chamada quando o documento estiver pronto
Init = function () {
    //Ao iniciar vincular os eventos dos botoes
    $('#Somar').click(Somar); //Igual ao document.getElementById('Somar')
    $('#Reset').click(Reset); //Igual ao document.getElementById('Reset')

    Reset();
};

//Funcao responsavel pelo botao Somar
Somar = function () {
    //Pegando o elemento Input Num1 e Num2
    var num1Element = $('#num1');
    var num2Element = $('#num2');
    var soma = 0;
    var num1, num2;

    //Pegando os valores e convertendo para Int
    num1 = parseInt((num1Element).val());
    num2 = parseInt((num2Element).val());
    soma = num1 + num2;
    var resposta = $('#lblReposta');

    $(resposta).text('O resultado foi: ' + soma);


};

//Funcao responsavel pelo botao Reset
Reset = function () {
    //Reset
    $('#num1').val('0');
    $('#num2').val('0');
    $('#lblReposta').text('');
};