// para pegar uma tag imagem do html e add na pagina
function adicionarFilmeFavorito(){
    let filmeFvorito = document.querySelector('#filme')
    let filme = filmeFvorito.value;
    document.write("<img src=" + filme + ">");
}


/* maneira de fazer, sem pega
function adicionarFilmeFavorito(){
    let filmeFvorito = document.querySelector('#filme')
    filmeFvorito.value;
    document.write(filmeFavorito);
}
