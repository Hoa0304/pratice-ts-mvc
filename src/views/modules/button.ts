import { poly } from "../../resources/assets/image";
import { BROWSER } from "../../constants/constant";

export const Button= () => {
    return `
    <section class="browser">
        <div class="browser__wrapper">
            <label for="">Browse</label>
            <button class="browser__wrapper-arrow">
                <img src="${poly}" alt="poly">
            </button>
            <div class="browser__wrapper-option">
                <ul>
                    ${BROWSER.map((option: string) => `
                    <li><a href="#">${option}</a></li>
                    `).join('')}
                </ul>
            </div>
        </div>
        <button class="browser-create">
            New
        </button>
    </section>
    `
}
