// script.js — ShopEasy | ApexPlanet Task 5

// ---------- PRODUCT DATA ----------
const products = [
  { id: 1, name: 'Wireless Headphones', price: 1999, cat: 'electronics', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=70' },
  { id: 2, name: 'Smart Watch',         price: 3499, cat: 'electronics', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=70' },
  { id: 3, name: 'Cotton T-Shirt',      price:  499, cat: 'clothing',    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=70' },
  { id: 4, name: 'Denim Jacket',        price: 1299, cat: 'clothing',    img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=70' },
  { id: 5, name: 'JS: The Good Parts',  price:  399, cat: 'books',       img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=70' },
  { id: 6, name: 'Clean Code',          price:  549, cat: 'books',       img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=70' },
];

// ---------- RENDER PRODUCTS ----------
function renderProducts(filter) {
  const grid = document.getElementById('productGrid');
  const list = filter === 'all' ? products : products.filter(p => p.cat === filter);

  grid.innerHTML = list.map(p => `
    <div class="card">
      <img data-src="${p.img}" src="" alt="${p.name}" loading="lazy" />
      <div class="card-body">
        <span class="card-cat">${p.cat}</span>
        <p class="card-name">${p.name}</p>
        <p class="card-price">₹${p.price}</p>
      </div>
    </div>
  `).join('');

  lazyLoad(); // load images as they enter viewport
}

// ---------- PERFORMANCE: LAZY LOADING ----------
function lazyLoad() {
  const imgs = document.querySelectorAll('img[data-src]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });
  imgs.forEach(img => observer.observe(img));
}

// ---------- FILTER BUTTONS ----------
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.cat);
  });
});

// ---------- HAMBURGER MENU (Mobile) ----------
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ---------- FORM VALIDATION ----------
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  const name    = document.getElementById('name');
  const email   = document.getElementById('email');
  const message = document.getElementById('message');

  const nameErr  = document.getElementById('nameErr');
  const emailErr = document.getElementById('emailErr');
  const msgErr   = document.getElementById('msgErr');

  // Validate name
  if (name.value.trim().length < 2) {
    nameErr.textContent = 'Name must be at least 2 characters.';
    name.classList.add('error'); valid = false;
  } else {
    nameErr.textContent = ''; name.classList.remove('error');
  }

  // Validate email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailErr.textContent = 'Enter a valid email address.';
    email.classList.add('error'); valid = false;
  } else {
    emailErr.textContent = ''; email.classList.remove('error');
  }

  // Validate message
  if (message.value.trim().length < 10) {
    msgErr.textContent = 'Message must be at least 10 characters.';
    message.classList.add('error'); valid = false;
  } else {
    msgErr.textContent = ''; message.classList.remove('error');
  }

  // Success
  if (valid) {
    const s = document.getElementById('successMsg');
    s.textContent = '✅ Message sent! We\'ll get back to you soon.';
    this.reset();
    setTimeout(() => { s.textContent = ''; }, 4000);
  }
});

// ---------- INIT ----------
renderProducts('all');
