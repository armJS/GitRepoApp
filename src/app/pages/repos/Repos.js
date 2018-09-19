import {Component} from "../../../libs/SPABuilder/component/Component";
import {http} from "../../../libs/tools/http";
import {searchBlock} from "../../common/app.search";
import './repos.css';
import {pagination} from "../../../libs/SPABuilder/functions/pagination";
import {resolveRepos} from "./utils";

let state = {
    userInput: '',
    repos: [],
    totalCount: 0,
    page: 1
};

class Repos extends Component {
    constructor(config) {
        super(config);
    }


    onUserNameInput(e) {
        if (e.keyCode === 13) {

            state.userInput = e.target.value;
            this.callGithubApi();
        }
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
        state.repos = receivedData.items;
        state.totalCount = receivedData.total_count;
        this.render()
    }

    callGithubApi() {
        http.get(`https://api.github.com/search/repositories?q=${state.userInput}&page=${state.page}&per_page=20`).then((data) => {
            this.updateState(data);
        });
    }


    events() {
        return [{
            event: 'keyup',
            targetSelector: '#repoSearchInp',
            handler: this.onUserNameInput.bind(this)
        },
            {
                event: 'click',
                targetSelector: '.pagination',
                handler: this.onPaginationClick.bind(this)
            }
        ]
    }
}


export const reposPage = new Repos({
    selector: 'app-repos-page',
    template: function () {
        return (`
        <div class="repos-page">
            ${searchBlock('repoSearchInp', "Search_for_repos")}
             ${pagination(state)}
            ${resolveRepos(state)}
            ${pagination(state)}
        </div>
       `)
    }
});