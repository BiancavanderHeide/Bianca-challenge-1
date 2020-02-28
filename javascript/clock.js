var Teller=null
function toontijd () {
	var nu = new Date();
	var maand = nu.getMonth();
	if (maand == 0)
		maand = "Januari";
	else if (maand == 1)
		maand = "Februari";
	else if (maand == 2)
		maand = "Maart";
	else if (maand == 3)
		maand = "April";
	else if (maand == 4)
		maand = "Mei";
	else if (maand == 5)
		maand = "Juni";
	else if (maand == 6)
		maand = "Juli";
	else if (maand == 7)
		maand = "Augustus";
	else if (maand == 8)
		maand = "September";
	else if (maand == 9)
		maand = "Oktober";
	else if (maand == 10)
		maand = "November";
	else if (maand == 11)
		maand = "December";

	var datum = nu.getDate();

	var dag = nu.getDay();
	if (dag == 0)
		dag = "Zondag";
	else if (dag == 1)
		dag = "Maandag";
	else if (dag == 2)
		dag = "Dinsdag";
	else if (dag == 3)
		dag = "Woensdag";
	else if (dag == 4)
		dag = "Donderdag";
	else if (dag == 5)
		dag = "Vrijdag";
	else if (dag == 6)
		dag = "Zaterdag";
	var uren = nu.getHours();
	if (uren <=9);
		uren = ""+uren;
	var minuten = nu.getMinutes();
	if (minuten <=9);
		minuten = ""+minuten;
	var seconden = nu.getSeconds();
	if (seconden <=9);
		seconden = ""+seconden;
	var tijdWaarde = "" + dag;
		tijdWaarde += " " + datum;
		tijdWaarde += " " + maand;
		tijdWaarde += " " + uren;
		tijdWaarde += ":"+minuten;
		tijdWaarde += ":"+seconden;
	document.getElementById('klokbalk').innerHTML=tijdWaarde;
	teller = 
	setTimeout("toontijd()",1000);
}

toontijd()
