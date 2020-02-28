// troposfeer - 0 - 6/18 km, temperatuur neemt af met de hoogte
// stratosfeer - 6/18 - 50 km, temperatuur neemt toe met de hoogte
// mesosfeer - 50 - 80/85 km, temperatuur neemt af met de hoogte
// thermosfeer - 80/85 - 640-700 km, temperatuur neemt toe met de hoogte
// exosfeer - 700-800 tot 10.000 km

// var troposfeer = '1-18';
// var stratosfeer = '18-50';
// var mesosfeer = '50-85';
// var thermosfeer = '85-700';
// var exosfeer = '700-10000';


var Tekst=null
function toonlaag(){
	// var nu = new laag();
	var laag = nu.getLaag();
	if (laag == 0-18)
		laag = "troposfeer";
	else if (laag == 18-50)
		laag = "stratosfeer"
	else if (laag == 50-85)
		laag = "mesosfeer"
	else if (laag == 85-700)
		laag = "thermosfeer"
	else if (laag == 700-10000)
		laag = "exosfeer"

	var atmosfeerLaag = " "+ laag;
	document.getElementById('lagen').innerHTML=laag;
	tekst = setTimeout("toonlaag()", 1000);
}

toonlaag()