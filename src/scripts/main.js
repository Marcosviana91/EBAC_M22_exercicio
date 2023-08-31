alert('NÃO HÁ TRATAMENTO DE ERROS.\nPor favor, preencha corretamente.\nDeixe vazio ou cancele para usar valores padrão')

const CONTADOR = document.getElementById("contador");
var dataEvento = '16/02/2024';
var horaEvento = '00:00';

var dataEventoInput = window.prompt('Insira uma data:\ndd/MM/aaaa');
if (dataEventoInput == null || dataEventoInput == '') {
    alert("Usando data padrão...");
} else {
    var horaEventoInput = window.prompt('Insira uma hora:\nhh:mm');
    if (horaEventoInput == null || horaEventoInput == '') {
        alert("Usando meia noite...");
    } else {
        horaEvento = dataEventoInput
    }
    dataEvento = dataEventoInput
}

var [dia, mes, ano] = dataEvento.split("/")
var [hora, minuto] = horaEvento.split(":")

var dataDoEventoEmMilisegundos = new Date(ano, mes - 1, dia, hora, minuto).getTime();

function milisegundosParaData(tempoEmMilisegundos) {
    let tempoAteOEventoEmSegundos = Math.floor(tempoEmMilisegundos / 1000)
    let tempoAteOEventoEmMinutos = 0
    let tempoAteOEventoEmHoras = 0
    let tempoAteOEventoEmDias = 0
    let tempoAteOEventoEmMeses = 0
    let tempoAteOEventoEmAnos = 0
    let string_contagem = ''

    while (tempoAteOEventoEmSegundos > 60) {
        tempoAteOEventoEmSegundos = tempoAteOEventoEmSegundos - 60;
        tempoAteOEventoEmMinutos++
    }

    while (tempoAteOEventoEmMinutos > 60) {
        tempoAteOEventoEmMinutos = tempoAteOEventoEmMinutos - 60;
        tempoAteOEventoEmHoras++
    }

    while (tempoAteOEventoEmHoras > 24) {
        tempoAteOEventoEmHoras = tempoAteOEventoEmHoras - 24;
        tempoAteOEventoEmDias++
    }
    while (tempoAteOEventoEmDias > 30) {
        tempoAteOEventoEmDias = tempoAteOEventoEmDias - 30;
        tempoAteOEventoEmMeses++
    }
    while (tempoAteOEventoEmMeses > 12) {
        tempoAteOEventoEmMeses = tempoAteOEventoEmMeses - 12;
        tempoAteOEventoEmAnos++
    }

    if (tempoAteOEventoEmAnos > 0) {
        string_contagem = string_contagem + `${tempoAteOEventoEmAnos} ano(s) `
    }
    if (tempoAteOEventoEmMeses > 0) {
        string_contagem = string_contagem + `${tempoAteOEventoEmMeses} meses `
    }
    if (tempoAteOEventoEmDias > 0) {
        string_contagem = string_contagem + `${tempoAteOEventoEmDias} dias `
    }

    string_contagem = string_contagem + `${tempoAteOEventoEmHoras}h ${tempoAteOEventoEmMinutos}m ${tempoAteOEventoEmSegundos}s`;

    return string_contagem

    // return { 'dias': tempoAteOEventoEmDias, 'meses': tempoAteOEventoEmMeses, "anos": tempoAteOEventoEmAnos, "horas": tempoAteOEventoEmHoras, "minutos": tempoAteOEventoEmMinutos, "segundos": tempoAteOEventoEmSegundos }
}

if (dataDoEventoEmMilisegundos < new Date().getTime()){
    CONTADOR.innerHTML = '<b style="color: red";>EVENTO EXPIRADO</b>'
} else {
    setInterval(function () {
        var tempoAteOEventoEmMilisegundos = new Date().getTime();
        tempoAteOEventoEmMilisegundos = dataDoEventoEmMilisegundos - tempoAteOEventoEmMilisegundos
        CONTADOR.innerHTML = milisegundosParaData(tempoAteOEventoEmMilisegundos);
    
    }, 500)
}

