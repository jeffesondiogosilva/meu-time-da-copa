const goleiro = [
    { 
        id: 0,
        nome: 'Ter Stegen',
        skills: 90,
        selecao: 'Alemanha',
        foto: '<img class="res" src="https://img.a.transfermarkt.technology/portrait/big/74857-1599987750.jpg?lm=1" alt="">'
    },

    { 
        id: 1,
        nome: 'Alisson',
        skills: 91,
        selecao: 'Brasil',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yiE97impcCCGZW7Lc_SkdeFmCR5Pd5hp3t9Hym-cPM40kgGw9jx8zplcWQZEg5M-fTk&usqp=CAU" alt="">'
    },

    { 
        id: 2,
        nome: 'Lloris',
        skills: 90,
        selecao: 'França',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODwBJNh29b64FJNTN_BMuHnTTwEmIX_T-Q86MAji8lC9W3riWL_wFh5W6IULNPtwPShI&usqp=CAU" alt="">'
    },

    { 
        id: 3,
        nome: 'Courtois',
        skills: 93,
        selecao: 'Bélgica',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU" alt="">'
    },

    { 
        id: 4,
        nome: 'Tim Howard',
        skills: 88,
        selecao: 'Estados Unidos',
        foto: '<img class="res" src="https://img.a.transfermarkt.technology/portrait/big/4267-1587066706.jpg?lm=1" alt="">'
    },

    { 
        id: 5,
        nome: 'De Gea',
        skills: 90,
        selecao: 'Espanha',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzqnZjfDIyw-LlymI1T2WULGKBDmOGCS02w&usqp=CAU" alt="">'
    },

    { 
        id: 6,
        nome: 'Diogo Costa',
        skills: 89,
        selecao: 'Portugal',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZuRRpHq5w3NpxFWrOztH88pUp1S-_gdFaw&usqp=CAU" alt="">'
    },

    { 
        id: 7,
        nome: 'Sommer',
        skills: 90,
        selecao: 'Suíça',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJi9hOOqbRkV6HQQrQvMohv750hcYBwqfekg&usqp=CAU" alt="">'
    },

    { 
        id: 8,
        nome: 'Pickford',
        skills: 91,
        selecao: 'Inglaterra',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUhOzlw-f_mKjBiy0rP5AWVS76XbnPUgjYk5D35_zh4yPUYJ90tn89d2G2zRUoJ8AqEA&usqp=CAU" alt="">'
    },

    { 
        id: 9,
        nome: 'Navas',
        skills: 91,
        selecao: 'Porto Rico',
        foto: '<img class="res" src="https://www.realmadrid.com/img/vertical_380px/navascc_20220617070516.jpg"  alt="">'
    }
]

const goleiro_sorteado = Math.floor(Math.random() * goleiro.length); 

const ltr_direito = [
    {
        id: 0,
        nome: 'Dani Carvajal',
        skills: 87,
        selecao: 'Espanha',
        foto: '<img class="res" src=" https://img.uefa.com/imgml/TP/players/1/2023/324x324/250024448.jpg "  alt="">'
    },

    {
        id: 1,
        nome: 'Kyle Walker',
        skills: 85,
        selecao: 'Inglaterra',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzNTbQYXLb6bMeU6sY8BsKreuhVBY8Skqig&usqp=CAU"  alt="">'
    },

    {
        id: 2,
        nome: 'Hakimi',
        skills: 89,
        selecao: 'Marrocos',
        foto: '<img class="res" src="https://s.hs-data.com/bilder/spieler/gross/328958.jpg"  alt="">'
    },

    {
        id: 3,
        nome: 'Pavard',
        skills: 90,
        selecao: 'França',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCle-j7QwnvDluPE0FUvZXiuvCooZHj67Hng&usqp=CAU"  alt="">'
    },

    {
        id: 4,
        nome: 'Kehrer',
        skills: 85,
        selecao: 'Alemanha',
        foto: '<img class="res" src="https://i2-prod.football.london/incoming/article24768008.ece/ALTERNATES/s615/1_Thilo-Kehrer.jpg"  alt="">'
    },

    {
        id: 5,
        nome: 'Danilo',
        skills: 85,
        selecao: 'Brasil',
        foto: '<img class="res" src="https://i.pinimg.com/736x/46/e3/9c/46e39ce0da609d654b7904eaf356c8c0.jpg"  alt="">'
    },

    {
        id: 6,
        nome: 'Meunier',
        skills: 89,
        selecao: 'Bélgica',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3VzwMTDqzjjSrqLHTQc1v8C8cuC9nVcNMA&usqp=CAU"  alt="">'
    },

    {
        id: 7,
        nome: 'Dumfries',
        skills: 88,
        selecao: 'Holanda',
        foto: '<img class="res" src="https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/213248.png"  alt="">'
    }
]

