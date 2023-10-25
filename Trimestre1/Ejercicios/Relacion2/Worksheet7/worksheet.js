
function calcularDistancia(lat1,lon1,lat2,lon2){
    rad = function(x) {return x*Math.PI/180;}
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad( lat2 - lat1 );
    var dLong = rad( lon2 - lon1 );
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d; //Retorna tres decimales
 }

// WATCHPOSITION
// Variables para almacenar las coordenadas de inicio y fin
var coordenadasInicio = null;
var coordenadasFin = null;

// Función para manejar la actualización de la posición
function actualizarPosicion(posicion) {
    var latitud = posicion.coords.latitude;
    var longitud = posicion.coords.longitude;

    // Si es la primera vez que se obtiene la posición, almacénala como posición de inicio
    if (coordenadasInicio === null) {
        coordenadasInicio = { lat: latitud, lon: longitud };
        console.log("Posición de inicio: Latitud " + latitud + ", Longitud " + longitud);
    } else {
        coordenadasFin = { lat: latitud, lon: longitud };
        console.log("Posición actual: Latitud " + latitud + ", Longitud " + longitud);

        // Calcula la distancia entre la posición de inicio y la posición actual
        var distancia = calcularDistancia(
            coordenadasInicio.lat,
            coordenadasInicio.lon,
            coordenadasFin.lat,
            coordenadasFin.lon
        );

        console.log("Distancia recorrida: " + distancia.toFixed(2) + " kilómetros");

        // Actualiza la posición de inicio a la posición actual para el siguiente cálculo
        coordenadasInicio = coordenadasFin;
    }
}


var watchID = navigator.geolocation.watchPosition(actualizarPosicion);