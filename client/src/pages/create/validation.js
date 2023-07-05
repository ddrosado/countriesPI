export default function validation(input) {
    const error = {};
    const letterRegex = /^[A-Za-z\s]{0,35}$/;
    const durationRegex = /^(?:[1-9]|1\d|2[0-4])$/; // 1 al 24
    const difficultyRegex = /^[1-5]+$/; // 1 al 5
  
// nombre de la actividad
if (!letterRegex.test(input.name)) {
    error.name = "Introduzca solo letras";
}
if(input.name.length > 30){
    error.name = "Se superaron los caracteres máximos"
}
if(input.name.length < 3){
    error.name = "Introduzca el nombre de la actividad"
}

// duración
if (!durationRegex.test(input.duration)) {
    error.duration = "Introduzca un número del 1 al 24";
}

// dificultad
if (!difficultyRegex.test(input.difficulty)) {
    error.difficulty = "Introduzca un número del 1 al 5";
}

// temporada
const validSeasons = ["verano", "otoño", "invierno", "primavera", "noseason"];
if (!validSeasons.includes(input.season.toLowerCase())) {
    error.season = "Introduzca una estación del año";
}

  return error;
}