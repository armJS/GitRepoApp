export function startPreloader() {
    let preloader = document.createElement('div');
    preloader.classList.add('spinner');
    document.body.appendChild(preloader);
}

export function stopPreloader() {
    document.querySelector('.spinner').remove();
}