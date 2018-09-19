
export function resolveRepos(state) {
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
