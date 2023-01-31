/**cuando toque el boton me gusta, ejecute la funcion sumar */
  let numContainer = document.getElementById("num")
  let value = 0
  let btnInc = document.querySelector(".inc")
  btnInc.addEventListener("click",()=>{value++;numContainer.textContent=value});
  
  
        