const ltr_direito_sorteado = Math.floor(Math.random() * ltr_direito.length);

const ltr_esquerdo = [

    {
        id: 0,
        nome: 'Alphonso Davies',
        skills: 92,
        selecao: 'Canadá',
        foto: '<img class="res" src="https://img.uefa.com/imgml/TP/players/1/2022/324x324/250128120.jpg"  alt="">'
    },

    {
        id: 1,
        nome: 'Alex Sandro',
        skills: 86,
        selecao: 'Brasil',
        foto: '<img class="res" src="https://s2.glbimg.com/8Lv2m2pKDXCfklp2DvbqUPefLUo=/0x0:533x799/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/U/C/TW0AANRC2zFdAyJpzx6A/49070427816-6538f92146-c.jpg"  alt="">'
    },

    {
        id: 2,
        nome: 'Jordi Alba',
        skills: 88,
        selecao: 'Espanha',
        foto: '<img class="res" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Russia-Spain_2017_%2811%29.jpg"  alt="">'
    },

    {
        id: 3,
        nome: 'Blind',
        skills: 89,
        selecao: 'Holanda',
        foto: '<img class="res" src="https://img.uefa.com/imgml/TP/players/1/2022/324x324/108908.jpg"  alt="">'
    },

    {
        id: 4,
        nome: 'Nuno Mendes',
        skills: 89,
        selecao: 'Portugal',
        foto: '<img class="res" src="https://www.footballdatabase.eu/images/photos/players/2021/a_418/418869.jpg"  alt="">'
    },

    {
        id: 5,
        nome: 'Theo Hernández',
        skills: 88,
        selecao: 'França',
        foto: '<img class="res" src="https://i.pinimg.com/originals/de/ff/c4/deffc481c9bf535fe1ecea2aa7013d81.png"  alt="">'
    },

    {
        id: 6,
        nome: 'Tagliafico',
        skills: 86,
        selecao: 'Argentina',
        foto: '<img class="res" src="https://akcdn.detik.net.id/community/media/visual/2022/01/25/nicolas-tagliafico-1_43.jpeg?w=480"  alt="">'
    },

    {
        id: 7,
        nome: 'João Cancelo',
        skills: 92,
        selecao: 'Portugal',
        foto: '<img class="res" src="https://fpfimagehandler.fpf.pt/FPFImageHandler.ashx?type=Person&id=2608600&op=t&w=325&h=378"  alt="">'
    }    
    
];

const ltr_esquerdo_sorteado =  Math.floor(Math.random() * ltr_esquerdo.length);


