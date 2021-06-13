import DetallesCss from '../src/assets/css/detalles.css';
import CardsCss from '../src/assets/css/cards.css';
import Header from './componentes/header.js';
import Detalles from './componentes/vistas_ropas.js';
import TitleCards from './componentes/titulo_cards.js';
import Cards from './componentes/cards.js';
import Cover from './componentes/cover.js';
import Footer from './componentes/footer.js';
import imgPrincipe from '../src/assets/img/principe.png';
import imgRectang from '../src/assets/img/Rectangle1.png';
import imgRectang2 from '../src/assets/img/Rectangle2.png';
import imgRectang3 from '../src/assets/img/Rectangle3.png';
import imgCover from '../src/assets/img/cover.png';

const b = document.body,
$header = document.querySelector("header"),
$main = document.querySelector("main");

$header.appendChild(Header())
$main.appendChild(TitleCards())
$main.appendChild(Cards())
$main.appendChild(Cover())
b.appendChild(Footer())

const $imgP = document.getElementById("img-principe")
$imgP.src=imgPrincipe
const $imgR = document.getElementById("img-rectang")
$imgR.src=imgRectang
const $imgR2 = document.getElementById("img-rectang2")
$imgR2.src=imgRectang2
const $imgR3 = document.getElementById("img-rectang3")
$imgR3.src=imgRectang3
const $imgC = document.getElementById("img-cover")
$imgC.src=imgCover

console.log($imgR)







