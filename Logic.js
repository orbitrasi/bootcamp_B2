function Logic() {
    var nama = document.getElementById("nama").value;
    var golongan = document.getElementById("golongan").value;
    var kerja = document.getElementById("kerja").value;
    var kerjas = kerja * 30;
    
    if(golongan == "A") {
        var harian = 1000 * kerja;
        var bulanan = harian * 30;
    } else if(golongan == "C") {
        var harian = 2000 * kerja;
        var bulanan = harian * 30;
    } else if(golongan == "D") {
        var harian = 3000 * kerja;
        var bulanan = harian * 30;
    } else if(golongan == "E") {
        var harian = 4000 * kerja;
        var bulanan = harian * 30;
    }

    if(kerjas > 200)
    {
        var total = bulanan + 200 + 48000;
    } else {
        var total = bulanan + 48000;
    }
    
    var output = `
    <h2>Name: ${nama}</h2>
    <h2>Golongan: ${golongan}</h2>
    <h2>Gaji Perhari: ${harian}</h2>
    <h2>Gaji Bulanan: ${bulanan}</h2>
    <h2>Lembur: 48000</h2>
    <h2>Total Gaji: ${total}</h2>

  `;
//   <h3>Gaji Per Hari: ${}</h3>
//   <h3>Gaji Bulanan: ${}</h3>
//   <h3>Lembur: RP 48.000</h3>
//   <h3>Total Keseluruhan: ${}</h3>

  document.getElementById("output-biodata").innerHTML = output;
}