// ===============================
// STARBAKE STORAGE V1.1
// ===============================

// Nama penyimpanan di browser
const STORAGE_KEY = "starbake_products";

// Ambil semua produk
function getProducts() {

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
        return [];
    }

    return JSON.parse(data);

}

// Simpan semua produk
function saveProducts(products) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(products)
    );

}
