// ===== STATE & DATA =====
const state = {
  currentUser: null,
  isAdmin: false,
  users: [],
  books: [],
  reviews: [],
  favorites: [],
  reading: [],
  currentFilter: ''
};

// Реальные обложки книг с URL
const booksData = [
  {
    id: 1,
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    genre: "Классика",
    year: 1967,
    pages: 480,
    rating: 4.9,
    reviews: 12840,
    cover: "https://avatars.mds.yandex.net/get-entity_search/1922058/xcp19tTk2Exh/S600xU_2x",
    desc: "Роман о визите дьявола в советскую Москву, переплетённый с историей Понтия Пилата и Иешуа Га-Ноцри."
  },
  {
    id: 2,
    title: "1984",
    author: "Джордж Оруэлл",
    genre: "Антиутопия",
    year: 1949,
    pages: 328,
    rating: 4.8,
    reviews: 23500,
    cover: "https://avatars.mds.yandex.net/get-mpic/16485002/2a0000019a593ae423dae5d9445179a0a5ff/orig",
    desc: "Роман-антиутопия о тоталитарном обществе будущего, где Большой Брат следит за каждым."
  },
  {
    id: 3,
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    genre: "Классика",
    year: 1866,
    pages: 608,
    rating: 4.7,
    reviews: 18200,
    cover: "https://avatars.mds.yandex.net/get-mpic/12519262/2a0000019bfccff3ae430e7222fa4961bc5b/orig",
    desc: "Психологический роман о студенте Раскольникове, совершившем убийство и мучимом угрызениями совести."
  },
  {
    id: 4,
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    genre: "Фэнтези",
    year: 1997,
    pages: 352,
    rating: 4.9,
    reviews: 45600,
    cover: "https://avatars.mds.yandex.net/get-mpic/5283728/2a00000193570525a97541f6f8d68158b683/orig",
    desc: "Первая книга о юном волшебнике Гарри Поттере, узнавшем о своём магическом происхождении."
  },
  {
    id: 5,
    title: "Маленький принц",
    author: "Антуан де Сент-Экзюпери",
    genre: "Философия",
    year: 1943,
    pages: 96,
    rating: 4.8,
    reviews: 31200,
    cover: "https://ndc.book24.ru/resize/410x590/pim/products/images/21/d1/018ee565-a3ab-7a81-bc59-3dadf73321d1.jpg",
    desc: "Философская сказка о маленьком принце, путешествующем по планетам."
  },
  {
    id: 6,
    title: "Война и мир",
    author: "Лев Толстой",
    genre: "Классика",
    year: 1869,
    pages: 1274,
    rating: 4.6,
    reviews: 15600,
    cover: "https://upload.wikimedia.org/wikipedia/commons/2/21/Tolstoy_-_War_and_Peace_-_third_edition%2C_1873.png",
    desc: "Эпический роман о жизни русского общества во время войн Наполеона."
  },
  {
    id: 7,
    title: "Дюна",
    author: "Фрэнк Герберт",
    genre: "Фантастика",
    year: 1965,
    pages: 688,
    rating: 4.8,
    reviews: 28900,
    cover: "https://storage.yandexcloud.net/colorlon-prod/PICS/6843B060-8562-11EF-AD22-003048FBFCC9.jpg",
    desc: "Научно-фантастический роман о планете Арракис, покрытой пустынями."
  },
  {
    id: 8,
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    genre: "Детектив",
    year: 1887,
    pages: 560,
    rating: 4.8,
    reviews: 33100,
    cover: "https://ndc.book24.ru/resize/410x590/pim/products/images/3e/d6/018ed6a9-32fb-7141-b027-55d04a193ed6.jpg",
    desc: "Классические рассказы о знаменитом детективе и его расследованиях."
  },
  {
    id: 9,
    title: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
    genre: "Фэнтези",
    year: 1954,
    pages: 1178,
    rating: 4.9,
    reviews: 52300,
    cover: "https://static2.my-shop.ru/products213/2128174/cover.jpg",
    desc: "Эпическая фэнтези-сага о Кольце Всевластия и приключениях хоббитов."
  },
  {
    id: 10,
    title: "Убить пересмешника",
    author: "Харпер Ли",
    genre: "Роман",
    year: 1960,
    pages: 324,
    rating: 4.7,
    reviews: 19800,
    cover: "https://storage.yandexcloud.net/colorlon-prod/PICS/C7D9E8B6-8562-11EF-AD22-003048FBFCC9.jpg",
    desc: "Роман о расовых предрассудках и взрослении в американском Юге."
  },
  {
    id: 11,
    title: "О дивный новый мир",
    author: "Олдос Хаксли",
    genre: "Антиутопия",
    year: 1932,
    pages: 311,
    rating: 4.5,
    reviews: 14200,
    cover: "https://avatars.mds.yandex.net/get-mpic/12387925/2a00000192fca7f27ec2fd4ef74f111a3eb8/orig",
    desc: "Антиутопический роман о будущем обществе, контролируемом наркотиками и пропагандой."
  },
  {
    id: 12,
    title: "Алхимик",
    author: "Пауло Коэльо",
    genre: "Философия",
    year: 1988,
    pages: 224,
    rating: 4.5,
    reviews: 38400,
    cover: "https://static.onlinetrade.ru/img/items/b/kniga_alkhimik_premium_koelo_p_1724394054_1.jpg",
    desc: "Философский роман о путешествии пастуха в поисках сокровищ и смысла жизни."
  }
];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  initializeApp();
});

