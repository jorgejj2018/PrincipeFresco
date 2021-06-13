export default function Cover(){
    const $imgCover = document.createElement("img")
    $imgCover.id = "img-cover"
    $imgCover.classList.add("img-cover")
    $imgCover.alt = "cover-img"
    return $imgCover
}