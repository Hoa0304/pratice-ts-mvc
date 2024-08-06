export class HomeView {
    constructor(){}

    changeQuote() {
        const quote = document.querySelectorAll<HTMLElement>('.quote');
        let currentQuoteIndex = 0;
        window.addEventListener('DOMContentLoaded', () => {
            quote[0].classList.remove('hidden');
            quote[0].style.display = 'flex';
        });
        setInterval(() => {
            quote.forEach((quotes) => {
                quotes.classList.add('hidden');
                quotes.style.display = 'none';
          });
            quote[currentQuoteIndex].classList.remove('hidden');
            quote[currentQuoteIndex].style.display = 'flex';
            currentQuoteIndex = (currentQuoteIndex + 1) % quote.length;
        }, 500);
    }
}
