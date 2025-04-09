document.addEventListener('DOMContentLoaded', function() {
    // Product data array
    const products = [
        { id: 'prod001', name: 'Ultra HD Smart TV' },
        { id: 'prod002', name: 'Wireless Bluetooth Headphones' },
        { id: 'prod003', name: 'Smartphone Pro Max' },
        { id: 'prod004', name: 'Laptop Extreme Edition' },
        { id: 'prod005', name: 'Smart Watch Series 5' },
        { id: 'prod006', name: 'Noise Cancelling Earbuds' },
        { id: 'prod007', name: '4K Action Camera' }
    ];

    // Populate product select dropdown
    const productSelect = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

document.addEventListener('DOMContentLoaded', function() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);
    
    document.getElementById('reviewCount').textContent = 
        `You have submitted ${reviewCount} review${reviewCount !== 1 ? 's' : ''} in total.`;
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});