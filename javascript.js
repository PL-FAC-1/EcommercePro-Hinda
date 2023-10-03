const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const productCategorySelect = document.getElementById("productCategory");

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function() {
    const productName = productNameInput.value;
    const productPrice = productPriceInput.value;
    const selectedCategory = productCategorySelect.value;

    if (productName && productPrice&&selectedCategory) {
        const product = {
            name: productName,
            price: productPrice,
            category: selectedCategory 

            
        };


        
        const productsInStorage = JSON.parse(localStorage.getItem("products")) || [];
        productsInStorage.push(product);
        localStorage.setItem("products", JSON.stringify(productsInStorage));

        productNameInput.value = "";
        productPriceInput.value = "";
        productCategorySelect.value = ""; 


        alert("The product added successfully");

    } else {
        alert("Please fill out all fields");
    }
});


const productsInStorage = JSON.parse(localStorage.getItem("products")) || [];
const productList = document.getElementById("productList");
let currentProductId = 0;


productsInStorage.forEach(product => {
    const productItem = document.createElement("li");
    product.id = currentProductId;
    productItem.setAttribute("data-product-id", product.id);

  
    
    currentProductId++;


    productItem.textContent = ` Product Name: ${product.name} - Price: ${product.price} -Category: ${product.category}`;
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("button-product-id", product.id);

deleteButton.className = "delete-button";
deleteButton.textContent = "Delete";
const editButton = document.createElement("button");
editButton.className = "edit-button";
editButton.textContent = "Edit";
    productList.appendChild(productItem);
    productList.appendChild(deleteButton);
    productList.appendChild(editButton);
});

/////////////////////Search 
// العناصر HTML
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const productSearchList = document.getElementById("productSearchList");


searchButton.addEventListener("click", function() {
    const searchTerm = searchInput.value.toLowerCase();
    
    const proSreachStorege = JSON.parse(localStorage.getItem("products")) || [];

    productSearchList.innerHTML = "";

    proSreachStorege.forEach(product => {
        if (product.name.toLowerCase().includes(searchTerm)) {
            const productSearchItem = document.createElement("li");
            productSearchItem.textContent = `Product Name: ${product.name} - Price: $${product.price} -category: ${product.category}`;
            productSearchList.appendChild(productSearchItem);
        }
    });
});
///////////////////////////////

// const productsInStorage1 = [
//     { id: 1, name:"car1", price: 15000, category: "electronics" },
//     { id: 2, name:"T-shirt", price: 15000, category: "clothing" },
//     { id: 3, name:"chair ", price: 15000, category: "furniture" },
// ];

// function addProduct(product) {
//     product.id = productsInStorage1.length + 1;
//     productsInStorage1.push(product);
// }

// function deleteProduct(productId) {
//     const index = productsInStorage.findIndex(product => product.id === productId);
    
//     if (index !== -1) {
//         productsInStorage.splice(index, 1);
//     }
// }

// deleteButton.addEventListener("click", function () {
//     const productId = data-product-id

//     // قم بتنفيذ العملية لحذف المنتج الذي يتوافق مع معرف المنتج
//     deleteProduct(productId);
    
//     // إعادة تحميل أو تحديث قائمة المنتجات بعد الحذف
//     // يمكنك استخدام دالة لإعادة رسم قائمة المنتجات
// });

//////////////////////////


// الانتقال من صفحة البداية الى البائع و المشتري 




const sellerButton = document.getElementById('sellerButton');
const buyerButton = document.getElementById('buyerButton');
const sellerContent = document.querySelector('.sellerContent');
const buyerContent = document.querySelector('.buyerContent');
const StartPageContent = document.querySelector('.StartSection');

sellerButton.addEventListener('click', () => {
    sellerContent.style.display = 'block';
    buyerContent.style.display = 'none';
    StartPageContent.style.display = 'none';
});

buyerButton.addEventListener('click', () => {
    sellerContent.style.display = 'none';
    buyerContent.style.display = 'block';
    StartPageContent.style.display = 'none';


});




const viewProductsButton = document.getElementById("viewProductsButton");
const sellerProductsList = document.getElementById("sellerProductsList");

viewProductsButton.addEventListener("click", function() {
    const productsInStorage = JSON.parse(localStorage.getItem("products")) || [];
    
    sellerProductsList.innerHTML = "";

    productsInStorage.forEach(product => {
            const productItem = document.createElement("li");
            productItem.textContent = `Product Name: ${product.name} - Price: $${product.price} - Category: ${product.category}`;
            sellerProductsList.appendChild(productItem);
        
    });
});
/////////////////////
