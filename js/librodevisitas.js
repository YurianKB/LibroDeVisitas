var contadorNota=1

function obtenerTexto(){
  var area = document.getElementById("espacioTexto").value;
  var mostrarTexto = document.getElementById("text");
  mostrarTexto.innerHTML = area;
  var textoPreview = mostrarTexto.innerHTML;
  return textoPreview;
}

function limpiar(){
  document.getElementById("textoArea").value="";
  document.getElementById("text").innerText="";
  console.log("text");
  document.getElementById("text").removeAttribute("style");
  document.getElementById("imagenNota").src="";
}

function agregarImagen(){
  var agregarURLImagen=prompt("Ingrese la URL de la Imagen");
  document.getElementById("imagenNota").src=agregarURLImagen;
  document.getElementById("imagenNota").removeAttribute("hidden");
}

function enviar(){
  var textoCopia = document.getElementById("visita").cloneNode(true);
  console.log(textoCopia);
  textoCopia.id = "nota"+contadorNota;
  var contenedor = document.getElementById("contenedor");
  contenedor.appendChild(textoCopia);
  console.log(textoCopia.innerText);
  var contadorDeElemento = document.getElementById("nota"+contadorNota).children.length;
  for(var i=0;i<contadorDeElemento;i++){
   document.getElementById("nota"+contadorNota).children[i].id=document.getElementById("nota"+contadorNota).children[i].id+contadorNota;
  }

  document.getElementById("botonEliminar" + contadorNota).removeAttribute("hidden");
  document.getElementById("imagenNota" + contadorNota).removeAttribute("hidden");
  document.getElementById("lineaSeparadora" + contadorNota).removeAttribute("hidden");
  document.getElementById("botonEliminar" + contadorNota).value=contadorNota;
  contadorNota++;
  agregarLista();
  limpiar();
}

function textoGrande(){
  document.getElementById("text").style.fontSize = "40px";
}

function textoMediano(){
  document.getElementById("text").style.fontSize = "30px";
}

function textoPequeno(){
  document.getElementById("text").style.fontSize = "10px";
}

function colorTexto(){
  var color=prompt("Ingresar el color del texto en hexadecimal");
  console.log(color);
  document.getElementById("text").style.color = color;
}

function colorFondo(){
  var color=prompt("ingrese el color del fondo");
  document.getElementById("text").style.background = color;
}

function alinearIzquierda(){
  document.getElementById("text").style.textAlign ="left";
}

function centrar(){
  document.getElementById("text").style.textAlign ="center";
}

function alinearDerecha(){
  document.getElementById("text").style.textAlign ="right";
}

function eliminarNota(value){
  var  cantidadNotas = document.getElementById("contenedor").children.length;
  console.log(cantidadNotas);
  for (var i = 0; i < cantidadNotas; i++){
    var nombreNota = document.getElementById("contenedor").children[i].id;
    console.log(nombreNota);
    if(nombreNota == "nota" + value){
      document.getElementById("contenedor").removeChild(contenedorNuevosArticulos.children[i]);
      i = cantidadNotas;
    }
  }
}

function agregarLista(){
  var elementolistaVisita = document.createElement("li");
  elementolistaVisita.innerHTML = document.getElementById("text").innerHTML;
  document.getElementById("listaDeVisitas").appendChild(elementolistaVisita);
  console.log(elementolistaVisita);
  document.getElementById("divConScroll").removeAttribute("hidden");
}
