const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');

let allProduct = [];

const loadProduct = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    allProduct = data;
    console.log(allProduct);  
    showFilterProduct(allProduct);
}

const showFilterProduct = (products) => {
    productList.innerHTML = '';

    products.forEach(product => {
        const div = document.createElement('div');
        Object.assign(div.style, {
            border: '2px solid red',
            padding: '0 10px',
        });
        div.innerHTML = `
         <h2>${product.title}</h2>
         <h2>${product.price}</h2>
        `;
        productList.appendChild(div);
    });
}

searchInput.addEventListener('input', () => {
    const searchBox = searchInput.value;
    const filtered = allProduct.filter(product => 
        product.title.includes(searchBox)
    );
   showFilterProduct(filtered);
});


loadProduct();