const zagueiro1 = [
    
    {
        id: 0,
        nome: 'Thiago Silva',
        skills: 90,
        selecao: 'Brasil',
        foto: '<img class="res" src="https://images2.minutemediacdn.com/image/upload/c_crop,w_683,h_683,x_0,y_122/c_fill,w_720,ar_1:1,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_pt-BR_international_web/01gbars346azxpa6ybnv.jpg"  alt="">'

    },

    {
        id: 1,
        nome: 'Van Dijk',
        skills: 91,
        selecao: 'Holanda',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkX8K_gX5sXsPFEKb3dfnSva10dHlUr57DDnngHTLlEGcUf0R90y0zQEpXJOD8PrMkxQY&usqp=CAU"  alt="">'

    },

    {
        id: 2,
        nome: 'Otamendi',
        skills: 87,
        selecao: 'Argentina',
        foto: '<img class="res" src="https://m.media-amazon.com/images/M/MV5BMWQxZWI0N2ItZGMzMy00N2Y1LThlNTYtZDFjOGVlODg1ZDhlXkEyXkFqcGdeQXVyODEyMTAwMDI@._V1_.jpg"  alt="">'

    },

    {
        id: 3,
        nome: 'Kimpembe',
        skills: 89,
        selecao: 'França',
        foto: '<img class="res" src="https://static.onzemondial.com/photo_article/210608/108144/1200-L-ligue-1.jpg"  alt="">'

    },

    {
        id: 4,
        nome: 'Maguire',
        skills: 85,
        selecao: 'Inglaterra',
        foto: '<img class="res" src="https://www.thefa.com/-/media/www-thefa-com/images/england/men-senior/player-profiles/harry-maguire/harry-maguire.ashx"  alt="">'

    }
]

const zagueiro1_sorteado = Math.floor(Math.random() * zagueiro1.length);


const zagueiro2 = [

    {
        id: 0,
        nome: 'Sergio Ramos',
        skills: 89,
        selecao: 'Espanha',
        foto: '<img class="res" src="https://www.realmadrid.com/img/vertical_380px/ramos_ficha_550x650_20210630115027.jpg"  alt="">'
    },

    {
        id: 1,
        nome: 'Marquinhos',
        skills: 91,
        selecao: 'Brasil',
        foto: '<img class="res" src="https://i.pinimg.com/474x/ec/f7/5c/ecf75c1c57c676834b0e663d7d8420a4.jpg"  alt="">'
    },

    {
        id: 2,
        nome: 'Ruben Dias',
        skills: 90,
        selecao: 'Portugal',
        foto: '<img class="res" src="https://resources.premierleague.com/premierleague/photos/players/250x250/p171314.png"  alt="">'
    },

    {
        id: 3,
        nome: 'Rudiger',
        skills: 90,
        selecao: 'Alemanha',
        foto: '<img class="res" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkbLRc6dXteEUnPTQVh4YN9-akfO-ku-ivYo60WieyRNEfIiEk3b7NkG79xxxkoXoreY&usqp=CAU"  alt="">'
    },

    {
        id: 4,
        nome: 'Alaba',
        skills: 91,
        selecao: 'Suíça',
        foto: '<img class="res" src="https://b.fssta.com/uploads/application/soccer/headshots/2243.png"  alt="">'
    },

    {
        id: 5,
        nome: 'Alderweireld',
        skills: 89,
        selecao: 'Bélgica',
        foto: '<img class="res" src="https://m.media-amazon.com/images/M/MV5BMTEyYTc0M2EtZTU3OS00ZmU3LTgxOTYtMWU2ZjQwZDhlYTExXkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_UY1200_CR85,0,630,1200_AL_.jpg"  alt="">'
    },
];

const zagueiro2_sorteado = Math.floor(Math.random() * zagueiro2.length);

const volante = [

    {
        id: 0,
        nome: 'Casemiro',
        skills: 90,
        selecao: 'Brasil',
        foto: '<img class="res" src="https://conteudo.imguol.com.br/c/esporte/ff/2022/08/16/casemiro-em-acao-com-a-camisa-da-selecao-brasileira-volante-do-real-madrid-virou-alvo-de-interesse-do-manchester-united-1660688947014_v2_1x1.jpg"  alt="">'
    },
    
    {
        id: 1,
        nome: 'Kanté',
        skills: 92,
        selecao: 'França',
        foto: '<img class="res" src="https://images.vrt.be/orig/sporza/soccer/player/default/1050893.png"  alt="">'
    },

    {
        id: 2,
        nome: 'Busquets',
        skills: 91,
        selecao: 'Espanha',
        foto: '<img class="res" src="https://img.uefa.com/imgml/TP/players/1/2022/324x324/250002704.jpg"  alt="">'
    },

    {
        id: 3,
        nome: 'Gundogan',
        skills: 89,
        selecao: 'Alemanha',
        foto: '<img class="res" src="https://i.guim.co.uk/img/media/53ea6b1d56942b1f1e33f2e1ccc845b009a17e22/0_161_3804_2282/master/3804.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=cdf39707949b9474a3c76dae43cb99d8"  alt="">'
    },

    {
        id: 4,
        nome: 'Rice',
        skills: 87,
        selecao: 'Inglaterra',
        foto: '<img class="res" src="https://www.footballdatabase.eu/images/photos/players/2021/a_299/299660.jpg"  alt="">'
    },

    {
        id: 6,
        nome: 'Tielemans',
        skills: 89,
        selecao: 'Bélgica',
        foto: '<img class="res" src="https://i.pinimg.com/474x/8c/52/10/8c52103f4bba44fedb4c44a8e4d2c665.jpg"  alt="">'
    },
];

