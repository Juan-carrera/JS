
const d = document;
const n = navigator;

export default function getGeolocation(id){


    const $id = d.getElementById(id);

    const options = {
        timeout : 5000,
        enableHighAccuracy : true,
        maximumAge : 0
    };

    const success= (position) => {

        let coords = position.coords;

        console.log(position);

        $id.innerHTML = `
        
        <p>Tu posicion actual es:</p>

        <ul> 
        
        <li>LATITUD: ${coords.latitude}</li>
        <li>LONGITUD: ${coords.longitude}</li>
        <li>PRECISION: ${coords.accuracy} METROS</li>
        
        </ul>

        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">VER EN GOOGLE MAPS</a>
        
        `;
    };

    const error = (err) => {

        $id.innerHTML = `
        <p> <mark>Error ${err.message}!</mark> </p>
        `;
        console.log(`Error : ${err.code} : ${err.message}`);
    };

    n.geolocation.getCurrentPosition(success,error,options);


}