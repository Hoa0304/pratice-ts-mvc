import { harry, holy } from '../../resources/assets/image';

export const LatestItem = (): string => {
  return `
    <section class="arrival">
        <div class="arrival-text">New Arrivals</div>
        <div class="arrival__wrapper">
            <figure class="arrival__wrapper-book">
                <img src="${holy}" alt="book">
            </figure>
            <figure class="arrival__wrapper-book">
                <img src="${harry}" alt="book">
            </figure>
            <figure class="arrival__wrapper-book">
                <img src="${harry}" alt="book">
            </figure>
            <figure class="arrival__wrapper-book">
                <img src="${harry}" alt="book">
            </figure>
            <figure class="arrival__wrapper-book">
                <img src="${harry}" alt="book">
            </figure>
            <figure class="arrival__wrapper-book">
                <img src="${harry}" alt="book">
            </figure> <figure class="arrival__wrapper-book">
                <img src="${harry}" alt="book">
            </figure>
            <figure class="arrival__wrapper-book">
                <img src="${harry}" alt="book">
            </figure>
            <figure class="arrival__wrapper-book">
                <img src="${harry}" alt="book">
            </figure>
            <figure class="arrival__wrapper-book">
                <img src="${harry}" alt="book">
            </figure>
            <figure class="arrival__wrapper-book">
                <img src="${harry}" alt="book">
            </figure>
        </div>
    </section>
    `;
};
