import { QUOTE } from "../../constants/constant";

export const QuoteItem = (text: string, author: string): string => {
    return `
        <section class="quote hidden">
            <span class="quote--text">
                Today's Quote
            </span>
            <p class="quote-status">
                ${text}
            </p>
            <span class="quote--author">
                ${author}
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

export const quoteElements = QUOTE.map((quote) => QuoteItem(quote.text, quote.author));