function initializeApp() {
  if (!state.currentUser) {
    showAuthModal();
  } else {
    renderHome();
    navigateTo('home');
    updateUI();
    updateUIAfterLogin();
  }

  setupEventListeners();
  updateStats();
}

function setupEventListeners() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => handleSearch(e.target.value), 300);
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') clearSearch();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && e.target.tagName !== 'INPUT') {
      e.preventDefault();
      searchInput?.focus();
    }
  });
}

// ===== AUTHENTICATION =====
function handleLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!username || !password) {
    showToast('Заполните все поля', 'warning');
    return;
  }

  const user = state.users.find(u => u.username === username && u.password === password);
  if (user) {
    state.currentUser = user;
    state.isAdmin = false;
    saveToStorage();
    closeAuthModal();
    location.reload();
  } else {
    showToast('Неверные учётные данные', 'error');
  }
}

function handleRegister() {
  const username = document.getElementById('regUsername').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  const confirm = document.getElementById('regConfirm').value.trim();

  if (!username || !email || !password || !confirm) {
    showToast('Заполните все поля', 'warning');
    return;
  }

  if (password !== confirm) {
    showToast('Пароли не совпадают', 'error');
    return;
  }

  if (state.users.find(u => u.username === username)) {
    showToast('Пользователь уже существует', 'error');
    return;
  }

  const newUser = {
    id: Date.now(),
    username,
    email,
    password,
    createdAt: new Date().toISOString()
  };

  state.users.push(newUser);
  state.currentUser = newUser;
  state.isAdmin = false;
  saveToStorage();
  closeAuthModal();
  location.reload();
}

function handleAdminLogin() {
  const code = document.getElementById('adminCode').value.trim();
  if (code === 'admin123') {
    state.currentUser = { username: 'Администратор', isAdmin: true };
    state.isAdmin = true;
    saveToStorage();
    closeAuthModal();
    location.reload();
  } else {
    showToast('Неверный код администратора', 'error');
  }
}

function logoutUser() {
  state.currentUser = null;
  state.isAdmin = false;
  saveToStorage();
}

// ===== PROFILE EDITING =====
function openEditProfile() {
  document.getElementById('editUsername').value = state.currentUser.username;
  document.getElementById('editEmail').value = state.currentUser.email || '';
  document.getElementById('editPassword').value = '';
  document.getElementById('editProfileModal').classList.add('active');
}

function closeEditProfile() {
  document.getElementById('editProfileModal').classList.remove('active');
}

