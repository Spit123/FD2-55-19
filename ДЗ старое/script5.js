var country;
var capital;

function inputData() {
	do {
		do {
			country = prompt("Введите страну");
			if (country === null) {
				break;
			}
			if (country != null && typeof country !== "undefined") {
				country = country.replace(/[0-9]/g, '');
				country = country.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
				country = country.replace(/\s{2,}/g," ");
				country = country.trim();
			}
			if (country.length < 2) {
				alert("Страна не может состоять из 1 буквы или поле быть вовсе пустым!!!");
				continue;
			}
		} while (country.length < 2)
		if (country === null) {
			break;
		}
	} while (!country)

	do {
		do {
			capital = prompt("Введите столицу");
			if (capital === null) {
				break;
			}
			if (capital != null && typeof capital !== "undefined") {
				capital = capital.replace(/[0-9]/g, '');
				capital = capital.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
				capital = capital.replace(/\s{2,}/g," ");
				capital = capital.trim();
			}
			if (capital.length < 2) {
				alert("Столица не может состоять из 1 буквы или поле быть вовсе пустым!!!");
				continue;
			}
		} while (capital.length < 2)
		if (capital === null) {
			break;
		}
	} while (!capital)
	if ((country === null) || (capital === null)) {
		return;
	}
	addСountry(country, capital);
}

function getInfo() {
	country = prompt("Введите страну для инфо");
	if (country === null) {
		return;
	}
	if (country != null && typeof country !== "undefined") {
		country = country.replace(/[0-9]/g, '');
		country = country.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
		country = country.replace(/\s{2,}/g," ");
		country = country.trim();
	}
	if (country.length < 2) {
		alert("Страна не может состоять из 1 буквы или поле быть вовсе пустым!!!");
		return;
	}
	alert(getcountryInfo(country));
}

function countriesall() {
	if (!listСountries()){
		console.log("В хэше нет стран!");
	} else {
		console.log(listСountries());
	}
}

function deleteData() {
	country = prompt("Какую страну удалить?");
	if (country === null) {
		return;
	}
	if (country != null && typeof country !== "undefined") {
		country = country.replace(/[0-9]/g, '');
		country = country.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
		country = country.replace(/\s{2,}/g," ");
		country = country.trim();
	}
	if (country.length < 2) {
		alert("Страна не может состоять из 1 буквы или поле быть вовсе пустым!!!");
		return;
	}
	if ( country in countries) {
		deleteСountry(country);
		alert("Страна " + country + " успешно удалена!");
	} else {
		alert("Страны " + country + " в хэше не существует!");
	}
}