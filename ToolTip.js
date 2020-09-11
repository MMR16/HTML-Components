class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        // console.log(" First Component Works Well");
    }

    //connectedCallback method used to Work With DOM When This method called 
    connectedCallback() {
        const tooltipIcon = document.createElement('span');
        tooltipIcon.innerText = '(?)'
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this))
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this))

        this.appendChild(tooltipIcon);
    }
    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.innerText = 'This Is A Tooltip Text';
        this._tooltipContainer.style.fontSize = '30px';
        this._tooltipContainer.style.color = 'red';
        this.appendChild(this._tooltipContainer);
    }
    _hideTooltip() {
        // this._tooltipContainer.remove();
        this.removeChild(this._tooltipContainer);

    }

}

///the name of tag name (HTML element) , the name of constructor (class) of that element & must be aconstructor not any other method.
customElements.define('mmr-tooltip', Tooltip);