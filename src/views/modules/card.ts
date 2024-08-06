import { Book } from "../../model";

export const Card = (book: Book): string => {
    return `
        <figure class="card">
            <img src="${book.image}">
            <figcaption class="card__text">
                <span class="card__text-primary">
                    ${book.name}
                </span>
                <span class="card__text-secondary">
                    ${book.author}, ${book.year}
                 </span>
                <p class="card__text--evaluate">
                    4.5
                    <span class="card__text--evaluate-extra">
                        /5
                    </span>
                </p>
            </figcaption>
        </figure>
    `;
};
