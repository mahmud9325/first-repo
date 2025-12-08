const productList = document.getElementById('productList');
const paginationDiv = document.getElementById('paginationDiv');

const perPagProduct = 10;
let allProducts = [];

const loadProducts = async () => { 
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    allProducts = data;
    showPage(1);
    setupPagination();
}

const showPage = (pageNumber) => {
    productList.innerHTML = ''; //Clear

    const start = (pageNumber - 1) * perPagProduct;
    const end = start + perPagProduct;
    const pageItem = allProducts.slice(start, end);
    
    pageItem.forEach(post => {
        const div = document.createElement('div');
        Object.assign(div.style, {
            border: '1px solid red',
            backgroundColor: 'white',
            padding: '0 10px',
        })
        div.innerHTML = `
        <p>${post.id}</p>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        
        `;
        productList.appendChild(div);
    });
} 

const setupPagination = () => {
    const totalPage = Math.ceil(allProducts.length / perPagProduct);
    paginationDiv.innerHTML = ''; //Clear

    for(let i = 1; i <= totalPage; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.addEventListener('click', () => showPage(i));
        paginationDiv.appendChild(btn);
    }
}

loadProducts();