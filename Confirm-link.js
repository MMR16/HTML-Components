class ConfirmLink extends HTMLAnchorElement {
    connectedCallback() {
        this.addEventListener('click', e => {
            if (!confirm('do you want to leave?!!')) {
                e.preventDefault();
            }
        })
    }

}
customElements.define('mmr-confirm', ConfirmLink, { extends: 'a' });