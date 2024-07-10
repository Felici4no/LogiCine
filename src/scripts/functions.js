
link = [
    ['src/assets/movies/fight_club/poster_fight_club.jpg',
    'Clube da Luta <span id="genero">Ação/Crime</span> | <span id="older_Than">+18</span> | <span id="lançamento">1999s</span>',
    '<a href="#"><img src="src/assets/netflix_logo.png" alt="netflix"></a>',
    'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído.',
    'url(https://br.web.img3.acsta.net/r_654_368/newsv7/19/10/24/22/36/2169159.png)']
    ,
    ['src/assets/movies/the_pursuit_of_happiness/poster_the_pursuit_of_happiness.jpg',
    'À Procura da Felicidade <span id="genero">Drama</span> | <span id="older_Than"> L </span> | <span id="lançamento">2006s</span>',
    '<a href="#"><img src="src/assets/netflix_logo.png" alt="netflix"></a>',
    'Chris enfrenta sérios problemas financeiros e sua esposa, Linda, decide partir. Agora solteiro, ele precisa cuidar de Christopher, seu filho de cinco anos.',
    'url(https://veja.abril.com.br/wp-content/uploads/2024/03/Zade-Rosenthal-Columbia-Pictures-Industrie-a-procura-da-felicidade-will-smith-jaden-smith.jpg?quality=90&strip=info&w=1280&h=720&crop=1)'
    ]
]

let contadora = 0;

let img = document.getElementById('main_img');
img.src = `${link[contadora][0]}`;
let nameMovie = document.getElementById('nameMovie');
nameMovie.innerHTML = `${link[contadora][1]}`;

let streaming = document.getElementById('streaming');
streaming.innerHTML = `${link[contadora][2]}`;
let description = document.getElementById('description');
description.innerHTML = `${link[contadora][3]}`;
let main_content = document.getElementById('main_content');
main_content.style.backgroundImage =`${link[contadora][4]}`;

function nextAndPrevious(nextOrPrevious) {
    // Inicializa contadora se não estiver dentro dos limites válidos
    if (contadora < 0 || contadora >= link.length) {
        contadora = 0;
    }

    // Verificações adicionais se contadora estiver fora dos limites
    if (nextOrPrevious === 'Previous') {
        contadora--;
    } else {
        contadora++;
    }

    // Garante que contadora esteja dentro dos limites válidos
    if (contadora < 0) {
        contadora = link.length - 1;
    } else if (contadora >= link.length) {
        contadora = 0;
    }

    let i = contadora;
    let img = document.getElementById('main_img');
    img.src = link[i][0];
    let nameMovie = document.getElementById('nameMovie');
    nameMovie.innerHTML = link[i][1];
    let posicaoInicio = link[i][1].indexOf('Than">');

    if (posicaoInicio !== -1) {
        let parteFrase = link[i][1].substring(posicaoInicio);
        let classificacao = '';
    
        for (let n = 6; n < 9; n++) {
            classificacao += parteFrase[n];
        }
        
        if (classificacao == ' L '){
            let backgroundColor = document.getElementById('older_Than');
            backgroundColor.style.backgroundColor ='green';
        }else if(classificacao == '+18'){
            let backgroundColor = document.getElementById('older_Than');
            backgroundColor.style.backgroundColor ='black';
        }
        console.log(classificacao);
    }
    
    let streaming = document.getElementById('streaming');
    streaming.innerHTML = link[i][2];
    let description = document.getElementById('description');
    description.innerHTML = link[i][3];
    let main_content = document.getElementById('main_content');
    main_content.style.backgroundImage =`${link[i][4]}`;

    return contadora;
}
