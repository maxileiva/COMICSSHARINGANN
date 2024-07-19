class Localizacion {
    constructor(latitude, longitude, callback) {
        this.latitude = latitude;
        this.longitude = longitude;
        callback();
    }
}

function initMap() {
    const ubicacion = new Localizacion(40.748817, -73.985428, () => {
        const options = {
            center: {
                lat: ubicacion.latitude,
                lng: ubicacion.longitude
            },
            zoom: 16
        };

        const mapElement = document.getElementById('map');
        const map = new google.maps.Map(mapElement, options);

        // Aquí puedes agregar un marcador en la ubicación específica si lo deseas
        const marker = new google.maps.Marker({
            position: options.center,
            map: map,
            title: 'Tu ubicación'
        });
    });
}
