export function renderComponent(component) {
    if (component.componentWillMount && typeof component.componentWillMount === "function") {
        component.componentWillMount();
    }

    component.render();

    if (component.componentDidMount && typeof component.componentDidMount === "function") {
        component.componentDidMount()
    }
}