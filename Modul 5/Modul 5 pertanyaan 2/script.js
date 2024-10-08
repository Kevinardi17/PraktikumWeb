function submitOrder() {
    const checkboxes = document.querySelectorAll('input[name="menu"]:checked');
    let selectedItems = [];

    checkboxes.forEach((checkbox) => {
        selectedItems.push(checkbox.value);
    });

    if (selectedItems.length > 0) {
        console.log("Pesanan Anda:");
        selectedItems.forEach((item) => {
            console.log(item);
        });
    } else {
        console.log("Tidak ada pesanan yang dipilih.");
    }
}