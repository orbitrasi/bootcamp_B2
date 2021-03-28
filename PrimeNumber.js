function Prime () {
    var number = document.getElementById("angka").value;

    if (number === 1) {
      document.getElementById('hasilnya').innerHTML = '<br/> "1 is neither prime nor composite number."';
    } else if (number > 1) {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    break;
                }
            }
        
            if (number) {
                document.getElementById('hasilnya').innerHTML = (`${number} is a prime number`);
            } else {
                document.getElementById('hasilnya').innerHTML = (`${number} is a not prime number`);
            }
        }
    }