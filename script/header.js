document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.header__hamburger');
    const dropMenu = document.querySelector('.header__drop-menu');

    hamburgerButton.addEventListener('click', function() {
        // Переключаем класс is-active у кнопки
        this.classList.toggle('is-active');

        // Переключаем класс is-open у дроп-меню
        dropMenu.classList.toggle('is-open');
    });

    // Функция для проверки ширины экрана
    function checkScreenWidth() {
        if (window.innerWidth > 1100) {
            // Убираем классы, если ширина больше 1100px
            hamburgerButton.classList.remove('is-active');
            dropMenu.classList.remove('is-open');
        }
    }

    // Добавляем обработчик события изменения размера окна
    window.addEventListener('resize', checkScreenWidth);

    // Проверяем ширину экрана при загрузке страницы
    checkScreenWidth();
});