let url_base = "https://api.openweathermap.org/data/2.5/weather";
let api_key = "b7f72534349efe2c671fffdaaa467640";

let difKelvin = 273.15;

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const city = document.getElementById("ciudadEntrada").value;

  if (city) {
    fetchDatosClima(city);
  }
});

function fetchDatosClima(city) {
  fetch(`${url_base}?q=${city}&appid=${api_key}`)
    .then((response) => response.json())
    .then((response) => mostrarDatosClima(response));
}

function mostrarDatosClima(datos) {
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  const ciudadNombre = datos.name;
  const paisNombre = datos.sys.country;

  const temperatura = datos.main.temp;
  const descripcion = datos.weather[0].description;
  const humedad = datos.main.humidity;
  const icono = datos.weather[0].icon;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `Temperatura: ${(
    temperatura - difKelvin
  ).toFixed(2)}°C`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `Humedad: ${humedad}%`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `La descripción meteorogica es: ${descripcion}`;

  const iconoImagen = document.createElement("img");
  iconoImagen.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(iconoImagen);
  divDatosClima.appendChild(descripcionInfo);
}
