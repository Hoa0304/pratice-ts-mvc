type Popup = {
    title: string;
    content: string;
    button?: string;
    open?: string;
    icon: 'check' | 'xmark';
};
  
export const Popup = (popup: Popup): string => {
    let buttons = '';
    if (popup.button && popup.open) {
        buttons = `
            <div class="buttons">
                <button class="buttons__close">${popup.button}</button>
                <button class="buttons__cancel">${popup.open}</button>
            </div>
        `;
    } else if (popup.button) {
        buttons = `
            <div class="buttons">
                <button class="buttons__close">${popup.button}</button>
            </div>
        `;
    }
  
    let icon = '';
    if (popup.icon === 'check') {
        icon = '<i class="fa-regular fa-circle-check"></i>';
    } else {
        icon = '<i class="fa-regular fa-circle-xmark"></i>';
    }
  
    return `
        <section class="modal-box">
            ${icon}
            <h2>${popup.title}</h2>
            <h3>${popup.content}</h3>
            ${buttons}
        </section>
    `;
};
