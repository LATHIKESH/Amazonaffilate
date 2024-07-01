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
            { name: 'Mobile 1', image: 'mobile1.jpg', price: '$199', link: 'https://example.com/mobile1' },
            { name: 'Mobile 2', image: 'mobile2.jpg', price: '$299', link: 'https://example.com/mobile2' },
            { name: 'Mobile 3', image: 'mobile3.jpg', price: '$399', link: 'https://example.com/mobile3' }
        ],
        'home-appliances': [
            { name: 'Appliance 1', image: 'appliance1.jpg', price: '$99', link: 'https://example.com/appliance1' },
            { name: 'Appliance 2', image: 'appliance2.jpg', price: '$149', link: 'https://example.com/appliance2' },
            { name: 'Appliance 3', image: 'appliance3.jpg', price: '$199', link: 'https://example.com/appliance3' }
        ],
        accessories: [
            { name: 'Accessory 1', image: 'accessory1.jpg', price: '$19', link: 'https://example.com/accessory1' },
            { name: 'Accessory 2', image: 'accessory2.jpg', price: '$29', link: 'https://example.com/accessory2' },
            { name: 'Accessory 3', image: 'accessory3.jpg', price: '$39', link: 'https://example.com/accessory3' }
        ],
        watches: [
            { name: 'Samsung Galaxy Watch6 Bluetooth (44mm, Silver, Compatible with Android only) | Introducing BP & ECG Features', image: 'siteimg/watch6LTE.jpg', price: '₹29,888', link: 'https://amzn.to/3XJRBoQ' },
            { name: 'Fastrack Women Leather Grey Dial Analog Watch -Nr6172Sl04, Band Color-Green', image: 'siteimg/fast1.jpg', price: '₹2,289', link: 'https://amzn.to/4eIbO4B' },
            { name: 'Titan Neo Analog Green Dial Womens Watch-2648SL01/2648SL01 Genuine Leather, brown Strap', image: 'siteimg/titan1.jpg', price: '₹1,950', link: 'https://amzn.to/3zq1Vby' }
        ],
        'beauty-products': [
            { name: 'PONDs Pimple Clear, Facewash, 100G, For Glowing Skin, With Active Thymo-T Essence Formula, Helps Reduce Pimples In 3 Days, Face Wash Controls Oil, Reduces Blackheads', image: 'siteimg/ponds1.jpg', price: '₹250', link: 'https://amzn.to/4cpstIu' },
            { name: 'Deconstruct Face Gel Sunscreen SPF 55+ and PA+++ | Gel based sunscreen for oily skin, combination skin, normal skin | Broad spectrum sunscreen, No White Cast, Lightweight, Non greasy | Higher protection than sunscreen SPF 50 - 50g', image: 'siteimg/deconstruct1.jpg', price: '₹332', link: 'https://amzn.to/3zn8NGP' },
            { name: 'Deconstruct 10% Non-irritating Vitamin C Face Serum For Glowing Skin | 10% Vitamin C + 0.5% Ferulic Acid | Water Based Serum | Highly Stable Vitamin C Face Serum For Women and Men | Beginner Friendly | 30 ml', image: 'siteimg/deconstruct2.jpg', price: '₹529', link: 'https://amzn.to/3VPmOEy' }
        ],
        sports: [
            { name: 'Sport Item 1', image: 'sport1.jpg', price: '$49', link: 'https://example.com/sport1' },
            { name: 'Sport Item 2', image: 'sport2.jpg', price: '$59', link: 'https://example.com/sport2' },
            { name: 'Sport Item 3', image: 'sport3.jpg', price: '$69', link: 'https://example.com/sport3' }
        ],
        groceries: [
            { name: 'Grocery Item 1', image: 'grocery1.jpg', price: '$4', link: 'https://example.com/grocery1' },
            { name: 'Grocery Item 2', image: 'grocery2.jpg', price: '$5', link: 'https://example.com/grocery2' },
            { name: 'Grocery Item 3', image: 'grocery3.jpg', price: '$6', link: 'https://example.com/grocery3' }
        ],
        furniture: [
            { name: 'Furniture 1', image: 'furniture1.jpg', price: '$199', link: 'https://example.com/furniture1' },
            { name: 'Furniture 2', image: 'furniture2.jpg', price: '$299', link: 'https://example.com/furniture2' },
            { name: 'Furniture 3', image: 'furniture3.jpg', price: '$399', link: 'https://example.com/furniture3' }
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
                <a target="_blank" href="${product.link}">Buy Now</a>
            `;
            productContainer.appendChild(productDiv);
        });
    }
}
