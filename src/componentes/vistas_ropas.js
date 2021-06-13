export default function Detalles(){
    const $ctnVistaRopa = document.createElement("div")

    $ctnVistaRopa.innerHTML = `
    <section class="detalles">
     <div class="ctn-filtro">
         <h2>Crown</h2>
         <p>$80.000</p>
         <div class="form-group"> 
             <p>Talla</p>
             <label class="form-group" >
               <input
                 name="recommend-select"
                 value="Sí"
                 type="radio"
                />S</label>
     
             <label class="form-group">
               <input
                 name="recommend-select"
                 value="No"
                 type="radio"
               />M</label>

               <label class="form-group">
                 <input
                   name="recommend-select"
                   value="No"
                   type="radio"
                 />L</label>

                 <label class="form-group">
                     <input
                       name="recommend-select"
                       value="No"
                       type="radio"
                     />XL</label>

                     <label class="form-group">
                         <input
                           name="recommend-select"
                           value="No"
                           type="radio"
                         />XL</label>
           </div>
             <button class="boton" id="boton1">Añadir al carrito</button>
             <br>
             <button class="boton" id="boton2">Comprar esto ahora</button>
                 <br>
                 <br>
            <div class="lorem">
            Let them know you’re 90s royalty with this official The Fresh Prince crown pattern sweater. Throw vintage vibes that Uncle Phil would approve of. Featuring woven The Fresh Prince logo on chest. Navy crown print crew neck sweatshirt with white ribbed collar and waist band. Cotton/Poly blend.
            </div> 
     </div>
     <div class="ctn-img-vistas">
     <img class="img" src="https://www.centrodeimpresiones.com/wp-content/uploads/2018/02/051-ROYAL-7.jpg" alt="img">
     <br>
     <img class="img" src="https://www.centrodeimpresiones.com/wp-content/uploads/2018/02/051-ROYAL-7.jpg" alt="img">
     <br>
     <img  class="img" src="https://www.centrodeimpresiones.com/wp-content/uploads/2018/02/051-ROYAL-7.jpg" alt="img">
     <br>
     </div>
     </section>
    `
    return $ctnVistaRopa
}