const volante_sorteado =  Math.floor(Math.random() * volante.length);

const meio_campo1 = [

    {
        id: 0,
        nome: 'Modric',
        skills: 92,
        selecao: 'Croácia',
        foto: '<img class="res" src="https://media.cnnchile.com/sites/2/2018/07/luka-modric-740x430.jpg"  alt="">'
    },
    
    {
        id: 1,
        nome: 'Kroos',
        skills: 92,
        selecao: 'Alemanha',
        foto: '<img class="res" src="https://haircutsz.com/wp-content/gallery/toni-kroos/Kroos-2020.jpg"  alt="">'
    },

    {
        id: 2,
        nome: 'Bernardo Silva',
        skills: 90,
        selecao: 'Portugal',
        foto: '<img class="res" src="https://fpfimagehandler.fpf.pt/FPFImageHandler.ashx?type=Person&id=2608613&op=t&w=325&h=378"  alt="">'
    },

    {
        id: 3,
        nome: 'De Bruyne',
        skills: 93,
        selecao: 'Bélgica',
        foto: '<img class="res" src="https://futhead.cursecdn.com/static/img/19/players/192985.png"  alt="">'
    },

    {
        id: 4,
        nome: 'Rabiot',
        skills: 89,
        selecao: 'França',
        foto: '<img class="res" src="https://img.uefa.com/imgml/TP/players/1/2022/324x324/250053905.jpg"  alt="">'
    },

    {
        id: 5,
        nome: 'Di Maria',
        skills: 90,
        selecao: 'Argentina',
        foto: '<img class="res" src="https://www.quadrodemedalhas.com/images/copa-do-mundo/argentina-angel-di-maria.jpg"  alt="">'
    },
]

const meio_campo1_sorteado = Math.floor(Math.random() * meio_campo1.length);


const meio_campo2 = [

    {
        id: 0,
        nome: 'Pogba',
        skills: 89,
        selecao: 'França',
        foto: '<img class="res" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/FRA-ARG_%2811%29_-_Paul_Pogba_%28cropped_2%29.jpg"  alt="">'
    },

    {
        id: 1,
        nome: 'Kimmich',
        skills: 90,
        selecao: 'Alemanha',
        foto: '<img class="res" src="https://i.bundesliga.com/player/dfl-obj-0002f5-dfl-clu-00000g-dfl-sea-0001k6.png"  alt="">'
    },

    {
        id: 2,
        nome: 'Paquetá',
        skills: 89,
        selecao: 'Brasil',
        foto: '<img class="res" src="https://menezesvirtualeye.com/wp-content/uploads/2022/08/trxs_gigantes_da_premier_league_disputam_a_contrataxo_de_lucas_paquetx.jpg_1159711837.jpg"  alt="">'
    },

    {
        id: 3,
        nome: 'Arrascaeta',
        skills: 90,
        selecao: 'Argentina',
        foto: '<img class="res" src="https://tntsports.com.br/__export/1659206870735/sites/esporteinterativo/img/2022/07/30/gettyimages-1408549397.jpg_1423380640.jpg"  alt="">'
    },

    {
        id: 4,
        nome: 'Everton Ribeiro',
        skills: 89,
        selecao: 'Argentina',
        foto: '<img class="res" src="https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/e/eve/large/30590.png"  alt="">'
    },

    {
        id: 5,
        nome: 'Isco',
        skills: 89,
        selecao: 'Espanha',
        foto: '<img class="res" src="https://img.a.transfermarkt.technology/portrait/big/85288-1523366774.jpg?lm=1"  alt="">'
    },

    {
        id: 6,
        nome: 'De Jong',
        skills: 88,
        selecao: 'Holanda',
        foto: '<img class="res" src="https://pbs.twimg.com/media/FbT5XOYWYAAl5r6.jpg"  alt="">'
    },

    {
        id: 7,
        nome: 'Rakitic',
        skills: 89,
        selecao: 'Croácia',
        foto: '<img class="res" src="http://1.bp.blogspot.com/-VWnU8PDrz_Q/VF5XRhRIjqI/AAAAAAAAEFY/uP4dC46snZY/s1600/Biography-of-Ivan-Rakitic.jpg"  alt="">'
    }
]