function saveProfileChanges() {
  const username = document.getElementById('editUsername').value.trim();
  const email = document.getElementById('editEmail').value.trim();
  const password = document.getElementById('editPassword').value.trim();

  if (!username || !email) {
    showToast('Заполните все поля', 'warning');
    return;
  }

  state.currentUser.username = username;
  state.currentUser.email = email;
  if (password) {
    state.currentUser.password = password;
  }

  const userIndex = state.users.findIndex(u => u.id === state.currentUser.id);
  if (userIndex !== -1) {
    state.users[userIndex] = state.currentUser;
  }

  saveToStorage();
  closeEditProfile();
  showToast('Профиль обновлен', 'success');
  renderProfile();
}

// ===== NAVIGATION =====
function navigateTo(page) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  
  const targetPage = document.getElementById(page + 'Page');
  if (targetPage) {
    targetPage.classList.add('active');
  }

  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  const activeNav = document.querySelector(`[data-page="${page}"]`);
  if (activeNav) activeNav.classList.add('active');

  if (page === 'home') renderHome();
  else if (page === 'catalog') renderCatalog();
  else if (page === 'favorites') renderFavorites();
  else if (page === 'reading') renderReading();
  else if (page === 'reviews') renderMyReviews();
  else if (page === 'profile') renderProfile();
  else if (page === 'admin') renderAdminPanel();
}

// ===== RENDERING FUNCTIONS =====
function renderHome() {
  renderRecommendedBooks();
  renderReadingList();
  updateStats();
}

function renderRecommendedBooks() {
  const container = document.getElementById('recommendedBooks');
  if (!container) return;
  
  const books = booksData.slice(0, 4);
  container.innerHTML = books.map(book => createBookCard(book)).join('');
}

function renderCatalog() {
  const container = document.getElementById('catalogBooks');
  if (!container) return;
  
  let books = booksData;
  if (state.currentFilter) {
    books = books.filter(b => b.genre === state.currentFilter);
  }
  
  container.innerHTML = books.map(book => createBookCard(book)).join('');
}

function renderFavorites() {
  const container = document.getElementById('favoritesList');
  if (!container) return;
  
  const books = booksData.filter(b => state.favorites.includes(b.id));
  if (books.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 40px;">Нет избранных книг</p>';
    return;
  }
  
  container.innerHTML = books.map(book => createBookCard(book)).join('');
}

function renderReading() {
  const container = document.getElementById('readingPageList');
  if (!container) return;
  
  const books = booksData.filter(b => state.reading.includes(b.id));
  if (books.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 40px;">Нет книг в списке чтения</p>';
    return;
  }
  
  container.innerHTML = books.map(book => createReadingItem(book)).join('');
}

function renderReadingList() {
  const container = document.getElementById('readingList');
  if (!container) return;
  
  const books = booksData.filter(b => state.reading.includes(b.id)).slice(0, 3);
  if (books.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted);">Начните читать книги из каталога</p>';
    return;
  }
  
  container.innerHTML = books.map(book => createReadingItem(book)).join('');
}

function renderMyReviews() {
  const container = document.getElementById('myReviewsList');
  if (!container) return;
  
  const myReviews = state.reviews.filter(r => r.userId === state.currentUser?.id);
  if (myReviews.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 40px;">Вы ещё не оставили отзывов</p>';
    return;
  }
  
  container.innerHTML = myReviews.map(review => {
    const book = booksData.find(b => b.id === review.bookId);
    return `
      <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 16px; margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
          <div>
            <h4>${book?.title}</h4>
            <p style="font-size: 12px; color: var(--text-muted);">⭐ ${review.rating}/5 • ${new Date(review.date).toLocaleDateString('ru-RU')}</p>
          </div>
          <button class="btn-small" onclick="deleteReview(${review.id})" style="background: var(--danger);">🗑️</button>
        </div>
        <p style="color: var(--text-secondary);">${review.text}</p>
      </div>
    `;
  }).join('');
}

