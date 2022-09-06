//Recibir los nombres de estudiantes desde teclado en una caja de Texto y mostrarlos en una lista
let contenido="<ol>";
function agregar(){
    contenido= contenido+"<br>"+document.getElementById("nombres").value
    document.getElementById("resultado").innerHTML=contenido;
}

//DOM  (Docuement Object Model)