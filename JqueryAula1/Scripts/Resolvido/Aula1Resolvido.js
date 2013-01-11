//Ao iniciar a tela
window.onload = function () {
    Init();
};

//Chamada quando o documento estiver pronto
function Init() {
    Reset();
};

function Somar() {
    //Ao Somar
    var num1, num2, lblResposta, total;
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    lblResposta = document.getElementById('lblReposta');

    total = parseInt(num1) + parseInt(num2);

    lblReposta.innerHTML = "O resultado foi: " + total;
};

function Reset() {
    //Limpar
    document.getElementById('num1').value = 0;
    document.getElementById('num2').value = 0;
    document.getElementById('lblReposta').innerHTML = "";
};