import {Component} from "../../../libs/SPABuilder/component/Component";
import {http} from "../../../libs/tools/http";
import './users.css';
import {searchBlock} from "../../common/app.search";
import {pagination} from "../../../libs/SPABuilder/functions/pagination";
import {router} from "../../../libs/SPABuilder/routing/router";
import {resolveUsers} from "./utils";

let state = {
    userInput: '',
    users: [],
    totalCount: 0,
    page: 1
};

class Users extends Component {
    constructor(config) {
        super(config);
    }

    onUserNameInput(e) {
        if (e.keyCode === 13) {
            state.userInput = e.target.value;
            this.callGithubApi();
        }
    }

    onUserSelect({target}) {
        let userId = target.dataset.userid;
        if (!userId) return;

        sessionStorage.setItem('userId', userId);
        router.navigate('userDetails');
    }

    onPaginationClick({target}) {
        if (target.classList.contains('pagination--next')) {
            state = {...state, page: ++state.page}
        } else {
            state = {...state, page: --state.page}
        }
        this.callGithubApi();


    }

    updateState(receivedData) {
        state = {...state, users: receivedData.items};
        state = {...state, totalCount: receivedData.total_count};
        this.render()
    }

    callGithubApi() {
        http.get(`https://api.github.com/search/users?q=${state.userInput}&page=${state.page}&per_page=20`).then((data) => {
            this.updateState(data);
        });
    }

    events() {
        return [{
            event: 'keyup',
            targetSelector: '#userSearchInp',
            handler: this.onUserNameInput.bind(this)
        },
            {
                event: 'click',
                targetSelector: '.user-block',
                handler: this.onUserSelect.bind(this)
            },
            {
                event: 'click',
                targetSelector: '.pagination',
                handler: this.onPaginationClick.bind(this)
            }
        ]
    }

}

export const usersPage = new Users({
    selector: 'app-users-page',
    template: function () {
        return (
            `<div class="user-page">
            ${searchBlock('userSearchInp', "Search_for_users")}
           
            <div >
                ${resolveUsers(state.users)}
            </div>
          
           ${pagination(state)}
        </div>
    `);
    }
});