function formato(cadena,fecha){
    let entrada=cadena.split(" ");
    let entrada2=fecha.split("-");
    let nombre=entrada[0];
    let apellidoP=entrada[1];
    let apellidoM=entrada[2];
    let year=entrada2[0];
    let mes=entrada2[1];
    let dia=entrada2[2];

    let r="<ul><li>Nombre: "+nombre+"<br><li>Apellido P: "+apellidoP+"<br><li>apellido M: "+apellidoM+"<br><li>Dia: "+dia+"<br><li>Mes: "+mes+"<br><li>Año: "+year+"</ul>";


    document.getElementById("salida").innerHTML=r;
}

function ordenar(){
    //Dado un conjunto de numeros, ordenarlos.
    let numero= ["a","z","u","e","b"];
    console.log(numero);
    let ordenado=numero.sort();
    //numero.pop();
    //numero.push();
    //numero.shift();
    //numero.length();
    console.log(numero.length);
}
ordenar();