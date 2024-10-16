function submitOrder() {
    const checkboxes = document.querySelectorAll('input[name="menu"]:checked');
    let selectedItems = [];

    Array.from(checkboxes).forEach((checkbox) => {
        selectedItems.push(checkbox.value);
    });

    if (selectedItems.length > 0) {
        console.log("Pesanan Anda: ");
        selectedItems.forEach((item) => {
            console.log(item);
        });
    } else {
        console.log("Anda belum memesan makanan. Silahkan pesan terlebih dahulu.");
    }
}