var premier_bouton = document.querySelector('a.premierBouton');
var deuxieme_bouton = document.querySelector('a.deuxiemeBouton');

premier_bouton.addEventListener('click', function(event){
    event.preventDefault();
    premier_bouton.classList.add('scale1');
});

premier_bouton.addEventListener('transitionend', function(){
    premier_bouton.classList.remove('scale1');
});

deuxieme_bouton.addEventListener('click', function(event){
    event.preventDefault();
    if(deuxieme_bouton.classList.contains('color2')){
        deuxieme_bouton.classList.remove('color2');
        deuxieme_bouton.classList.add('scale2');
    }
    else deuxieme_bouton.classList.add('scale2', 'color2');
});

deuxieme_bouton.addEventListener('transitionend', function(){
    deuxieme_bouton.classList.remove('scale2');
});

