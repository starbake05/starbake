const modal = document.getElementById("productModal");

const addButton = document.getElementById("addProduct");

const closeButton = document.getElementById("closeModal");

addButton.onclick = function () {
    modal.style.display = "flex";
};

closeButton.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function(event){
    if(event.target === modal){
        modal.style.display = "none";
    }
};