const meio_campo2_sorteado = Math.floor(Math.random() * meio_campo2.length);

const atacante1 = [

    {
        id: 0,
        nome: 'Raphinha',
        skills: 91,
        selecao: 'Brasil',
        foto: '<img class="res" src="https://ogimg.infoglobo.com.br/in/25154144-712-74b/FT1086A/760/94458669_Soccer-FootballPre-Season-FriendlyLeeds-United-v-Real-BetisLoughborough-Univer.jpg"  alt="">'
    },
    {
        id: 1,
        nome: 'Griezmann',
        skills: 89,
        selecao: 'França',
        foto: '<img class="res" src="https://1tb.favim.com/preview/6/653/6530/65302/6530280.jpg"  alt="">'
    },
    {
        id: 2,
        nome: 'Vini Jr (Malvadeza) ',
        skills: 91,
        selecao: 'Brasil',
        foto: '<img class="res" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf5785763e9d42397/616f42efc32cb610f00e867a/e685bc458674ac6e96e12fb8e57c84170713a4de.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200"  alt="">'
    },
    {
        id: 3,
        nome: 'Mertens',
        skills: 88,
        selecao: 'Bélgica',
        foto: '<img class="res" src="https://img.uefa.com/imgml/TP/players/2014/2023/324x324/250019924.jpg"  alt="">'
    },
    {
        id: 4,
        nome: 'Mbappe (Tartaruga Ninja)',
        skills: 94,
        selecao: 'França',
        foto: '<img class="res" src="https://img.uefa.com/imgml/TP/players/1/2023/324x324/250076574.jpg"  alt="">'
    },
    {
        id: 5,
        nome: 'Havertz',
        skills: 89,
        selecao: 'Alemanha',
        foto: '<img class="res" src="https://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/5810e4460cf2e48931e74c49/1024"  alt="">'
    }
];

const atacante1_sorteado = Math.floor(Math.random() * atacante1.length);

const atacante2 = [
 
    
    {
        id: 0,
        nome: 'Neymar Jr (Menino Ney)',
        skills: 94,
        selecao: 'Brasil',
        foto: '<img class="res" src="https://static.foxdeportes.com/2022/09/26/neymarjr-545x907.webp"  alt="">'
    },  
            
    {
        id: 1,
        nome: 'Cristiano Ronaldo (Robozão)',
        skills: 95,
        selecao: 'Portugal',
        foto: '<img class="res" src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"  alt="">'
    }, 
        
    {
        id: 2,
        nome: 'Antony',
        skills: 91,
        selecao: 'Brasil',
        foto: '<img class="res" src="https://transfernews.com.br/wp-content/uploads/2022/08/Antony-United.jpg"  alt="">'
    }, 
        
    {
        id: 3,
        nome: 'Foden',
        skills: 90,
        selecao: 'Inglaterra',
        foto: '<img class="res" src="https://bet-bet.net/wp-content/uploads/2021/03/Phil-Foden.png"  alt="">'
    }, 
        
    {
        id: 4,
        nome: 'Gnabry',
        skills: 90,
        selecao: 'Alemanha',
        foto: '<img class="res" src="https://sportsmanheight.com/wp-content/uploads/2021/12/12-14.png"  alt="">'
    }, 
        
    {
        id: 5,
        nome: 'Vlahovic',
        skills: 90,
        selecao: 'Sérvia',
        foto: '<img class="res" src="https://cms.somosfanaticos.com/__export/1640547628330/sites/fanaticos/img/2021/12/26/dusan_vlahovic_head_crop1640547626763.jpg_1159711837.jpg"  alt="">'
    }
        
]

