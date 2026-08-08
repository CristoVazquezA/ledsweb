function cambiarFoco(foco) {
    if (foco.src.includes("img/focoapagado.png")) {
        foco.src = "img/focoencendido.png";
    }
    else {
        foco.src = "img/focoapagado.png";
    }
}

function actlizarReloj() {
    const ahora = new Date();
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dia = dias[ahora.getDay()];
    const fecha = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds().toString().padStart(2, '0');

    document.getElementById("reloj").innerHTML = `${dia}, ${fecha} de ${mes} de ${año} ${hora}:${minutos}:${segundos}`;
}

window.onload = function() {
    
    actlizarReloj();
    setInterval(actlizarReloj, 1000);
}

function salir() {
    if (confirm("¿Estás seguro de que deseas salir?")) {
    window.close();
    }
}

ledTodosEncedidos = false;

function cabiarTodos() {
    ledTodosEncedidos = !ledTodosEncedidos;
    const imagen = ledTodosEncedidos ? "img/focoencendido.png" : "img/focoapagado.png";
    document.getElementById("foco1").src = imagen;
    document.getElementById("foco2").src = imagen;
    document.getElementById("foco3").src = imagen;
    document.getElementById("foco4").src = imagen;
    const boton = document.getElementById("btnfocos");
    if (ledTodosEncedidos) {
        boton.innerHTML = "Apagar todos";
        boton.style.backgroundColor ="#d33545";
        
    }
    else {
        boton.innerHTML = "Encender todos";
        boton.style.backgroundColor = "#4CAF50";
    }

}

