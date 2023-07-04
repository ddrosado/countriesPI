export default function validation (input){

const error = {}
const numberRegex = /^\d+$/;
const durationRegex = /^[1-5]$/;

// nombre de la actividad
if(input.name.length < 1){
error.shortname = "Debe contener al menos un caracter"
}
if(input.name.length > 30){
error.longname = "Se han sobrepasado la cantidad de caracteres"
}

// duración
if(input.duration <= 0){
error.duration = "Debe tener una duración mínima de una hora"
}
if(input.duration > 24){
error.duration = "Debe tener una duración máxima de 24 horas"
}
if(!numberRegex.test(input.duration)){
error.string = "Introduzca un número del 1 al 24"
}

// dificultad
if(!durationRegex.test(input.difficulty)){
error.range = "Introduzca un número del 1 al 5"
}

// temporada
if (input.season.toLowerCase() !== 'verano' &&
    input.season.toLowerCase() !== 'otoño' &&
    input.season.toLowerCase() !== 'invierno' &&
    input.season.toLowerCase() !== 'primavera' ) {
    error.season = "Introduzca una estación del año"
}
return error;
}