const atacante2_sorteado = Math.floor(Math.random() * atacante2.length);



const atacante3 = [

    {
        id: 0,
        nome: 'Lewandowski',
        skills: 94,
        selecao: 'Polonia',
        foto: '<img class="res" src="https://img.fcbayern.com/image/upload/t_cms-1x1-seo/v1657983627/cms/public/images/fcbayern-com/homepage/saison-21-22/Profis/Lewandowski/220716-lewandowski-fc-barcelona.jpg"  alt="">'
    },

    {
        id: 1,
        nome: 'Kane',
        skills: 92,
        selecao: 'Inglaterra',
        foto: '<img class="res" src="https://img.welt.de/img/sport/fussball/mobile232699041/4242500747-ci102l-w1024/TOTTENHAM-HOTSPUR-1-ASTON-VILLA-2.jpg"  alt="">'
    },

    {
        id: 2,
        nome: 'Son',
        skills: 92,
        selecao: 'Coreia do Sul',
        foto: '<img class="res" src="https://www.footballdatabase.eu/images/photos/players/2019-2020/a_118/118783.jpg"  alt="">'
    },

    {
        id: 3,
        nome: 'Messi',
        skills: 94,
        selecao: 'Messi',
        foto: '<img class="res" src="https://cortesdepelohombres.com/wp-content/uploads/2017/12/Leo-Messi-pelo-rubio-platinado-barba-descuidada.jpg"  alt="">'
    },

    {
        id: 4,
        nome: 'Pedro',
        skills: 92,
        selecao: 'Brasil',
        foto: '<img class="res" src="https://i.pinimg.com/474x/16/25/cb/1625cbda4ed5cdfc9156922767faaf51.jpg"  alt="">'
    },

    {
        id: 5,
        nome: 'Lukaku',
        skills: 92,
        selecao: 'Bélgica',
        foto: '<img class="res" src="https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/l/luk/large/18674.png"  alt="">'
    },

    {
        id: 6,
        nome: 'Lautaro Martinez',
        skills: 90,
        selecao: 'Argentina',
        foto: '<img class="res" src="https://i.pinimg.com/originals/86/70/f2/8670f2a61eb78f0acef9dceccd0c81b8.jpg"  alt="">'
    },

    {
        id: 7,
        nome: 'Muller',
        skills: 90,
        selecao: 'Alemanha',
        foto: '<img class="res" src="https://s.hs-data.com/bilder/spieler/gross/97332.jpg"  alt="">'
    }
];


const atacante3_sorteado = Math.floor(Math.random() * atacante3.length);



const respostas = ['klose', 'italia', 'africa', 'gotze', 'portugal', 'kahn', 'felipao', 'milla', 'alemanha', 'pele', 'uruguai'];

const posicao_time = [goleiro, ltr_direito, ltr_esquerdo, zagueiro1, zagueiro2, volante, meio_campo1, meio_campo2, atacante1, atacante2, atacante3];
const posicao_time_sorteado = [goleiro_sorteado, ltr_direito_sorteado, ltr_esquerdo_sorteado, zagueiro1_sorteado, zagueiro2_sorteado, volante_sorteado, meio_campo1_sorteado, meio_campo2_sorteado, atacante1_sorteado, atacante2_sorteado, atacante3_sorteado];


