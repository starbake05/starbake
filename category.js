// ======================================
// STARBAKE CATEGORY MODULE V1.0
// ======================================

const categoryModal =
document.getElementById("categoryModal");

const addCategory =
document.getElementById("addCategory");

const closeCategory =
document.getElementById("closeCategory");


// Buka Modal
addCategory.onclick = function(){

    categoryModal.style.display = "flex";

};


// Tutup Modal
closeCategory.onclick = function(){

    categoryModal.style.display = "none";

};


// Klik area gelap
window.onclick = function(event){

    if(event.target == categoryModal){

        categoryModal.style.display = "none";

    }

};
