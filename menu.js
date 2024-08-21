
document.addEventListener('DOMContentLoaded', function () {
    let btnMenu = document.getElementById('btn-menu');
    let menu = document.getElementById('menu-mobile');
    let overlay = document.querySelector('.overlay-menu');
    let btnFechar = menu.querySelector('.btn-fechar');

    // Abre o menu móvel ao clicar no botão
    btnMenu.addEventListener('click', function () {
        menu.classList.add('abrir-menu');
        overlay.classList.add('ativo');
    });

    // Fecha o menu móvel ao clicar no botão de fechar
    btnFechar.addEventListener('click', function () {
        menu.classList.remove('abrir-menu');
        overlay.classList.remove('ativo');
    });

    // Fecha o menu móvel ao clicar no overlay
    overlay.addEventListener('click', function () {
        menu.classList.remove('abrir-menu');
        overlay.classList.remove('ativo');
    });
});
