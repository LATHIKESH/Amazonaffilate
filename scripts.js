document.addEventListener('DOMContentLoaded', function() {
    const banners = document.querySelector('.banner-slider');
    let currentIndex = 0;

    function showNextBanner() {
        currentIndex = (currentIndex + 1) % banners.children.length;
        banners.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextBanner, 3000);

    const category = new URLSearchParams(window.location.search).get('category');
    if (category) {
        document.getElementById('category-title').textContent = category.replace('-', ' ').toUpperCase();
        loadCategoryProducts(category);
    }
});

function loadCategoryProducts(category) {
    const products = {
        mobiles: [
            { name: 'Mobile 1', image: 'mobile1.jpg', price: '$199' },
            { name: 'Mobile 2', image: 'mobile2.jpg', price: '$299' },
            { name: 'Mobile 3', image: 'mobile3.jpg', price: '$399' }
        ],
        'home-appliances': [
            { name: 'Appliance 1', image: 'appliance1.jpg', price: '$99' },
            { name: 'Appliance 2', image: 'appliance2.jpg', price: '$149' },
            { name: 'Appliance 3', image: 'appliance3.jpg', price: '$199' }
        ],
        accessories: [
            { name: 'Accessory 1', image: 'accessory1.jpg', price: '$19' },
            { name: 'Accessory 2', image: 'accessory2.jpg', price: '$29' },
            { name: 'Accessory 3', image: 'accessory3.jpg', price: '$39' }
        ],
        'beauty-products': [
            { name: 'Beauty Product 1', image: 'beauty1.jpg', price: '$9' },
            { name: 'Beauty Product 2', image: 'beauty2.jpg', price: '$19' },
            { name: 'Beauty Product 3', image: 'beauty3.jpg', price: '$29' }
        ],
        sports: [
            { name: 'Sport Item 1', image: 'sport1.jpg', price: '$49' },
            { name: 'Sport Item 2', image: 'sport2.jpg', price: '$59' },
            { name: 'Sport Item 3', image: 'sport3.jpg', price: '$69' }
        ],
        groceries: [
            { name: 'Grocery Item 1', image: 'grocery1.jpg', price: '$4' },
            { name: 'Grocery Item 2', image: 'grocery2.jpg', price: '$5' },
            { name: 'Grocery Item 3', image: 'grocery3.jpg', price: '$6' }
        ],
        furniture: [
            { name: 'Furniture 1', image: 'furniture1.jpg', price: '$199' },
            { name: 'Furniture 2', image: 'furniture2.jpg', price: '$299' },
            { name: 'Furniture 3', image: 'furniture3.jpg', price: '$399' }
        ]
    };

    const productContainer = document.getElementById('products');
    if (products[category]) {
        products[category].forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;
            productContainer.appendChild(productDiv);
        });
    }
}
