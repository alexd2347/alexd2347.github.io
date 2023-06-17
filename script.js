//pa saber si inicio el juego
var bandera = false;
//pa indicar el turno del jugador
var turno = 0;
//arreglo de los botones
var tab = new Array();
//contador pa el empate
var contador = 0;
//sonido xd
const audio_boton1 = new Audio('./sonido_boton1.mp3');
const audio_boton2 = new Audio('./sonido_boton2.mp3');
const audio_ganar = new Audio('./sonido_ganar.mp3');

//const audio_fondo = new Audio('./musica_fondo.mp3');

window.onload = function(){
    var iniciar = document.getElementById("iniciar");
    iniciar.addEventListener("click", comenzar);
    contador = 0;
}

function comenzar(){

    //audio_fondo.play();

    contador = 0;
    bandera = true;
    var jugador1 = document.getElementById("jugador1");
    var jugador2 = document.getElementById("jugador2");
    if(jugador1.value == ""){
        alert("falta el nombre del jugador 1");
        jugador1.focus();
    }else{
        if(jugador2.value == ""){
            alert("falta el nombre del jugador 2");
            jugador2.focus();
        }else{
            tab[0] = document.getElementById("b0");
            tab[1] = document.getElementById("b1");
            tab[2] = document.getElementById("b2");
            tab[3] = document.getElementById("b3");
            tab[4] = document.getElementById("b4");
            tab[5] = document.getElementById("b5");
            tab[6] = document.getElementById("b6");
            tab[7] = document.getElementById("b7");
            tab[8] = document.getElementById("b8");
            for(var i = 0; i < 9; i++){
                tab[i].className = "button";
                tab[i].value = "I";
            }
            turno=Math.floor(Math.random() * (3 - 1)) + 1;
            console.log(turno);
            if(turno == 1){
                var labelJugador = document.getElementById("turnoJugador");
                labelJugador.className = "play1";
                document.getElementById("turnoJugador").innerHTML = "Turno Jugador " + jugador1.value;
            }
            if(turno == 2){
                var labelJugador = document.getElementById("turnoJugador");
                labelJugador.className = "play2";
                document.getElementById("turnoJugador").innerHTML = "Turno Jugador " + jugador2.value;
            }
            
        }
    }
}
function colocar(boton){
    if(bandera == true){
        if(turno == 1 && boton.value == "I"){
            contador++;
            audio_boton1.play();
            turno = 2;
            var labelJugador = document.getElementById("turnoJugador");
            labelJugador.className = "play2";
            document.getElementById("turnoJugador").innerHTML = "Turno Jugador " + jugador2.value;
            boton.value = "X";
            boton.className = "botonJugador1";
        }else{
            if(turno == 2 && boton.value == "I"){
                contador++;
                audio_boton2.play();
                turno = 1;
                var labelJugador = document.getElementById("turnoJugador");
                labelJugador.className = "play1";
                document.getElementById("turnoJugador").innerHTML = "Turno Jugador " + jugador1.value;
                boton.value = "O";
                boton.className = "botonJugador2";
            }
        }
    }
    revisar();
}

