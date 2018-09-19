export class Component {
    constructor(config) {
        this.template = config.template;
        this.selector = config.selector;
        this.el = null;
    }

    render() {
        this.el = document.querySelector(this.selector);
        if (!this.el) throw new Error(`Component with selector: ${this.selector} not found`);
        this.el.innerHTML = compileTemplate(this.template, this.data);

        initEvents.call(this);
    }
}

function initEvents() {
    if (!this.events) return;

    this.events().forEach(e => {
        this.el.querySelectorAll(e.targetSelector).forEach(el => el.addEventListener(e.event, e.handler));
    });
}


function compileTemplate(template, data) {
    if (typeof template === 'function')
        return template();


    if (!data) return template;

    let regex = /\{{(.*?)}}/g;

    return template.replace(regex, (str, d) => {
        let key = d.trim();
        return data[key];
    });
}