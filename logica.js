const btnAgregar = document.getElementById("btnAgregar");
const contenedor = document.getElementById("contenedor");

//entrada del formulario
const tituloT = document.getElementById("tituloT");
const contenidoT = document.getElementById("contenidoT");

//Agregar tareas al sitio
btnAgregar.addEventListener("click", agregarTarea);

function agregarTarea(){
    if(tituloT.value !== "" && contenidoT.value !== ""){
        //crear elementos de la tarea y agregarlo al contenedor
        const espacioTarea = document.createElement("div");
        espacioTarea.classList.add("tarea"); //agregar clase al elemento HTML

        const tituloTarea = document.createElement("h3");
        tituloTarea.innerText = tituloT.value.toUpperCase();
        const contenidoTarea = document.createElement("p");
        contenidoTarea.innerText = contenidoT.value;
        const btnBorrarTarea = document.createElement("button");
        btnBorrarTarea.innerText = "Borrar ❌";
        btnBorrarTarea.classList.add("flotar-izq");

        espacioTarea.append(tituloTarea);
        espacioTarea.append(contenidoTarea);
        espacioTarea.append(btnBorrarTarea);

        contenedor.append(espacioTarea);

        tituloT.value = "";
        contenidoT.value = "";

        btnBorrarTarea.addEventListener("click", borrarBoton)
    }else{
        alert("Debe llenar todos los campos")
    }  
}

function borrarBoton(evento){
    evento.target.parentNode.remove()
}