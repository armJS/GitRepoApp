import {RoutingModule} from "./routing.module";

export function initRouting(routes) {
    if(!routes) return;
    new RoutingModule(routes).init();
}