// ======================================
// STARBAKE
// category.js
// Version : 1.2
// Owner : Candra Gunawan
// ======================================


// ==============================
// ELEMENT
// ==============================

const categoryModal =
document.getElementById("categoryModal");

const addCategoryButton =
document.getElementById("addCategory");

const closeCategoryButton =
document.getElementById("closeCategory");

const saveCategoryButton =
document.getElementById("saveCategory");

const categoryName =
document.getElementById("categoryName");

const categoryCode =
document.getElementById("categoryCode");

const categoryIcon =
document.getElementById("categoryIcon");

const productCategory =
document.getElementById("productCategory");

const filterCategory =
document.getElementById("filterCategory");



// ==============================
// DEFAULT CATEGORY
// ==============================

function initDefaultCategories(){

    let categories = getCategories();

    if(categories.length>0){

        return;

    }

    categories=[

        {
            name:"Roti Satuan",
            code:"RB",
            icon:"🍞"
        },

        {
            name:"Roti Bakar",
            code:"RK",
            icon:"🥖"
        },

        {
            name:"Pizza",
            code:"PZ",
            icon:"🍕"
        },

        {
            name:"Burger",
            code:"BG",
            icon:"🍔"
        },

        {
            name:"Sandwich",
            code:"SW",
            icon:"🥪"
        },

        {
            name:"Hotdog",
            code:"HD",
            icon:"🌭"
        },

        {
            name:"Drinks",
            code:"DR",
            icon:"🥤"
        },

        {
            name:"Coffee",
            code:"CF",
            icon:"☕"
        }

    ];

    saveCategories(categories);

}



// ==============================
// LOAD DROPDOWN
// ==============================

function loadCategoryDropdown(){

    const categories =
    getCategories();

    productCategory.innerHTML="";

    filterCategory.innerHTML=
    '<option value="Semua">Semua Kategori</option>';

    categories.forEach(function(category){

        const option1=
        document.createElement("option");

        option1.value=
        category.name;

        option1.textContent=
        category.icon+" "+category.name;

        productCategory.appendChild(option1);

        const option2=
        document.createElement("option");

        option2.value=
        category.name;

        option2.textContent=
        category.icon+" "+category.name;

        filterCategory.appendChild(option2);

    });

}



// ==============================
// OPEN MODAL
// ==============================

addCategoryButton.onclick=function(){

    categoryName.value="";

    categoryCode.value="";

    categoryIcon.selectedIndex=0;

    categoryModal.style.display="flex";

};



// ==============================
// CLOSE MODAL
// ==============================

closeCategoryButton.onclick=function(){

    categoryModal.style.display="none";

};

window.addEventListener("click",function(event){

    if(event.target===categoryModal){

        categoryModal.style.display="none";

    }

});
// ==============================
// SAVE CATEGORY
// ==============================

saveCategoryButton.onclick=function(){

    const name=
    categoryName.value.trim();

    const code=
    categoryCode.value.trim().toUpperCase();

    const icon=
    categoryIcon.value;

    if(name===""){

        alert("Nama kategori wajib diisi.");

        return;

    }

    if(code===""){

        alert("Kode SKU wajib diisi.");

        return;

    }

    const categories=
    getCategories();

    const duplicateName=
    categories.find(function(item){

        return item.name.toLowerCase()===name.toLowerCase();

    });

    if(duplicateName){

        alert("Nama kategori sudah ada.");

        return;

    }

    const duplicateCode=
    categories.find(function(item){

        return item.code===code;

    });

    if(duplicateCode){

        alert("Kode SKU sudah digunakan.");

        return;

    }

    categories.push({

        name:name,

        code:code,

        icon:icon

    });

    saveCategories(categories);

    loadCategoryDropdown();

    categoryModal.style.display="none";

    categoryName.value="";

    categoryCode.value="";

    categoryIcon.selectedIndex=0;

    alert("Kategori berhasil disimpan.");

};



// ==============================
// GET SKU PREFIX
// ==============================

function getCategoryCode(categoryName){

    const categories=
    getCategories();

    const category=
    categories.find(function(item){

        return item.name===categoryName;

    });

    if(category){

        return category.code;

    }

    return "PR";

}



// ==============================
// GET CATEGORY ICON
// ==============================

function getCategoryIcon(categoryName){

    const categories=
    getCategories();

    const category=
    categories.find(function(item){

        return item.name===categoryName;

    });

    if(category){

        return category.icon;

    }

    return "📦";

}
// ==============================
// DASHBOARD
// ==============================

function refreshCategoryCount(){

    const cards =
    document.querySelectorAll(".card h2");

    if(cards.length < 2){

        return;

    }

    const totalCategory =
    getCategories().length;

    cards[1].textContent =
    totalCategory;

}



// ==============================
// INIT
// ==============================

function initCategoryModule(){

    initDefaultCategories();

    loadCategoryDropdown();

    refreshCategoryCount();

}

document.addEventListener(

    "DOMContentLoaded",

    function(){

        initCategoryModule();

    }

);