function renderProfile() {
  if (!state.currentUser) {
    showAuthModal();
    return;
  }

  const username = document.getElementById('profileUsername');
  const role = document.getElementById('profileRole');
  const editBtn = document.getElementById('editProfileBtn');
  const stats = document.getElementById('profileStats');
  const actions = document.getElementById('profileActions');

  username.textContent = state.currentUser.username;
  role.textContent = state.isAdmin ? 'Администратор' : 'Пользователь';
  
  if (!state.isAdmin) {
    editBtn.style.display = 'block';
    stats.style.display = 'block';
    actions.style.display = 'block';

    document.getElementById('userBooksRead').textContent = state.reading.length;
    document.getElementById('userBooksReading').textContent = state.reading.length;
    document.getElementById('userReviewsCount').textContent = state.reviews.filter(r => r.userId === state.currentUser.id).length;
  } else {
    editBtn.style.display = 'none';
    stats.style.display = 'none';
    actions.style.display = 'none';
  }
}

function renderAdminPanel() {
  if (!state.isAdmin) {
    navigateTo('home');
    return;
  }

  const container = document.getElementById('adminContainer');
  container.innerHTML = `
    <div class="admin-panel">
      <h2>⚙️ Админ-панель</h2>
      
      <div class="admin-section">
        <h3>📊 Статистика</h3>
        <div class="admin-grid">
          <div class="admin-stat">
            <div class="admin-stat-value">${booksData.length}</div>
            <div class="admin-stat-label">Всего книг</div>
          </div>
          <div class="admin-stat">
            <div class="admin-stat-value">${state.users.length}</div>
            <div class="admin-stat-label">Пользователей</div>
          </div>
          <div class="admin-stat">
            <div class="admin-stat-value">${state.reviews.length}</div>
            <div class="admin-stat-label">Отзывов</div>
          </div>
          <div class="admin-stat">
            <div class="admin-stat-value">${state.favorites.length}</div>
            <div class="admin-stat-label">Добавлено в избранное</div>
          </div>
        </div>
      </div>

      <div class="admin-section">
        <h3>➕ Добавить новую книгу</h3>
        <div class="admin-form">
          <input type="text" id="adminTitle" placeholder="Название" class="admin-form-input">
          <input type="text" id="adminAuthor" placeholder="Автор" class="admin-form-input">
          <input type="text" id="adminGenre" placeholder="Жанр" class="admin-form-input">
          <input type="number" id="adminYear" placeholder="Год" class="admin-form-input">
          <input type="number" id="adminPages" placeholder="Страниц" class="admin-form-input">
          <input type="text" id="adminCover" placeholder="URL обложки" class="admin-form-input">
          <textarea id="adminDesc" placeholder="Описание" class="admin-form-input"></textarea>
          <button class="btn-primary" onclick="addNewBook()" style="grid-column: 1 / -1;">Добавить книгу</button>
        </div>
      </div>

      <div class="admin-section">
        <h3>📚 Список книг</h3>
        <div id="adminBooksList"></div>
      </div>

      <div class="admin-section">
        <h3>💾 Резервное копирование</h3>
        <div style="display: flex; gap: 12px;">
          <button class="btn-primary" onclick="exportData()" style="flex: 1;">📥 Экспортировать данные</button>
          <button class="btn-secondary" onclick="document.getElementById('importFile').click();" style="flex: 1;">📤 Импортировать данные</button>
          <input type="file" id="importFile" accept=".json" style="display: none;" onchange="importData(this.files[0])">
        </div>
      </div>
    </div>
  `;

  renderAdminBooks();
}

function renderAdminBooks() {
  const container = document.getElementById('adminBooksList');
  if (!container) return;

  container.innerHTML = booksData.map(book => `
    <div style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 12px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <div>
        <div style="font-weight: 600;">${book.title}</div>
        <div style="font-size: 12px; color: var(--text-muted);">${book.author} • ${book.genre}</div>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn-small" onclick="openEditBookModal(${book.id})" style="background: var(--primary);">✏️ Редактировать</button>
        <button class="btn-small" onclick="deleteBook(${book.id})" style="background: var(--danger);">🗑️ Удалить</button>
      </div>
    </div>
  `).join('');
}

