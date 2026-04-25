document.addEventListener('DOMContentLoaded', () => {
    const btnPrint = document.querySelector('.print-btn');

    if (btnPrint) {
        btnPrint.addEventListener('click', () => {
            window.print();
        });
    }
});