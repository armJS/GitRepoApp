export function resolveUserDetails(state) {
    if (!state.user) return;

    return (
        `<div>
            <div>
                <div class="user-block">
                     <img src="${state.user.avatar_url}"  alt="image not found">
                     <h4>${state.user.login}</h4>
                 </div>
           
                <div class="user-info" style="display: block">
                        <h2>Info about user</h2>
                </div>
            </div>
            <div>
                <h3>User Repositories</h3>
               ${resolveRepos(state)}
            </div>
         </div>`
    )
}


function resolveRepos(state) {
    if (!state.repos || !state.repos.length) {
        return `<h3>Result not found:</h3>`;
    }

    return state.repos.map(r => {
        return (
            `<div class="repo">
                    <span>${r.name}    / url: ${r.owner.url}</span>
             </div>`
        );
    }).join('');
}