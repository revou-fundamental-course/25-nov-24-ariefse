
function validateForm() {
    let inputBeratBadan = document.getElementById('berat-badan-input').value;
    let inputUsia = document.getElementById('usia-input').value;
    let inputTinggiBadan = document.getElementById('tinggi-badan-input').value;

    console.log('BB:' + inputBeratBadan);
    console.log('Usia:' + inputUsia);
    console.log('Tinggi:' + inputTinggiBadan);
    if (inputBeratBadan != '' && inputUsia != '' && inputTinggiBadan != '') {
        let calculate = parseInt(inputBeratBadan) / parseInt (inputTinggiBadan) * (inputTinggiBadan);
        updateResult (calculate);
     } else {
                alert ('Data tidak benar, Mohon cek kembali !!');
            
        }
    }    

    function updateResult(result) {
        document.getElementById('result-calculation').innerHTML = result;
    }
    
    