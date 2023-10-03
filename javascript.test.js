const { addProduct } = require('./javascript.js');

test('إضافة منتج جديد', () => {
    const productName = ' car';
    const productPrice = 5000;
    const selectedCategory = 'Elctronics';

    const result = addProduct(productName, productPrice, selectedCategory);

    expect(result).toEqual({
        name: productName,
        price: productPrice,
        category: selectedCategory
    });
});