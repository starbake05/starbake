function generateSKU(category){

    const prefix = {
        "Roti Satuan":"RB",
        "Roti Bakar":"RK",
        "Pizza":"PZ",
        "Burger":"BG",
        "Sandwich":"SW",
        "Hotdog":"HD",
        "Drinks":"DR",
        "Coffee":"CF"
    };

    const code = prefix[category] || "PR";

    return code + String(Date.now()).slice(-4);

}
const modal = document.getElementById("productModal");
let editingRow = null;
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
const imageFile =
document.getElementById("productImage").files[0];

let imageURL;

// Kalau sedang edit, gunakan foto lama
if(editingRow){

    imageURL =
    editingRow.querySelector(".productPhoto").src;

}else{

    imageURL =
    "https://placehold.co/80x80?text=Foto";

}

// Kalau memilih foto baru
if(imageFile){

    imageURL =
    URL.createObjectURL(imageFile);

}
    if(name==="" || price===""){
        alert("Nama produk dan harga wajib diisi.");
        return;
    }

    const row = document.createElement("tr");

    const sku = generateSKU(category);

row.innerHTML = `

<td>${sku}</td>

<td>
    <img src="${imageURL}" class="productPhoto">
</td>

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

<button class="editBtn">✏️</button>

<button class="deleteBtn">🗑️</button>

</td>

`;

    if(editingRow){

    editingRow.replaceWith(row);

    editingRow = null;

}else{

    table.appendChild(row);

}

document.getElementById("productName").value="";
document.getElementById("productPrice").value="";

document.getElementById("productImage").value="";

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

document.addEventListener("click", function(event){

    if(event.target.classList.contains("editBtn")){

        editingRow = event.target.closest("tr");

        const cells = editingRow.querySelectorAll("td");

        // Nama Produk
        document.getElementById("productName").value =
        cells[2].textContent;

        // Kategori
        document.getElementById("productCategory").value =
        cells[3].textContent;

        // Harga
        document.getElementById("productPrice").value =
        cells[4].textContent
            .replace("Rp","")
            .replace(/\./g,"")
            .trim();

        // Status
        const status =
        cells[5].querySelector(".statusText").textContent;

        document.querySelector(
        `input[name="productStatus"][value="${status}"]`
        ).checked = true;

        modal.style.display = "flex";

    }

});
