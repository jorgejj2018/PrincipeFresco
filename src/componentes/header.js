import comprar from '../assets/img/icono_comprar.png'
import usuario from '../assets/img/icono_usuario.png'

export default function Header(){
    const $header = document.createElement("section")
    $header.innerHTML = `
    <nav class="nav-bar">
    <img id="img-principe" alt="outfitt2">
     <ul>
         <li>
             <a class="list-header" href="./">shop</a>   
         </li>
         <li>
             <a class="list-header" href="coleccion.html">colletion</a>
         </li>
     </ul>
    
         <figure>
             <a href="registrar.html">
                <img class="icon" src="${usuario}" alt="incon" />
             </a>
             <a href="coleccion.html">
                <img class="icon" src="${comprar}"/>
             </a>
        </figure>
</nav>`;
    return $header
}