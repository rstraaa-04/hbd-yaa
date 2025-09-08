document.addEventListener('DOMContentLoaded', () => {
    const cover = document.getElementById('cover');
    const pages = document.querySelectorAll('.page');

    cover.addEventListener('click', () => {
        cover.classList.add('open');

        let delay = 1000; // Jeda 1 detik setelah sampul terbuka

        pages.forEach((page, index) => {
            setTimeout(() => {
                page.style.transform = `rotateY(-180deg)`;
                // Mengatur z-index agar halaman di belakang maju ke depan
                page.style.zIndex = pages.length - index;
            }, delay + (index * 1000)); // Halaman akan membalik dengan jeda 1 detik
        });
    });
});
