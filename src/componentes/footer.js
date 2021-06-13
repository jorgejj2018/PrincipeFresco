import principe from '../assets/img/principe.png'
export default function Footer(){
    const $footer = document.createElement("footer")
    
    $footer.innerHTML = ` 
    <div class="ctn-imgFooter">
    <img id="img-principe" src="${principe}" alt="outfitt2">
    </div>
    <div class="ctn-redes">
    <a href="" ><img src="https://img.icons8.com/ios/32/000000/youtube-play--v1.png"/</a>
    <a href=""><img src="https://img.icons8.com/small/32/000000/facebook.png"/></a>
    </div>`;

    return $footer
}