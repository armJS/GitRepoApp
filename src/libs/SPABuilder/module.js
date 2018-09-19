import {initRouting} from "./routing/init.routing";
import {initComponents} from "./component/init.component";

export class Module {
    constructor(config) {
        this.components = config.components;
        this.rootComponent = config.rootComponent;
        this.routes = config.routes;
    }

    start() {
        initComponents(this.rootComponent, this.components);
        initRouting(this.routes);
    }
}

