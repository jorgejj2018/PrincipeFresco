export default function Cards(){
    const $sectionCards = document.createElement("div")
    $sectionCards.classList.add("cards")
    $sectionCards.innerHTML = ` 
    
        <div class="card">
            <a class="card-categoria" href="#">
                <img id="img-rectang" alt="outfitt1">
                <p>Fresh Stripe Sweater</p>
                <p>$85.00</p>
            </a>
        </div>
        <div  class="card">
            <a class="card-categoria" href="#">
                <img id="img-rectang2" alt="outfitt2">
                <p>Fresh Black Tie-Dye Hoodie</p>
                <p>$75.00</p>
            </a>
        </div>
        <div class="card">
            <a class="card-categoria" href="#">
                <img id="img-rectang3" alt="outfitt3">
                <p>Pose For it Tee</p>
                <p>$45.00</p>
            </a>
        </div>`;

    return $sectionCards
}







