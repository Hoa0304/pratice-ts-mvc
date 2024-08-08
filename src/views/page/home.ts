import { SideBar, Header, LatestItem, quoteElements } from "../../views";

export const Home = () => {
    return `
        <div class="home">
            <div class="home__sidebar">${SideBar()}</div>
            <div class="home__main">
                <div class="home__main__top">${Header()}</div>
                <div class="home__main__quote">
                    ${quoteElements.join('')}
                    ${LatestItem()}
                </div>
                <div class="home__main__recommen">
                    <h2 class="home__main__recommen-primary">
                        Good Morning
                    </h2>
                    <div class="scroll">
                        <p class="home__main__recommen-text">
                        Recommended for You
                        </p>
                        <div class="home__main__recommen-card">
                        </div>
                        <p class="home__main__recommen-recent">
                        Recent Readings
                        </p>
                        <div class="home__main__recommen-card">
                        </div>
                    </div>
                </div>
                <div class="home__main__recent"></div>
            </div>
        </div>
    `;
};