function createBookCard(book) {
  return `
    <div class="book-card" onclick="openBookModal(${book.id})">
      <div class="book-cover">
        <img src="${book.cover}" alt="${book.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="book-info">
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
        <div class="book-meta">
          <span>⭐ ${book.rating}</span>
          <span>${book.pages} стр.</span>
        </div>
      </div>
    </div>
  `;
}

function createReadingItem(book) {
  const progress = Math.floor(Math.random() * 100);
  return `
    <div class="reading-item">
      <div class="reading-item-cover">
        <img src="${book.cover}" alt="${book.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="reading-item-info">
        <div class="reading-item-title">${book.title}</div>
        <div class="reading-item-author">${book.author}</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        <div class="progress-text">${progress}% прочитано</div>
      </div>
      <button class="btn-small" onclick="removeFromReading(${book.id})">✕</button>
    </div>
  `;
}

// ===== BOOK ACTIONS =====
function openBookModal(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;

  const isFavorite = state.favorites.includes(bookId);
  const isReading = state.reading.includes(bookId);

  const content = `
    <div style="display: flex; gap: 24px;">
      <div style="flex-shrink: 0;">
        <img src="${book.cover}" alt="${book.title}" style="width: 200px; height: 280px; border-radius: var(--radius-sm); object-fit: cover;">
      </div>
      <div style="flex: 1;">
        <h2>${book.title}</h2>
        <p style="color: var(--text-muted); margin-bottom: 16px;">${book.author} • ${book.year}</p>
        <div style="display: flex; gap: 16px; margin-bottom: 16px;">
          <div>
            <div style="font-size: 12px; color: var(--text-muted);">Рейтинг</div>
            <div style="font-size: 18px; font-weight: 700;">⭐ ${book.rating}</div>
          </div>
          <div>
            <div style="font-size: 12px; color: var(--text-muted);">Страниц</div>
            <div style="font-size: 18px; font-weight: 700;">${book.pages}</div>
          </div>
          <div>
            <div style="font-size: 12px; color: var(--text-muted);">Жанр</div>
            <div style="font-size: 18px; font-weight: 700;">${book.genre}</div>
          </div>
        </div>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">${book.desc}</p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn-primary" onclick="addToReading(${bookId}); closeModal();">📖 ${isReading ? 'В списке' : 'Добавить в список'}</button>
          <button class="btn-secondary" onclick="toggleFavorite(${bookId});">❤️ ${isFavorite ? 'В избранном' : 'В избранное'}</button>
          <button class="btn-secondary" onclick="openReviewsModal(${bookId});">💬 Отзывы</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('bookModalContent').innerHTML = content;
  document.getElementById('bookModal').classList.add('active');
}

function closeModal() {
  document.getElementById('bookModal').classList.remove('active');
}

function toggleFavorite(bookId) {
  const index = state.favorites.indexOf(bookId);
  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast('Удалено из избранного', 'success');
  } else {
    state.favorites.push(bookId);
    showToast('Добавлено в избранное', 'success');
  }
  saveToStorage();
}

function addToReading(bookId) {
  if (!state.reading.includes(bookId)) {
    state.reading.push(bookId);
    saveToStorage();
    showToast('Добавлено в список чтения', 'success');
  }
}

function removeFromReading(bookId) {
  const index = state.reading.indexOf(bookId);
  if (index > -1) {
    state.reading.splice(index, 1);
    saveToStorage();
    showToast('Удалено из списка чтения', 'success');
    renderReading();
  }
}

// ===== REVIEWS =====
function openReviewsModal(bookId) {
  const book = booksData.find(b => b.id === bookId);
  const bookReviews = state.reviews.filter(r => r.bookId === bookId);

  let content = `
    <h2>💬 Отзывы на "${book.title}"</h2>
    <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--border);">
      <h3>Оставить отзыв</h3>
      <div style="display: flex; gap: 8px; margin-bottom: 12px;">
        ${[1,2,3,4,5].map(i => `<button class="rating-btn" onclick="setRating(${i})" style="font-size: 24px; cursor: pointer;">${'⭐'.repeat(i)}</button>`).join('')}
      </div>
      <textarea id="reviewText" placeholder="Ваш отзыв..." style="width: 100%; padding: 10px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: var(--radius-sm); color: var(--text-primary); min-height: 80px; margin-bottom: 8px;"></textarea>
      <button class="btn-primary" onclick="submitReview(${bookId})">Отправить отзыв</button>
    </div>
    
    <div>
      <h3>Отзывы пользователей (${bookReviews.length})</h3>
      ${bookReviews.length === 0 ? '<p style="color: var(--text-muted);">Нет отзывов</p>' : bookReviews.map(review => {
        const user = state.users.find(u => u.id === review.userId);
        return `
          <div style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 12px; margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: start;">
              <div>
                <div style="font-weight: 600;">${user?.username || 'Аноним'}</div>
                <div style="font-size: 12px; color: var(--text-muted);">⭐ ${review.rating}/5 • ${new Date(review.date).toLocaleDateString('ru-RU')}</div>
              </div>
              ${review.userId === state.currentUser?.id ? `<button class="btn-small" onclick="deleteReview(${review.id})" style="background: var(--danger); padding: 4px 8px;">🗑️</button>` : ''}
            </div>
            <p style="margin-top: 8px; color: var(--text-secondary);">${review.text}</p>
          </div>
        `;
      }).join('')}
    </div>
  `;

  document.getElementById('reviewsContent').innerHTML = content;
  document.getElementById('reviewsModal').classList.add('active');
}

function closeReviewsModal() {
  document.getElementById('reviewsModal').classList.remove('active');
}

let currentRating = 0;

function setRating(rating) {
  currentRating = rating;
}

function submitReview(bookId) {
  if (!state.currentUser) {
    showToast('Войдите, чтобы оставить отзыв', 'warning');
    return;
  }

  const text = document.getElementById('reviewText').value.trim();
  if (!text || !currentRating) {
    showToast('Заполните отзыв и выберите оценку', 'warning');
    return;
  }

  const review = {
    id: Date.now(),
    bookId,
    userId: state.currentUser.id,
    rating: currentRating,
    text,
    date: new Date().toISOString()
  };

  state.reviews.push(review);
  saveToStorage();
  showToast('Отзыв добавлен', 'success');
  currentRating = 0;
  document.getElementById('reviewText').value = '';
  openReviewsModal(bookId);
}

function deleteReview(reviewId) {
  const index = state.reviews.findIndex(r => r.id === reviewId);
  if (index > -1) {
    state.reviews.splice(index, 1);
    saveToStorage();
    showToast('Отзыв удален', 'success');
  }
}

// ===== ADMIN FUNCTIONS =====
function addNewBook() {
  const title = document.getElementById('adminTitle')?.value.trim();
  const author = document.getElementById('adminAuthor')?.value.trim();
  const genre = document.getElementById('adminGenre')?.value.trim();
  const year = parseInt(document.getElementById('adminYear')?.value);
  const pages = parseInt(document.getElementById('adminPages')?.value);
  const cover = document.getElementById('adminCover')?.value.trim();
  const desc = document.getElementById('adminDesc')?.value.trim();

  if (!title || !author || !genre || !year || !pages || !desc) {
    showToast('Заполните все поля', 'warning');
    return;
  }

  const newBook = {
    id: Math.max(...booksData.map(b => b.id), 0) + 1,
    title,
    author,
    genre,
    year,
    pages,
    cover: cover || 'https://images.unsplash.com/photo-1543002588-d83a5ad3fae0?w=300&h=400&fit=crop',
    rating: 0,
    reviews: 0,
    desc
  };

  booksData.push(newBook);
  saveToStorage();
  showToast('Книга добавлена!', 'success');

  document.getElementById('adminTitle').value = '';
  document.getElementById('adminAuthor').value = '';
  document.getElementById('adminGenre').value = '';
  document.getElementById('adminYear').value = '';
  document.getElementById('adminPages').value = '';
  document.getElementById('adminCover').value = '';
  document.getElementById('adminDesc').value = '';

  renderAdminPanel();
}

function deleteBook(bookId) {
  const index = booksData.findIndex(b => b.id === bookId);
  if (index > -1) {
    booksData.splice(index, 1);
    saveToStorage();
    showToast('Книга удалена', 'success');
    renderAdminPanel();
  }
}

// ===== UTILITY FUNCTIONS =====
function filterByGenre(genre) {
  state.currentFilter = genre;
  renderCatalog();
}

function handleSearch(query) {
  const container = document.getElementById('catalogBooks');
  if (!container) return;

  const results = booksData.filter(b =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.author.toLowerCase().includes(query.toLowerCase()) ||
    b.genre.toLowerCase().includes(query.toLowerCase())
  );

  container.innerHTML = results.map(book => createBookCard(book)).join('');
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  renderCatalog();
}

function sendMessage(event) {
  event.preventDefault();
  showToast('Сообщение отправлено! Спасибо за обратную связь.', 'success');
  event.target.reset();
}

function updateStats() {
  const totalEl = document.getElementById('totalBooks');
  const availEl = document.getElementById('availableBooks');
  const readingEl = document.getElementById('readingCount');
  const favEl = document.getElementById('favoritesCount');

  if (totalEl) totalEl.textContent = booksData.length;
  if (availEl) availEl.textContent = booksData.length;
  if (readingEl) readingEl.textContent = state.reading.length;
  if (favEl) favEl.textContent = state.favorites.length;
}

function updateUI() {
  if (state.isAdmin) {
    document.getElementById('adminMenuContainer').style.display = 'block';
  }
}

// ===== MODAL FUNCTIONS =====
function showAuthModal() {
  document.getElementById('authModal').classList.add('active');
}

function closeAuthModal() {
  document.getElementById('authModal').classList.remove('active');
}

function switchAuthTab(tab) {
  const tabs = document.querySelectorAll('.modal-tab-content');
  tabs.forEach(t => t.classList.remove('active'));
  document.getElementById(tab + 'Tab').classList.add('active');

  const buttons = document.querySelectorAll('.modal-tab');
  buttons.forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

// ===== STORAGE =====
function saveToStorage() {
  localStorage.setItem('libraverse_state', JSON.stringify({
    users: state.users,
    favorites: state.favorites,
    reading: state.reading,
    reviews: state.reviews,
    currentUser: state.currentUser,
    isAdmin: state.isAdmin
  }));
}

function loadFromStorage() {
  const saved = localStorage.getItem('libraverse_state');
  if (saved) {
    const data = JSON.parse(saved);
    state.users = data.users || [];
    state.favorites = data.favorites || [];
    state.reading = data.reading || [];
    state.reviews = data.reviews || [];
    state.currentUser = data.currentUser;
    state.isAdmin = data.isAdmin || false;
  }
}

function exportData() {
  const data = {
    users: state.users,
    favorites: state.favorites,
    reading: state.reading,
    reviews: state.reviews,
    books: booksData,
    exportDate: new Date().toISOString()
  };

  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `libraverse-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Данные экспортированы', 'success');
}

