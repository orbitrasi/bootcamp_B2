function Study () {
    var umur = document.getElementById("angka").value;

    if (umur >= 0 && umur <= 1) {
      document.getElementById('hasilnya').innerHTML = `<li>umur ${umur} tahun adalah Bayi</li>`;
    } else if (umur >= 2 && umur <= 10) {
        document.getElementById('hasilnya').innerHTML = `<li>umur ${umur} tahun adalah Anak-anak</li>`;
    } else if (umur >= 11 && umur <= 19) {
        document.getElementById('hasilnya').innerHTML = `<li>umur ${umur} tahun adalah Remaja</li>`;
    } else if (umur >= 20 && umur <= 60) {
        document.getElementById('hasilnya').innerHTML = `<li>umur ${umur} tahun adalah Dewasa</li>`;
    }else if (umur >= 61) {
        document.getElementById('hasilnya').innerHTML = `<li>umur ${umur} tahun adalah E</li>`;
    }
     else {
        document.getElementById('hasilnya').innerHTML = '<br/> umur Anda Invalid';
    }
}
