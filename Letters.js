
function stringcount(){
    var str = document.getElementById("huruf").value;
    var ch = document.getElementById("cari").value;

    var count = str.split(ch).length - 1;
    document.getElementById("hasil").innerHTML = (`total huruf ${ch} sebanyak ${count}`);
}