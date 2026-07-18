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
const saveButton = document.getElementById("saveProduct");
const table = document.getElementById("productTable");

saveButton.onclick = function(){

    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const category = document.getElementById("productCategory").value;
    const status =
document.querySelector(
'input[name="productStatus"]:checked'
).value;

    if(name==="" || price===""){
        alert("Nama produk dan harga wajib diisi.");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${category}</td>
        <td>Rp ${Number(price).toLocaleString("id-ID")}</td>
        <td>

<label class="switch">

<input
type="checkbox"
class="statusToggle"
${status==="Tersedia" ? "checked" : ""}>

<span class="slider"></span>

</label>

<span class="statusText ${
status==="Tersedia"
?
"available"
:
"unavailable"
}">

${status}

</span>

</td>
        <td>
            <button class="deleteBtn">Hapus</button>
        </td>
    `;

    table.appendChild(row);

    document.getElementById("productName").value="";
    document.getElementById("productPrice").value="";

    modal.style.display="none";
}
document.addEventListener("click", function(event){

    if(event.target.classList.contains("deleteBtn")){

        if(confirm("Yakin ingin menghapus produk ini?")){

            event.target.closest("tr").remove();

        }

    }

});
const imageInput = document.getElementById("productImage");

const preview = document.getElementById("previewImage");

imageInput.addEventListener("change",function(){

const file = this.files[0];

if(file){

const reader = new FileReader();

reader.onload=function(e){

preview.src=e.target.result;

}

reader.readAsDataURL(file);

}

});
document.addEventListener("change",function(event){

if(event.target.classList.contains("statusToggle")){

const text =
event.target
.parentElement
.nextElementSibling;

if(event.target.checked){

text.textContent="Tersedia";

text.classList.remove("unavailable");

text.classList.add("available");

}else{

text.textContent="Habis";

text.classList.remove("available");

text.classList.add("unavailable");

}

}

});
