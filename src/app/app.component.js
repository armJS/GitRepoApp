import {Component} from "../libs/SPABuilder/component/Component";

class AppComponent extends Component {
    constructor(config) {
        super(config);
    }

}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <router-outlet></router-outlet>
    `
});