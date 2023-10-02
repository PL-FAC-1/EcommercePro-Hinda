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

productsInStorage.forEach(product => {
    const productItem = document.createElement("li");
    productItem.textContent = ` Product Name: ${product.name} - Price: ${product.price} -Category: ${product.category}`;
    productList.appendChild(productItem);
});

/////////////////////Search 
// العناصر HTML
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const productSearchList = document.getElementById("productSearchList");


searchButton.addEventListener("click", function() {
    // 1. احصل على مصطلح البحث من حقل البحث وقم بتحويله إلى حروف صغيرة
    const searchTerm = searchInput.value.toLowerCase();
    
    // 2. استرجاع المنتجات من Local Storage
    const proSreachStorege = JSON.parse(localStorage.getItem("products")) || [];

    // 3. مسح النتائج الحالية من الصفحة
    productSearchList.innerHTML = "";

    // 4. عرض المنتجات التي تطابق مصطلح البحث
    proSreachStorege.forEach(product => {
        if (product.name.toLowerCase().includes(searchTerm)) {
            const productSearchItem = document.createElement("li");
            productSearchItem.textContent = `Product Name: ${product.name} - Price: $${product.price} -category: ${product.category}`;
            productSearchList.appendChild(productSearchItem);
        }
    });
});


