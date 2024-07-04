document.addEventListener('DOMContentLoaded', function() {
    const banners = document.querySelector('.banner-slider');
    let currentIndex = 0;

    function showNextBanner() {
        currentIndex = (currentIndex + 1) % banners.children.length;
        banners.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextBanner, 3000);

    const category = new URLSearchParams(window.location.search).get('category');
    const subcategory = new URLSearchParams(window.location.search).get('subcategory');
    
    if (subcategory) {
        document.getElementById('category-title').textContent = subcategory.replace('-', ' ').toUpperCase();
        loadCategoryProducts(subcategory);
    } else if (category) {
        document.getElementById('category-title').textContent = category.replace('-', ' ').toUpperCase();
        loadCategoryProducts(category);
    }
});

function loadCategoryProducts(category) {
    const products = {
        mobiles: [
            { name: 'OnePlus 12 (Glacial White, 12GB RAM, 256GB Storage)', image: 'siteimg/oneplus12.jpg', link: 'https://amzn.to/45Q2gjW' },
            { name: 'Oneplus Nord CE4 (Dark Chrome, 8GB RAM, 128GB Storage)', image: 'siteimg/oneplusce4.jpg', link: 'https://amzn.to/3zAM1Lq' },
            { name: 'Motorola Edge 50 Fusion 5G (Marshmallow Blue, 8GB RAM, 128GB Storage)', image: 'siteimg/motoedge50.jpg', link: 'https://amzn.to/3W8hLjW' }
        ],
        'home-appliances': [
            { name: 'Appliance 1', image: 'appliance1.jpg', link: 'https://example.com/appliance1' },
            { name: 'Appliance 2', image: 'appliance2.jpg', link: 'https://example.com/appliance2' },
            { name: 'Appliance 3', image: 'appliance3.jpg', link: 'https://example.com/appliance3' }
        ],
        'mobile-accessories': [
            { name: 'Mobile Accessory 1', image: 'mobile-accessory1.jpg', link: 'https://example.com/mobile-accessory1' },
            { name: 'Mobile Accessory 2', image: 'mobile-accessory2.jpg', link: 'https://example.com/mobile-accessory2' },
            { name: 'Mobile Accessory 3', image: 'mobile-accessory3.jpg', link: 'https://example.com/mobile-accessory3' }
        ],
        'laptop-accessories': [
            { name: 'Laptop Accessory 1', image: 'laptop-accessory1.jpg', link: 'https://example.com/laptop-accessory1' },
            { name: 'Laptop Accessory 2', image: 'laptop-accessory2.jpg', link: 'https://example.com/laptop-accessory2' },
            { name: 'Laptop Accessory 3', image: 'laptop-accessory3.jpg', link: 'https://example.com/laptop-accessory3' }
        ],
        'machine-accessories': [
            { name: 'Machine Accessory 1', image: 'machine-accessory1.jpg', link: 'https://example.com/machine-accessory1' },
            { name: 'Machine Accessory 2', image: 'machine-accessory2.jpg', link: 'https://example.com/machine-accessory2' },
            { name: 'Machine Accessory 3', image: 'machine-accessory3.jpg', link: 'https://example.com/machine-accessory3' }
        ],
        watches: [
            { name: 'Samsung Galaxy Watch6 Bluetooth (44mm, Silver, Compatible with Android only) | Introducing BP & ECG Features', image: 'siteimg/watch6LTE.jpg', link: 'https://amzn.to/3XJRBoQ' },
            { name: 'Fastrack Women Leather Grey Dial Analog Watch -Nr6172Sl04, Band Color-Green', image: 'siteimg/fast1.jpg', link: 'https://amzn.to/4eIbO4B' },
            { name: 'Fastrack Analog Grey Dial Womens Watch-NL6138SL02/NP6138SL02', image: 'siteimg/fast2.jpg', link: 'https://amzn.to/3xLx48X' },
            { name: 'Titan Neo Analog Green Dial Womens Watch-2648SL01/2648SL01 Genuine Leather, brown Strap', image: 'siteimg/titan1.jpg', link: 'https://amzn.to/3zq1Vby' }
        ],
        'face': [
            { name: 'PONDs Pimple Clear, Facewash, 100G, For Glowing Skin, With Active Thymo-T Essence Formula, Helps Reduce Pimples In 3 Days, Face Wash Controls Oil, Reduces Blackheads', image: 'siteimg/ponds1.jpg', link: 'https://amzn.to/4cpstIu' },
            { name: 'Deconstruct Sun Protect Duo | 10% Vitamin C Face Serum (30 ml) + Gel Sunscreen (50 g) | Get Glowing Skin with Sun Protection | No White Cast, Non Irritating & Lightweight | Pack of 2', image: 'siteimg/deconstruct3.jpg', link: 'https://amzn.to/4cPdSWN' },
            { name: 'Deconstruct 10% Non-irritating Vitamin C Face Serum For Glowing Skin | 10% Vitamin C + 0.5% Ferulic Acid | Water Based Serum | Highly Stable Vitamin C Face Serum For Women and Men | Beginner Friendly | 30 ml', image: 'siteimg/deconstruct2.jpg', link: 'https://amzn.to/3VPmOEy' }
        ],
        'skin': [
            { name: 'Deconstruct Face Gel Sunscreen SPF 55+ and PA+++ | Gel based sunscreen for oily skin, combination skin, normal skin | Broad spectrum sunscreen, No White Cast, Lightweight, Non greasy | Higher protection than sunscreen SPF 50 - 50g', image: 'siteimg/deconstruct1.jpg', link: 'https://amzn.to/3zn8NGP' },
            { name: 'Deconstruct Hyaluronic Acid & Squalane Moisturizer | 0.2% Hyaluronic Acid 1% Squalane |Moisturizer For Normal Skin | Lightweight Moisturiser | For Long Lasting & Non-Greasy Hydration | 50gm', image: 'siteimg/deconstructskin2.jpg', link: 'https://amzn.to/3Wjwd97' },
            { name: 'Deconstruct Oil-Free Moisturizer For Oily Skin | 3% NMF Complex + 0.2% Panthenol | Lightweight Gel Moisturizer | For Oily to Combination Skin | 50gm', image: 'siteimg/deconstructskin1.jpg', link: 'https://amzn.to/3RV5Ljo' }
        ],
        'hair': [
            { name: 'TRU HAIR & SKIN Hair Wax Cream For Men | Easy to Spread and Strong Hold for 12hrs +Anti Dandruff | 50gms (Hair Wax-50g)', image: 'siteimg/truehair.jpg', link: 'https://amzn.to/45TjIUw' }
        ],
        sports: [
            { name: 'Sport Item 1', image: 'sport1.jpg', link: 'https://example.com/sport1' },
            { name: 'Sport Item 2', image: 'sport2.jpg', link: 'https://example.com/sport2' },
            { name: 'Sport Item 3', image: 'sport3.jpg', link: 'https://example.com/sport3' }
        ],
        groceries: [
            { name: 'Grocery Item 1', image: 'grocery1.jpg', link: 'https://example.com/grocery1' },
            { name: 'Grocery Item 2', image: 'grocery2.jpg', link: 'https://example.com/grocery2' },
            { name: 'Grocery Item 3', image: 'grocery3.jpg', link: 'https://example.com/grocery3' }
        ],
        furniture: [
            { name: 'Furniture 1', image: 'furniture1.jpg', link: 'https://example.com/furniture1' },
            { name: 'Furniture 2', image: 'furniture2.jpg', link: 'https://example.com/furniture2' },
            { name: 'Furniture 3', image: 'furniture3.jpg', link: 'https://example.com/furniture3' }
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
                <a target="_blank" href="${product.link}">Buy Now</a>
            `;
            productContainer.appendChild(productDiv);
        });
    }
}
