document.querySelector('.open-menu').addEventListener('click', e => {

    document.querySelector('header .menu').classList.add('open');

});

document.querySelector('.close-menu button').addEventListener('click', e => {

    document.querySelector('header .menu').classList.remove('open');

});

document.querySelector('.menu .backdrop').addEventListener('click', e=>{

    document.querySelector('header .menu').classList.remove('open');

});