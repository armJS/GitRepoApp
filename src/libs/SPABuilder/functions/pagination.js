import '../../../styles/pagination.css';


const Per_Page = 20;

const nextBtn = `<button class="pagination--next arrow-right">Next</button>`;
const prevBtn = `<button class="pagination--prev arrow-left">Prev</button>`;

export function pagination({page, totalCount}) {
    let template = '';

    if (!totalCount) {
        return `<div class="pagination">'</div>`;
    }

    if (page > 1) {
        template = template.concat(prevBtn);
    }

    if (totalCount > page * Per_Page) {
        template = template.concat(nextBtn);
    }

    return (
        `<div class="pagination">
            ${template}
        </div>`
    );
}