function revisar(){
    if(
        (tab[0].value == "X" && tab[1].value == "X" && tab[2].value == "X")||
        (tab[3].value == "X" && tab[4].value == "X" && tab[5].value == "X")||
        (tab[6].value == "X" && tab[7].value == "X" && tab[8].value == "X")||
        (tab[0].value == "X" && tab[3].value == "X" && tab[6].value == "X")||
        (tab[1].value == "X" && tab[4].value == "X" && tab[7].value == "X")||
        (tab[2].value == "X" && tab[5].value == "X" && tab[8].value == "X")||
        (tab[0].value == "X" && tab[4].value == "X" && tab[8].value == "X")||
        (tab[2].value == "X" && tab[4].value == "X" && tab[6].value == "X")
    ){
        bandera = false;
        document.getElementById("turnoJugador").innerHTML = "GANADOR ES " + jugador1.value;
        var labelJugador = document.getElementById("turnoJugador");
        labelJugador.className = "playG";
        bandera = false;
        contador = 0;
        turno = 1;
        audio_ganar.play();
    }
    if(tab[0].value == "X" && tab[1].value == "X" && tab[2].value == "X"){
        document.getElementById("b0").className = "win1";
        document.getElementById("b1").className = "win1";
        document.getElementById("b2").className = "win1";
    }
    if(tab[3].value == "X" && tab[4].value == "X" && tab[5].value == "X"){
        document.getElementById("b3").className = "win1";
        document.getElementById("b4").className = "win1";
        document.getElementById("b5").className = "win1";
    }
    if(tab[6].value == "X" && tab[7].value == "X" && tab[8].value == "X"){
        document.getElementById("b6").className = "win1";
        document.getElementById("b7").className = "win1";
        document.getElementById("b8").className = "win1";
    }
    if(tab[0].value == "X" && tab[3].value == "X" && tab[6].value == "X"){
        document.getElementById("b0").className = "win1";
        document.getElementById("b3").className = "win1";
        document.getElementById("b6").className = "win1";
    }
    if(tab[1].value == "X" && tab[4].value == "X" && tab[7].value == "X"){
        document.getElementById("b1").className = "win1";
        document.getElementById("b4").className = "win1";
        document.getElementById("b7").className = "win1";
    }
    if(tab[2].value == "X" && tab[5].value == "X" && tab[8].value == "X"){
        document.getElementById("b2").className = "win1";
        document.getElementById("b5").className = "win1";
        document.getElementById("b8").className = "win1";
    }
    if(tab[0].value == "X" && tab[4].value == "X" && tab[8].value == "X"){
        document.getElementById("b0").className = "win1";
        document.getElementById("b4").className = "win1";
        document.getElementById("b8").className = "win1";
    }
    if(tab[2].value == "X" && tab[4].value == "X" && tab[6].value == "X"){
        document.getElementById("b2").className = "win1";
        document.getElementById("b4").className = "win1";
        document.getElementById("b6").className = "win1";
    }


    //xd
    if(
        (tab[0].valueO== "O" && tab[1].valueO== "O" && tab[2].value == "O")||
        (tab[3].value == "O" && tab[4].value == "O" && tab[5].value == "O")||
        (tab[6].value == "O" && tab[7].value == "O" && tab[8].value == "O")||
        (tab[0].value == "O" && tab[3].value == "O" && tab[6].value == "O")||
        (tab[1].value == "O" && tab[4].value == "O" && tab[7].value == "O")||
        (tab[2].value == "O" && tab[5].value == "O" && tab[8].value == "O")||
        (tab[0].value == "O" && tab[4].value == "O" && tab[8].value == "O")||
        (tab[2].value == "O" && tab[4].value == "O" && tab[6].value == "O")
    ){
        document.getElementById("turnoJugador").innerHTML = "GANADOR ES " + jugador2.value;
        var labelJugador = document.getElementById("turnoJugador");
        labelJugador.className = "playG";
        bandera = false;
        audio_ganar.play();
    }
    if(tab[0].value == "O" && tab[1].value == "O" && tab[2].value == "O"){
        document.getElementById("b0").className = "win2";
        document.getElementById("b1").className = "win2";
        document.getElementById("b2").className = "win2";
    }
    if(tab[3].value == "O" && tab[4].value == "O" && tab[5].value == "O"){
        document.getElementById("b3").className = "win2";
        document.getElementById("b4").className = "win2";
        document.getElementById("b5").className = "win2";
    }
    if(tab[6].value == "O" && tab[7].value == "O" && tab[8].value == "O"){
        document.getElementById("b6").className = "win2";
        document.getElementById("b7").className = "win2";
        document.getElementById("b8").className = "win2";
    }
    if(tab[0].value == "O" && tab[3].value == "O" && tab[6].value == "O"){
        document.getElementById("b0").className = "win2";
        document.getElementById("b3").className = "win2";
        document.getElementById("b6").className = "win2";
    }
    if(tab[1].value == "O" && tab[4].value == "O" && tab[7].value == "O"){
        document.getElementById("b1").className = "win2";
        document.getElementById("b4").className = "win2";
        document.getElementById("b7").className = "win2";
    }
    if(tab[2].value == "O" && tab[5].value == "O" && tab[8].value == "O"){
        document.getElementById("b2").className = "win2";
        document.getElementById("b5").className = "win2";
        document.getElementById("b8").className = "win2";
    }
    if(tab[0].value == "O" && tab[4].value == "O" && tab[8].value == "O"){
        document.getElementById("b0").className = "win2";
        document.getElementById("b4").className = "win2";
        document.getElementById("b8").className = "win2";
    }
    if(tab[2].value == "O" && tab[4].value == "O" && tab[6].value == "O"){
        document.getElementById("b2").className = "win2";
        document.getElementById("b4").className = "win2";
        document.getElementById("b6").className = "win2";
    }
    if(contador>=9 && bandera==true){
        document.getElementById("turnoJugador").innerHTML = "EMPATE";
        var labelJugador = document.getElementById("turnoJugador");
        labelJugador.className = "playG";
        bandera = false;
        contador = 0;
        turno = 0;
        
        audio_ganar.play();
    }
}