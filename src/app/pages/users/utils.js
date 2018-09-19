export function resolveUsers(users) {
    if (!users || !users.length) {
        return `<h3>Result not found:</h3>`;
    }

    return users.map(u => {
        return (
            `<div class="user-block" data-userId="${u.id}">
                 <img src="${u.avatar_url}" data-userId="${u.id}" alt="image not found">
                 <h4>${u.login}</h4>
             </div>`
        );
    }).join('');
}