function importData(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      state.users = data.users || [];
      state.favorites = data.favorites || [];
      state.reading = data.reading || [];
      state.reviews = data.reviews || [];
      if (data.books) {
        booksData.length = 0;
        booksData.push(...data.books);
      }
      saveToStorage();
      showToast('Данные импортированы', 'success');
      location.reload();
    } catch (error) {
      showToast('Ошибка при импорте', 'error');
    }
  };
  reader.readAsText(file);
}

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type}`;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

// ===== LOGOUT HANDLER =====
function handleLogout() {
  if (confirm('Вы уверены, что хотите выйти из профиля?')) {
    logoutUser();
    navigateTo('home');
    showToast('Вы вышли из аккаунта', 'success');
    updateUIAfterLogout();
  }
}

function updateUIAfterLogout() {
  const adminContainer = document.getElementById('adminMenuContainer');
  const logoutContainer = document.getElementById('logoutContainer');
  if (adminContainer) adminContainer.style.display = 'none';
  if (logoutContainer) logoutContainer.style.display = 'none';
}

// ===== UI UPDATE AFTER LOGIN =====
function updateUIAfterLogin() {
  const adminContainer = document.getElementById('adminMenuContainer');
  const logoutContainer = document.getElementById('logoutContainer');
  if (state.currentUser) {
    if (logoutContainer) logoutContainer.style.display = 'block';
    if (state.isAdmin && adminContainer) adminContainer.style.display = 'block';
  }
}


// ===== EDIT BOOK FUNCTIONS =====
let currentEditingBookId = null;

function openEditBookModal(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;

  currentEditingBookId = bookId;

  // Создаём модальное окно редактирования
  const modal = document.createElement('div');
  modal.id = 'editBookModal';
  modal.className = 'modal';
  modal.style.display = 'flex';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 500px;">
      <button class="modal-close" onclick="closeEditBookModal()">✕</button>
      <h2 style="margin-top: 0;">✏️ Редактировать книгу</h2>
      
      <div class="form-group">
        <label>Название</label>
        <input type="text" id="editBookTitle" value="${book.title}" placeholder="Название книги" class="form-input">
      </div>
      
      <div class="form-group">
        <label>Автор</label>
        <input type="text" id="editBookAuthor" value="${book.author}" placeholder="Автор" class="form-input">
      </div>
      
      <div class="form-group">
        <label>Жанр</label>
        <input type="text" id="editBookGenre" value="${book.genre}" placeholder="Жанр" class="form-input">
      </div>
      
      <div class="form-group">
        <label>Год издания</label>
        <input type="number" id="editBookYear" value="${book.year}" placeholder="Год" class="form-input">
      </div>
      
      <div class="form-group">
        <label>Количество страниц</label>
        <input type="number" id="editBookPages" value="${book.pages}" placeholder="Страниц" class="form-input">
      </div>
      
      <div class="form-group">
        <label>URL обложки</label>
        <input type="text" id="editBookCover" value="${book.cover}" placeholder="URL обложки" class="form-input">
      </div>
      
      <div class="form-group">
        <label>Описание</label>
        <textarea id="editBookDesc" placeholder="Описание" class="form-input" style="resize: vertical; min-height: 100px;">${book.description}</textarea>
      </div>
      
      <div class="form-group">
        <label>Рейтинг</label>
        <input type="number" id="editBookRating" value="${book.rating}" placeholder="Рейтинг" step="0.1" min="0" max="5" class="form-input">
      </div>
      
      <div style="display: flex; gap: 12px; margin-top: 20px;">
        <button class="btn-secondary" onclick="closeEditBookModal()" style="flex: 1;">Отмена</button>
        <button class="btn-primary" onclick="saveEditedBook()" style="flex: 1;">Сохранить</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeEditBookModal();
  });
}

function closeEditBookModal() {
  const modal = document.getElementById('editBookModal');
  if (modal) modal.remove();
  currentEditingBookId = null;
}

function saveEditedBook() {
  if (!currentEditingBookId) return;

  const book = booksData.find(b => b.id === currentEditingBookId);
  if (!book) return;

  const title = document.getElementById('editBookTitle').value.trim();
  const author = document.getElementById('editBookAuthor').value.trim();
  const genre = document.getElementById('editBookGenre').value.trim();
  const year = parseInt(document.getElementById('editBookYear').value) || book.year;
  const pages = parseInt(document.getElementById('editBookPages').value) || book.pages;
  const cover = document.getElementById('editBookCover').value.trim();
  const description = document.getElementById('editBookDesc').value.trim();
  const rating = parseFloat(document.getElementById('editBookRating').value) || book.rating;

  if (!title || !author || !genre) {
    showToast('Пожалуйста, заполните название, автора и жанр', 'error');
    return;
  }

  book.title = title;
  book.author = author;
  book.genre = genre;
  book.year = year;
  book.pages = pages;
  book.cover = cover;
  book.description = description;
  book.rating = rating;

  saveToStorage();
  closeEditBookModal();
  renderAdminPanel();
  showToast('Книга успешно отредактирована', 'success');
}
