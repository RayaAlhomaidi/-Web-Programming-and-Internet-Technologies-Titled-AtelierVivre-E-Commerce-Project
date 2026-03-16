document.addEventListener('DOMContentLoaded', function() {
    // الحصول على معرّف المنتج من الرابط
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id'); 

    // بيانات المنتجات
    const products = {
        1: {
            name: 'Timeless Elegance',
            price: '$199.99',
            description: 'Chic Browns and Crisp Whites',
            images: ['images/img16.jpg', 'images/img16_1.jpg', 'images/img16_2.jpg']
        },
        2: {
            name: 'Luxury Suit',
            price: '$249.99',
            description: 'Tailored for sophistication.',
            images: ['images/img2.jpg', 'images/img2_1.jpg', 'images/img2_2.jpg']
        },
        3: {
            name: 'Classic Black Elegance',
            price: '$99.99',
            description: 'Modern and stylish design.',
            images: ['images/img40.jpg', 'images/img40_1.jpg', 'images/img40_2.jpg']
        }
    };

    // التحقق من وجود المنتج باستخدام معرّف المنتج
    const product = products[productId];

    if (product) {
        // تحديث التفاصيل بناءً على معرّف المنتج
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;

        // تحديث الصورة الرئيسية
        const mainImage = document.querySelector('.main-image');
        if (mainImage) {
            mainImage.src = product.images[0];  // الصورة الرئيسية
        }

        // تحديث الصور الثانوية
        const detailsImagesContainer = document.querySelector('.details-images');
        detailsImagesContainer.innerHTML = ''; // مسح الصور الثانوية القديمة

        product.images.forEach((image, index) => {
            const thumbnailContainer = document.createElement('div');
            thumbnailContainer.classList.add('thumbnail-container');

            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = 'Image ${index + 1}';
            thumbnail.classList.add('thumbnail');
            thumbnail.onclick = function() {
                changeMainImage(image);
            };

            const thumbnailText = document.createElement('p');
            thumbnailText.classList.add('thumbnail-text');
            thumbnailText.textContent = 'Image ${index + 1}'; // اسم الصورة

            thumbnailContainer.appendChild(thumbnail);
            thumbnailContainer.appendChild(thumbnailText);
            detailsImagesContainer.appendChild(thumbnailContainer);
        });
    } else {
        // إذا كان معرّف المنتج غير صالح
        alert('Product not found');
        window.location.href = 'shop.html';  // إعادة التوجيه إلى صفحة المتجر
    }
});

// تغيير الصورة الرئيسية عند النقر على الصور الثانوية
function changeMainImage(imageSrc) {
    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
}

// إضافة المنتج إلى السلة
function addToCart() {
    let cartCount = parseInt(localStorage.getItem('cartCount') || '0');
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    alert('Added to cart');
}