class Router {
  routes: { path: string; component: string }[];
  currentRoute: { path: string; component: string | HTMLElement } | null;
  constructor(root: HTMLElement) {
    this.routes = [];
    this.currentRoute = null;
  }

  addRoute(path: string, component: string): void {
    this.routes.push({ path, component });
  }

  changeRoute(): void {
    const path = window.location.pathname;
    const route = this.routes.find((route) => route.path === path);
    if (route) {
      const { component } = route;
      const container = document.querySelector('.container') as HTMLElement;
      if (typeof component === 'string') {
        container.innerHTML = component;
      } else {
        container.innerHTML = '';
        if (component) {
          container.appendChild(component);
        }
      }
    }
  }
}

export default Router;
