function digitacao() {
    window.location.href = './digitacao/digitacao.html';
}
function excel() {
    window.location.href = '/excel/excel-bs.html';
}
function word() {
    window.location.href = '#Word';
}
function powerpoint() {
    window.location.href = '#PowerPoint';
}
function powerpoint() {
    window.location.href = '#PowerPoint';
}


function home() {
    window.location.href = '../index.html';
}


function txt01() {
    window.open('../textos/texto01.html', '_blank');
}
function txt02() {
    window.open('../textos/texto02.html', '_blank');
}
function txt03() {
    window.open('../textos/texto03.html', '_blank');
}
function txt04() {
    window.open('../textos/texto04.html', '_blank');
}
function txt05() {
    window.open('../textos/texto05.html', '_blank');
}
function txt06() {
    window.open('../textos/texto06.html', '_blank');
}
function txt07() {
    window.open('../textos/texto07.html', '_blank');
}
function txt08() {
    window.open('../textos/texto08.html', '_blank');
}
function txt09() {
    window.open('../textos/texto09.html', '_blank');
}
function txt10() {
    window.open('../textos/texto10.html', '_blank');
}



function escolherEx() {
    // Use o SweetAlert para criar um alerta personalizado
    Swal.fire({
        title: 'Escolha uma opção:',
        showCancelButton: true,
        confirmButtonText: 'Excel 2016 (Essencial)',
        cancelButtonText: 'Excel 2016 Avançado',
    }).then((result) => {
        // Redirecione com base na escolha do usuário
        if (result.isConfirmed) {
            window.location.href = "./excel/excel-bs.html";
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            window.location.href = "./excel/excel-av.html";
        }
    });
}