function verificar(id, elemento, msgm){
    var select = document.querySelector(id);
    var opcaoValor = select.options[select.selectedIndex].value;
    // var opcaoTexto = select1.options[select1.selectedIndex].text;

    var msgm = document.querySelector(msgm);

    if (opcaoValor == respostas[elemento]){
        console.log(elemento, opcaoValor);
        msgm.innerHTML = ' Parabéns, tu é brabo!<br> O card que você ganhou é <div>'+posicao_time[elemento][posicao_time_sorteado[elemento]].foto+'</div> <br> Nome: '+posicao_time[elemento][posicao_time_sorteado[elemento]].nome+'<br> Skills: '+posicao_time[elemento][posicao_time_sorteado[elemento]].skills+'<br> Seleção: '+posicao_time[elemento][posicao_time_sorteado[elemento]].selecao;
        tocar_acerto();

    } else {
        msgm.innerHTML = 'Que pena! <br> <img class="res" src="https://cdn.streamelements.com/uploads/174064b8-d948-4fbd-9898-a9800f1d3bb3.gif">';
        tocar_erro();
    }
}

function tocar_ucl(){

    var audio = new Audio('Vinheta_Champions_www.toquesengracadosmp3.com.mp3');
    audio.play();
    // audio.loop = true;
    
}

function tocar_acerto(){
    var audioAcerto = new Audio('taca-le pau nesse carrinho marcos.mp3');
    audioAcerto.play();
    var audioAcerto2 = new Audio('aplausos1.mp3');
    audioAcerto2.play();
}

function tocar_erro(){
    var audioErro = new Audio('175959402.mp3');
    audioErro.play();
    

    var audioErro2 = new Audio('faustao-errou.mp3');
    audioErro2.play();
    
}

function printar_escalacao () {

    var escalacao = document.getElementById('escalacao');
    escalacao.innerHTML = '<h3 class="msgm">O seu time ficou assim:</h3> <br>'+goleiro[goleiro_sorteado].foto+'<br>'

    +ltr_direito[ltr_direito_sorteado].foto+zagueiro1[zagueiro1_sorteado].foto+zagueiro2[zagueiro2_sorteado].foto+ltr_esquerdo[ltr_esquerdo_sorteado].foto+'<br>'

    +volante[volante_sorteado].foto+meio_campo1[meio_campo1_sorteado].foto+meio_campo2[meio_campo2_sorteado].foto+'<br>'

    +atacante1[atacante1_sorteado].foto+atacante2[atacante2_sorteado].foto+atacante3[atacante3_sorteado].foto;

    var audioAcerto2 = new Audio('aplausos2.mp3');
    audioAcerto2.play();
}

function printar_pontuacao(){

    var soma_pontuacao = goleiro[goleiro_sorteado].skills + 
                         ltr_direito[ltr_direito_sorteado].skills + 
                         ltr_esquerdo[ltr_esquerdo_sorteado].skills + 
                         zagueiro1[zagueiro1_sorteado].skills + 
                         zagueiro2[zagueiro2_sorteado].skills + 
                         volante[volante_sorteado].skills + 
                         meio_campo1[meio_campo1_sorteado].skills + 
                         meio_campo2[meio_campo2_sorteado].skills + 
                         atacante1[atacante1_sorteado].skills +
                         atacante2[atacante2_sorteado].skills + 
                         atacante3[atacante3_sorteado].skills;
                           

    var pontuacao = document.getElementById("pontuacao");
    pontuacao.innerHTML = `<p class='msgm'>A pontuação total do seu time é: ${soma_pontuacao} </p>`;
}

document.getElementsByTagName('body').addEventListener('load', tocar_ucl());

document.getElementById('escalar-time').onclick = printar_pontuacao();



if (window.screen.width < 768){
    
    document.getElementById('escalar-time').addEventListener('touchstart', printar_escalacao);
    document.getElementById('pontuacao').addEventListener('touchstart', printar_pontuacao)
} else {
    
    document.getElementById('escalar-time').addEventListener('click', printar_escalacao);
    document.getElementById('pontuacao').addEventListener('click', printar_pontuacao);
}






// document.querySelector('#questao1').addEventListener('click', verificar());

// document.getElementById('questao2').addEventListener('click', verificar());



// const select = document.querySelector('#questao1');

// const indice = select.selectedIndex;
// const valor = select.value;
// const text = select.options[indice].text;

// const select = document. querySelector("#questao1");
// const options = [...select.options];
// const listar = options.forEach((option) => {
// console.log(option.value);
// })


