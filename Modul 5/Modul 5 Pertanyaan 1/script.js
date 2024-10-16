document.getElementById('submitOrder').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const pesanan = [];

    checkboxes.forEach((checkbox) => {
        pesanan.push(checkbox.value);
    });

    console.log('Hasil Pesanan:', pesanan);
});
