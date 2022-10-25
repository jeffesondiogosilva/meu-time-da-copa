const goleiro = [
    { 
        id: 1,
        nome: 'Ter Stegen',
        skills: 90,
        selecao: 'Alemanha',
        foto: '<img class="res" src="https://img.a.transfermarkt.technology/portrait/big/74857-1599987750.jpg?lm=1" alt="">'
    },

    { 
        id: 2,
        nome: 'Alisson',
        skills: 91,
        selecao: 'Brasil',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yiE97impcCCGZW7Lc_SkdeFmCR5Pd5hp3t9Hym-cPM40kgGw9jx8zplcWQZEg5M-fTk&usqp=CAU" alt="">'
    },

    { 
        id: 3,
        nome: 'Lloris',
        skills: 90,
        selecao: 'França',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODwBJNh29b64FJNTN_BMuHnTTwEmIX_T-Q86MAji8lC9W3riWL_wFh5W6IULNPtwPShI&usqp=CAU" alt="">'
    },

    { 
        id: 4,
        nome: 'Courtois',
        skills: 93,
        selecao: 'Bélgica',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU" alt="">'
    },

    { 
        id: 5,
        nome: 'Tim Howard',
        skills: 88,
        selecao: 'Estados Unidos',
        foto: '<img class="res" src="https://img.a.transfermarkt.technology/portrait/big/4267-1587066706.jpg?lm=1" alt="">'
    },

    { 
        id: 6,
        nome: 'De Gea',
        skills: 90,
        selecao: 'Espanha',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzqnZjfDIyw-LlymI1T2WULGKBDmOGCS02w&usqp=CAU" alt="">'
    },

    { 
        id: 7,
        nome: 'Diogo Costa',
        skills: 89,
        selecao: 'Portugal',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZuRRpHq5w3NpxFWrOztH88pUp1S-_gdFaw&usqp=CAU" alt="">'
    },

    { 
        id: 8,
        nome: 'Sommer',
        skills: 90,
        selecao: 'Suíça',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJi9hOOqbRkV6HQQrQvMohv750hcYBwqfekg&usqp=CAU" alt="">'
    },

    { 
        id: 9,
        nome: 'Pickford',
        skills: 91,
        selecao: 'Inglaterra',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUhOzlw-f_mKjBiy0rP5AWVS76XbnPUgjYk5D35_zh4yPUYJ90tn89d2G2zRUoJ8AqEA&usqp=CAU" alt="">'
    },

    { 
        id: 10,
        nome: 'Navas',
        skills: 91,
        selecao: 'Porto Rico',
        foto: '<img class="res" src="https://www.realmadrid.com/img/vertical_380px/navascc_20220617070516.jpg"  alt="">'
    }
]

const goleiro_sorteado = Math.floor(Math.random() * goleiro.length); 


const respostas = ['klose', 'italia']; 


function verificar(id, elemento, msgm){
    var select = document.querySelector(id);
    var opcaoValor = select.options[select.selectedIndex].value;
    // var opcaoTexto = select1.options[select1.selectedIndex].text;

    var msgm = document.querySelector(msgm);

    if (opcaoValor == respostas[elemento]){

        msgm.innerHTML = ' Parabéns, tu é brabo!<br> O card que você ganhou é <div>'+goleiro[goleiro_sorteado].foto+'</div> <br> Nome: '+goleiro[goleiro_sorteado].nome+'<br> Skills: '+goleiro[goleiro_sorteado].skills+'<br> Seleção: '+goleiro[goleiro_sorteado].selecao;
        tocar_acerto();

    } else {
        msgm.innerHTML = 'Cara, você é burro?';
        tocar_erro();
    }
}

function tocar_ucl(){

    var audio = new Audio('Vinheta_Champions_www.toquesengracadosmp3.com.mp3');
    audio.play();
    audio.loop = true;
    
}

function tocar_acerto(){
    var audioAcerto = new Audio('taca-le pau nesse carrinho marcos.mp3');
    audioAcerto.play();
}

function tocar_erro(){
    var audioErro = new Audio('175959402.mp3');
    audioErro.play();
    

    var audioErro2 = new Audio('é um fracassado.mp3');
    audioErro2.play();
    
}

document.getElementsByTagName('body').addEventListener('load', tocar_ucl());

document.querySelector('#questao1').addEventListener('click', verificar());

document.getElementById('questao2').addEventListener('click', verificar());



// const select = document.querySelector('#questao1');

// const indice = select.selectedIndex;
// const valor = select.value;
// const text = select.options[indice].text;

// const select = document. querySelector("#questao1");
// const options = [...select.options];
// const listar = options.forEach((option) => {
// console.log(option.value);
// })


