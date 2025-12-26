// Product data
const products = [
    {
        id: 1,
        name: "Canon EOS R5",
        category: "mirrorless",
        price: 3899,
        image: "https://cdn.discordapp.com/attachments/1411822223697641475/1454076325223465051/AirPodsPRO_with_Wireless_Charging_Casewith_Superb_BASS_SoundGreat_Battery_BackupBlack.jpg?ex=694fc59b&is=694e741b&hm=1bbbbb87ee276ac4ba5037aa4bd961d822dc210bae2b65f380e3d9878b757ac0&",
        brand: "Canon",
        resolution: "45MP",
        description: "Professional full-frame mirrorless camera with 45MP sensor and 8K video recording.",
        specs: {
            "Sensor": "45MP Full-Frame CMOS",
            "Video": "8K 30p, 4K 120p",
            "ISO": "100-51200 (expandable to 102400)",
            "Autofocus": "5940-point Dual Pixel CMOS AF II",
            "Weight": "738g"
        },
        reviews: [
            { user: "John D.", rating: 5, comment: "Amazing camera for professional photography!" },
            { user: "Sarah M.", rating: 5, comment: "Perfect for video work as well." }
        ]
    },
    {
        id: 2,
        name: "Nikon D850",
        category: "dslr",
        price: 2999,
        image: "https://cdn.discordapp.com/attachments/1411822223697641475/1454076296484098188/Download_free_png_of_PNG_Sleek_wireless_earbuds_with_case_by_Busbus_about_earphones_bluetooth_headphones_png_headphone_png_earbuds_case_mockup_and_headphone_mockup_15192398.jpg?ex=694fc594&is=694e7414&hm=959747ac7877644ffd6de6dcbe308a78ff53f1f74a6df10936827fabc221fdc1&",
        brand: "Nikon",
        resolution: "45.7MP",
        description: "High-resolution DSLR camera with exceptional image quality and versatility.",
        specs: {
            "Sensor": "45.7MP FX-Format CMOS",
            "Video": "4K UHD",
            "ISO": "64-25600 (expandable to 102400)",
            "Autofocus": "153-point AF system",
            "Weight": "915g"
        },
        reviews: [
            { user: "Mike R.", rating: 4, comment: "Great for landscape photography." },
            { user: "Lisa K.", rating: 5, comment: "Excellent build quality." }
        ]
    },
    {
        id: 3,
        name: "Sony A7R IV",
        category: "mirrorless",
        price: 3499,
        image: "https://cdn.discordapp.com/attachments/1411822223697641475/1454076295884308520/PRICES_MAY_VARY__Suitable_for_ID205L_model_19mm....jpg?ex=694fc594&is=694e7414&hm=084d6e82b14ffdb4d0848bd1e44c2131f37c886f215748719989ff8f857b7cbf&",
        brand: "Sony",
        resolution: "61MP",
        description: "Ultra-high resolution mirrorless camera with advanced autofocus and video capabilities.",
        specs: {
            "Sensor": "61MP Full-Frame BSI CMOS",
            "Video": "4K 30p",
            "ISO": "100-32000 (expandable to 102400)",
            "Autofocus": "567-point Fast Hybrid AF",
            "Weight": "665g"
        },
        reviews: [
            { user: "David L.", rating: 5, comment: "Incredible detail and color accuracy." },
            { user: "Emma W.", rating: 4, comment: "A bit heavy for long shoots." }
        ]
    },
    {
        id: 4,
        name: "GoPro HERO9 Silver",
        category: "action",
        price: 199,
        image: "https://cdn.discordapp.com/attachments/1411822223697641475/1453826044841955440/Black_Friday_sale.jpg?ex=694f8543&is=694e33c3&hm=363a7c9fc4b6652ec2f7b96d1c44381c6e1933d2233e3cc3dfb8c4dd18000f42&",
        brand: "GoPro",
        resolution: "20MP",
        description: "Compact action camera with 5K video recording and waterproof design.",
        specs: {
            "Sensor": "20MP 1/2.3\" CMOS",
            "Video": "5K 30p, 4K 60p",
            "Field of View": "Wide 155°, Narrow 71°",
            "Waterproof": "33ft (10m)",
            "Weight": "158g"
        },
        reviews: [
            { user: "Alex T.", rating: 4, comment: "Great for adventure sports." },
            { user: "Nina P.", rating: 5, comment: "Easy to use and reliable." }
        ]
    },
    {
        id: 5,
        name: "Canon EF 24-70mm f/2.8L II USM",
        category: "accessories",
        price: 1999,
        image: "https://cdn.discordapp.com/attachments/1411822223697641475/1453825103266844703/fb0c07c7ca3042d7.jpg?ex=694f8463&is=694e32e3&hm=873a5d7e46907dc076b34280861fbb38d21d4f7e20f4514157c179ba5a2f438e&",
        brand: "Canon",
        resolution: "N/A",
        description: "Professional standard zoom lens with constant f/2.8 aperture.",
        specs: {
            "Focal Length": "24-70mm",
            "Aperture": "f/2.8",
            "Image Stabilization": "No",
            "Filter Size": "82mm",
            "Weight": "805g"
        },
        reviews: [
            { user: "Robert S.", rating: 5, comment: "Sharp and versatile lens." },
            { user: "Anna G.", rating: 4, comment: "Expensive but worth it." }
        ]
    },
    {
        id: 6,
        name: "Manfrotto MT055XPRO3 Tripod",
        category: "accessories",
        price: 299,
        image: "https://cdn.discordapp.com/attachments/1411822223697641475/1453824898161184962/1_5....jpg?ex=694f8432&is=694e32b2&hm=650ee627bc3cd60dde833fcd2f0ea7fd824f290bfb33c63f43b9d27332b171c2&",
        brand: "Manfrotto",
        resolution: "N/A",
        description: "Professional tripod with advanced features and quick setup.",
        specs: {
            "Load Capacity": "19.8 lbs",
            "Max Height": "66.9\"",
            "Min Height": "3.5\"",
            "Weight": "5.7 lbs",
            "Leg Sections": "3"
        },
        reviews: [
            { user: "Chris B.", rating: 5, comment: "Stable and easy to adjust." },
            { user: "Maria L.", rating: 4, comment: "Great for studio work." }
        ]
    }
];

// Cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM elements
const cartCount = document.getElementById('cart-count');
const featuredProducts = document.getElementById('featured-products');

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Product added to cart!');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// Update cart quantity
function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
    }
}

// Render featured products
function renderFeaturedProducts() {
    if (!featuredProducts) return;

    const featured = products.slice(0, 4);
    featuredProducts.innerHTML = featured.map(product => `
        <div class="col-md-3">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
                </div>
                <div class="product-info">
                    <div class="product-title">${product.name}</div>
                    <div class="product-price">$${product.price}</div>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Render cart
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center">Your cart is empty.</p>';
        cartTotal.textContent = '$0.00';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='images/placeholder.jpg'">
            <div class="cart-item-info">
                <h5>${item.name}</h5>
                <p>$${item.price} each</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
            <button class="btn btn-danger btn-sm ms-3" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Render products list
function renderProducts(productsToShow = products) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;

    productsContainer.innerHTML = productsToShow.map(product => `
        <div class="col-md-4 mb-4">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
                </div>
                <div class="product-info">
                    <div class="product-title">${product.name}</div>
                    <div class="product-price">$${product.price}</div>
                    <p class="text-muted small">${product.description.substring(0, 100)}...</p>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter products
function filterProducts() {
    const category = new URLSearchParams(window.location.search).get('category');
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    const brandFilter = document.getElementById('brand-filter')?.value || '';
    const priceFilter = document.getElementById('price-filter')?.value || '';

    let filtered = products;

    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }

    if (searchTerm) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.brand.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
    }

    if (brandFilter) {
        filtered = filtered.filter(p => p.brand === brandFilter);
    }

    if (priceFilter) {
        const [min, max] = priceFilter.split('-').map(p => parseInt(p) || 0);
        filtered = filtered.filter(p => p.price >= min && (max === 0 || p.price <= max));
    }

    renderProducts(filtered);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success alert-dismissible fade show position-fixed';
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    renderFeaturedProducts();

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }

    // Filter functionality
    const brandFilter = document.getElementById('brand-filter');
    const priceFilter = document.getElementById('price-filter');

    if (brandFilter) brandFilter.addEventListener('change', filterProducts);
    if (priceFilter) priceFilter.addEventListener('change', filterProducts);

    // Render products on products page
    if (document.getElementById('products-container')) {
        renderProducts();
    }

    // Render cart on cart page
    if (document.getElementById('cart-items')) {
        renderCart();
    }

    // Checkout form handling
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Order placed successfully! (This is a demo)');
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            window.location.href = 'index.html';
        });
    }

    // Payment method selection
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            paymentMethods.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
