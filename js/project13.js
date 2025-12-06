let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

const addBtn = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
const buyNow = document.getElementById('buy-now');

addBtn.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));

     const existingProduct = cart.find(item => item.name === productName);

        if (existingProduct) {
            existingProduct.quantity += 1;
        }
        else{
            cart.push({
                name: productName,
                price: productPrice,
                quantity: 1
            })
        }

        totalPrice += productPrice;

        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalPrice', totalPrice.toFixed(2));

       updateCartDisplay();
    })
    
});

const updateCartDisplay = () => {
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
         ${item.name} - $${item.price} * ${item.quantity}
         <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItems.appendChild(li);
    });

    totalPriceEl.innerText = totalPrice.toFixed(2);

    const removeBtn = document.querySelectorAll('.remove-item');
    removeBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.getAttribute('data-index');
            removeCart(index);
        })
    })
}


const removeCart = (index) => {
    const item = cart[index];
    totalPrice -= item.price * item.quantity;

    cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', totalPrice.toFixed(2));

    updateCartDisplay();
}


buyNow.addEventListener('click', () => {

    if (cart.length > 0) {
        alert('Thank you for your purchase!');

        cart = [];
        totalPrice = 0;
        localStorage.removeItem('cart');
        localStorage.removeItem('totalPrice');

        updateCartDisplay();
    }
    else{
        alert('your cart empty!');
    }
});