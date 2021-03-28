function konversi() {
	var angka = document.getElementById("form").angka.value;
	var dari = document.getElementById("form").dari.value;
	var ke = document.getElementById("form").ke.value;
	var hasil = document.getElementById("hasil");

	// Celsius
	if(dari == "Celsius" && ke == "Celsius") {
		hasil.innerHTML = Number(angka);
	} else if(dari == "Celsius" && ke == "Fahrenheit") {
		hasil.innerHTML = Number(angka) * 9 / 5 + 32;
	} else if(dari == "Celsius" && ke == "Kelvin") {
		hasil.innerHTML = Number(angka) + 273.15;
	} else if(dari == "Celsius" && ke == "Reamur") {
		hasil.innerHTML = Number(angka) * 4 / 5;
	}

	// Fahrenheit
	else if(dari == "Fahrenheit" && ke == "Celsius") {
		hasil.innerHTML = (Number(angka) - 32) * 5 / 9;
	} else if(dari == "Fahrenheit" && ke == "Fahrenheit") {
		hasil.innerHTML = Number(angka);
	} else if(dari == "Fahrenheit" && ke == "Kelvin") {
		hasil.innerHTML = (Number(angka) - 32) * 5 / 9 + 273.15;
	} else if(dari == "Fahrenheit" && ke == "Reamur") {
		hasil.innerHTML = (Number(angka) - 32) * 4 / 9;
	}

	// Kelvin
	else if(dari == "Kelvin" && ke == "Celsius") {
		hasil.innerHTML = Number(angka) - 273.15;
	} else if(dari == "Kelvin" && ke == "Fahrenheit") {
		hasil.innerHTML = (Number(angka) - 273.15) * 9 / 5 + 32;
	} else if(dari == "Kelvin" && ke == "Kelvin") {
		hasil.innerHTML = Number(angka);
	} else if(dari == "Kelvin" && ke == "Reamur") {
		hasil.innerHTML = (Number(angka) - 273.15) * 0.8;
	}

	// Reamur
	else if(dari == "Reamur" && ke == "Celsius") {
		hasil.innerHTML = Number(angka) * 5 / 4;
	} else if(dari == "Reamur" && ke == "Fahrenheit") {
		hasil.innerHTML = Number(angka) * 9 / 4 + 32;
	} else if(dari == "Reamur" && ke == "Kelvin") {
		hasil.innerHTML = Number(angka) * 5 / 4 + 273.15;
	} else if(dari == "Reamur" && ke == "Reamur") {
		hasil.innerHTML = Number(angka);
	}
}