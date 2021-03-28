function Naikangka() {
    var count = document.getElementById("naikangka").value;
    var start = 1;
    var temp = [];

    while (start <= count) {
      temp.push(start);
      start++;
    }
   
    document.getElementById("outputnaik").innerHTML = temp;
  }

function Kuadrat() {
    var count = document.getElementById("kuadratangka").value;
    var awal = 1;
    var finish = [];

    while (awal <= count) {
      finish.push(awal*awal);
      awal++;
    }
   
    document.getElementById("hasilkuadrat").innerHTML = finish  ;
  }

  function Kelipatan() {
    var count = document.getElementById("kali3").value;
    var awal2 = 1;
    var finish2 = [];

    while (awal2 <= count) {
      finish2.push(awal2*3);
      awal2++;
    }
   
    document.getElementById("hasilkali").innerHTML = finish2  ;
  }