
  
  let map = L.map('iss_loc').setView([0, 0], 1); // 0 lat and long, no zoom zoom =1;


  const marker = L.marker([0, 0]).addTo(map); // this makes the marker starting at 0,0


   //we need the attribution as stated on the leaflet page
   const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';


   // not a valid URL, more of a format
   const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
   const tiles = L.tileLayer(tileUrl, { attribution });

   //now we add the tiles to our map






setInterval(async () => {
    (await fetch("https://api.wheretheiss.at/v1/satellites/25544").then(async res => {
        const data = await res.json();
        document.getElementById('latitude').textContent = data.latitude;
    document.getElementById('longitude').textContent = data.longitude;
    console.log(data)
    tiles.addTo(map);

    // ADD THE MARKER HERE and insert our lat and lon from the API itself
     // L.marker([latitude, longitude]).addTo(map);
     marker.setLatLng([data.latitude, data.longitude]);
     map.setView([data.latitude, data.longitude],20)

    }))
}, 2000);

