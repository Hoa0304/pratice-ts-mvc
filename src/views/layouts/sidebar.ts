import { logo, book, sp, home } from '../../resources/assets/image';

type SideBarMenuItemProps = {
  icon: string;
  label: string;
  href: string;
  className?: string;
};

const SideBarMenuItem = ({ icon, label, href, className = '' }: SideBarMenuItemProps): string => {
  return `
    <li>
        <img src="${icon}" alt="${label}">
        <a class="sidebar__menu--item-${className}" href="${href}">
            <span>${label}</span>
        </a>
    </li>
  `;
};

const SideBarFinalItem = (label: string, href: string): string => {
  return `
    <li>
        <a class="sidebar__final-text" href="${href}">${label}</a>
    </li>
  `;
};

export const SideBar = (): string => {
  const sideBarMenuItems: SideBarMenuItemProps[] = [
    { icon: home, label: 'Home', href: '/home', className: 'primary' },
    { icon: sp, label: 'Management', href: '/management', className: 'text' },
    { icon: book, label: 'My Shelf', href: '#', className: 'text' },
  ];

  const sideBarFinalItems = [
    { label: 'About', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Terms & Condition', href: '#' },
  ];

  const sideBarMenuItemsHTML = sideBarMenuItems.map(
    (item) => SideBarMenuItem(item)
  ).join('');

  const sideBarFinalItemsHTML = sideBarFinalItems.map(
    (item) => SideBarFinalItem(item.label, item.href)
  ).join('');

  return `
    <section class="sidebar">
        <figure class="sidebar-logo">
            <img src="${logo}" alt="logo">
        </figure>
        <div class="sidebar__menu">
            <ul class="sidebar__menu--item">
                ${sideBarMenuItemsHTML}
            </ul>
        </div>
        <div class="sidebar__final">
            <ul>
                ${sideBarFinalItemsHTML}
            </ul>
        </div>
    </section>
  `;
};
