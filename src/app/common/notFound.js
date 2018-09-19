import {Component} from "../../libs/SPABuilder/component/Component";


class NotFound extends Component {
    constructor(config) {
        super(config);
    }
}

export const notFound = new NotFound({
    selector: 'app-not-found',
    template: `
        <div>
           <div>
                <h2>Page not found</h2>
                <a href="#">Go to home page</a>
            </div>
      </div>
   `
});