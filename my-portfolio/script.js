// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Анимация при загрузке
  document.addEventListener('DOMContentLoaded', () => {
    // Анимация карточек проектов
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.style.setProperty('--i', index);
    });
  
    // Анимация элементов hero-секции
    const heroElements = ['.hero img', '.hero h2', '.hero p'];
    heroElements.forEach((selector, index) => {
      setTimeout(() => {
        const el = document.querySelector(selector);
        if (el) {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        }
      }, 300 * index);
    });
  
    // Проверка видимости секций
    function checkVisibility() {
      document.querySelectorAll('.section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          section.classList.add('visible');
        }
      });
    }
  
    // Инициализация
    window.addEventListener('load', checkVisibility);
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Первый запуск
  });