import { SideBar, Header, Button, Table, Form } from '../../views';

export const Mana = (): string => {
    return `
        <div class="mana">
            <div class="mana__form hidden" >
                ${Form()}
            </div>
            <div class="mana__editForm hidden" >
            </div>
            <div class="mana__sidebar">
                ${SideBar()}
            </div>
            <div class="mana__main">
                <div class="mana__main-header">
                    ${Header()}
                </div>
                <div class="mana__main-body">
                    ${Button()}
                    ${Table()}
                </div>
            </div>
        </div>
    `;
};
