class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        // console.log(" First Component Works Well");

        ///////////Shadow Dom \\\\\\\\\ to add style that doesn't affected by any css file or any style
        this.attachShadow({ mode: 'open' })
    }

    //connectedCallback method used to Work With DOM When This method called 
    connectedCallback() {
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = '(?)'
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this))
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this))

        this.shadowRoot.appendChild(tooltipIcon); ///////////Shadow Dom \\\\\\\\\ 
        this.style.position = 'relative'
    }
    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = 'This Is A Tooltip Text';
        this._tooltipContainer.style.backgroundColor = 'black';
        this._tooltipContainer.style.color = 'red';
        this._tooltipContainer.style.position = 'absolute';
        this._tooltipContainer.style.zIndex = '10';
        this.shadowRoot.appendChild(this._tooltipContainer); ///////////Shadow Dom \\\\\\\\\ 
    }
    _hideTooltip() {
        // this._tooltipContainer.remove();
        this.shadowRoot.removeChild(this._tooltipContainer); ///////////Shadow Dom \\\\\\\\\ 

    }

}

///the name of tag name (HTML element) , the name of constructor (class) of that element & must be aconstructor not any other method.
customElements.define('mmr-tooltip', Tooltip);