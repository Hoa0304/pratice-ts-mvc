import { ACCOUNT } from '../../constants/constant';
import { search, qr, me, poly } from '../../resources/assets/image';

type HeaderOption = {
  value: string;
  label: string;
}

const HeaderOptions: HeaderOption[] = [
  { value: '', label: 'All' },
  { value: 'first', label: 'Title' },
  { value: 'second', label: 'Autor' },
  { value: 'third', label: 'Text' },
  { value: 'fourth', label: 'Subjects' },
];

export const Header = (): string => {
  const quickOptions = HeaderOptions.map(
    (option) => `<option value="${option.value}">${option.label}</option>`
  ).join('');

  const accountOptions = ACCOUNT.map(
    (option) => `<li><a href="#">${option}</a></li>`
  ).join('');

  return `
    <header class="header">
        <span class="menu-toggle">&equiv;</span>
        <div class="header__wrapper">
            <select class="header__wrapper--quick">
                ${quickOptions}
            </select>
            <input 
                type="text" 
                placeholder="Search"
                class="header__wrapper--input searchinput">
            <button class="header__wrapper--search">
                <img src="${search}" alt="search">
            </button>
            <button class="header__wrapper--qr">
                <img src="${qr}" alt="qr">
            </button>
        </div>
        <div class="header__profile">
            <img src="${me}" alt="me" class="header__profile--image">
            <span class="header__profile--name">
                Cẩm Hoa
            </span>
            <button class="header__profile--button">
                <img src="${poly}" alt="">
            </button>
            <div class="header__profile--option hidden">
                <ul>
                    ${accountOptions}
                </ul>
            </div>
        </div>
    </header>
    `;
};
