import { QUOTE } from "../../constants/constant";

let currentQuoteIndex = 0;

export const QuoteItem = (): string => {
    const currentQuote = QUOTE[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % QUOTE.length;

    return `
        <section class="quote hidden">
            <span class="quote--text">
                Today's Quote
            </span>
            <p class="quote-status">
                ${currentQuote.text}
            </p>
            <span class="quote--author">
                ${currentQuote.author}
            </span>
            <div class="quote--index">
                <div class="quote--index-circle"></div>
                <div class="quote--index-circle"></div>
                <div class="quote--index-circle"></div>
                <div class="quote--index-circle"></div>
            </div>
        </section>
    `;
};
