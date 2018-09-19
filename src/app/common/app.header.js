import {Component} from "../../libs/SPABuilder/component/Component";
import '../../styles/header.css';
import {router} from "../../libs/SPABuilder/routing/router";


let state = {
    activePage: ''
};

class AppHeader extends Component {
    constructor(config) {
        super(config);
    }

    onNavigate({target}) {
        document.querySelectorAll('.header--nav').forEach(el => el.classList.remove('active'));
        target.classList.add('active');
    }

    componentWillMount() {
        state = {activePage: router.getUrl()};
    }

    events() {
        return [{
            event: 'click',
            targetSelector: '.header--nav',
            handler: this.onNavigate.bind(this)
        }]
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
        <nav class="header">
            <div>
                <ul>
                    <li class="header--user">
                        <a href="#" class="header--nav ${state.activePage === '' ? 'active' : ''}">Users</a>
                    </li>
                    <li>
                        <a href="#repos" class="header--nav"  ${state.activePage === 'repos' ? 'active' : ''}>Repos</a>
                    </li>
                </ul>
            </div>
      </nav>
   `
});
