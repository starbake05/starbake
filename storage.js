// ==========================================
// STARBAKE STORAGE V1.2
// ==========================================

// =======================
// STORAGE KEY
// =======================

const STORAGE = {

    PRODUCTS: "starbake_products",

    CATEGORIES: "starbake_categories",

    PAYMENTS: "starbake_payments",

    BANNERS: "starbake_banners",

    PROMOS: "starbake_promos",

    SETTINGS: "starbake_settings",

    ORDERS: "starbake_orders"

};


// =======================
// GENERIC FUNCTION
// =======================

function loadData(key) {

    const data = localStorage.getItem(key);

    if (!data) return [];

    return JSON.parse(data);

}

function saveData(key, value) {

    localStorage.setItem(

        key,

        JSON.stringify(value)

    );

}


// =======================
// PRODUCTS
// =======================

function getProducts() {

    return loadData(STORAGE.PRODUCTS);

}

function saveProducts(products) {

    saveData(

        STORAGE.PRODUCTS,

        products

    );

}


// =======================
// CATEGORIES
// =======================

function getCategories() {

    return loadData(

        STORAGE.CATEGORIES

    );

}

function saveCategories(categories) {

    saveData(

        STORAGE.CATEGORIES,

        categories

    );

}


// =======================
// PAYMENTS
// =======================

function getPayments() {

    return loadData(

        STORAGE.PAYMENTS

    );

}

function savePayments(payments) {

    saveData(

        STORAGE.PAYMENTS,

        payments

    );

}


// =======================
// BANNERS
// =======================

function getBanners() {

    return loadData(

        STORAGE.BANNERS

    );

}

function saveBanners(banners) {

    saveData(

        STORAGE.BANNERS,

        banners

    );

}


// =======================
// PROMOS
// =======================

function getPromos() {

    return loadData(

        STORAGE.PROMOS

    );

}

function savePromos(promos) {

    saveData(

        STORAGE.PROMOS,

        promos

    );

}


// =======================
// SETTINGS
// =======================

function getSettings() {

    return loadData(

        STORAGE.SETTINGS

    );

}

function saveSettings(settings) {

    saveData(

        STORAGE.SETTINGS,

        settings

    );

}


// =======================
// ORDERS
// =======================

function getOrders() {

    return loadData(

        STORAGE.ORDERS

    );

}

function saveOrders(orders) {

    saveData(

        STORAGE.ORDERS,

        orders

    );

}
