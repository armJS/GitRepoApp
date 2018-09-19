import {renderComponent} from "./render.component";

export function initComponents(rootComponent, components) {
    if (!rootComponent) {
        throw new Error('Root component is not defined');
    }
    [rootComponent, ...components].forEach(renderComponent)
}
