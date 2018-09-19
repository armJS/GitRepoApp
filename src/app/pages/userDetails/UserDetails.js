import {Component} from "../../../libs/SPABuilder/component/Component";
import {http} from "../../../libs/tools/http";
import {router} from "../../../libs/SPABuilder/routing/router";
import {resolveUserDetails} from "./utils";
import './userDetails.css';

let state = {
    user: null,
    repos: [],
    totalCount: 0,
    page: 1
};

class UserDetails extends Component {
    constructor(config) {
        super(config);
    }


    updateState(receivedData) {

    }

    backToUsers() {
        router.navigate('')
    }


    events() {
        return [{
            event: 'click',
            targetSelector: '.backToUsers',
            handler: this.backToUsers.bind(this)
        }]
    }

    componentWillMount() {
        state = {
            user: null,
            repos: []
        };
    }


    componentDidMount() {
        let userId = sessionStorage.getItem('userId');

        if (userId) {
            http.get(`https://api.github.com/user/${userId}`).then(user => {
                state = {...state, user}
            }).then(() => http.get(`https://api.github.com/users/${state.user.login}/repos`))
                .then((repos) => state = {...state, repos}).then(() => this.render());
        }
    }
}

export const userDetailsPage = new UserDetails({
    selector: 'app-user-details-page',
    template: function () {
        return (
            `<div class="user-details-page">
                 <button class="backToUsers arrow-left">Back To Users</button> 
                 ${resolveUserDetails(state)}         
            </div>
        `);
    }
});
