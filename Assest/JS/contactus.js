let map;

function initMap() {
  const myLatLng = { lat: 34.03264123581623, lng: -118.48646245169223 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Work",
  });
}
