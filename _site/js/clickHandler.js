
      	//var popup = new L.popup();
       	var mark=new L.marker();
       	var ltalg;//=new L.latLng();
       	var cir=new L.circle();
       
		var greenIcon = L.icon({
			iconUrl: 'images/man.png',
			shadowUrl: '',

			iconSize:     [38, 95], // size of the icon
			shadowSize:   [50, 64], // size of the shadow
			iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
			shadowAnchor: [4, 62],  // the same for the shadow
			popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		});

function onMapClick(e) {
	/*popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.lat.toString())
		.openOn(map);*/
		
		ltalg=mark.getLatLng();
		if (ltalg!=null){
			map.removeLayer(mark);
		}
		
		mark.setIcon(greenIcon);
		mark.setLatLng([e.latlng.lat.toString(), e.latlng.lng.toString()]);
		mark.addTo(map);
		//L.circle([38,24], {radius: 10000}).addTo(map);
		/*if (filterString==null){
			cir.removeFrom(map);
		}
		else{
			cir.setLatLng([e.latlng.lat.toString(), e.latlng.lng.toString()]);
			cir.setRadius(Number(filterString));
			cir.redraw();
			cir.addTo(map);
		}*/
}

map.on('click', onMapClick);



