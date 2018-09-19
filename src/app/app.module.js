import {appComponent} from "./app.component";
import {appHeader} from "./common/app.header";
import {appRoutes} from "./app.routes";
import {Module} from "../libs/SPABuilder/module";
import "../styles/index.css";
import "../styles/preloader.css";


class AppModule extends Module {
    constructor(config) {
        super(config);
    }
}

export const appModule = new AppModule({
    components: [
        appHeader
    ],

    rootComponent: appComponent,
    routes: appRoutes
});