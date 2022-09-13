//Recibir los nombres de estudiantes desde teclado en una caja de Texto y mostrarlos en una lista

function agregar(){
    let cont="<ol>";
    cont= cont+"<br>"+document.getElementById("nombres").value
    document.getElementById("resultado").innerHTML=cont;
}

//DOM  (Document Object Model)