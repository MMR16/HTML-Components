class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        // console.log(" First Component Works Well");
        ///////////Shadow Dom \\\\\\\\\ to add style that doesn't affected by any css file or any style
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
                                     <style>
                                     div{
                                       background-color:black; 
                                       color: red;
                                       position: absolute;
                                       z-index=10;
                                     }
                                     </style>
                                     <slot>some default </slot>
                                     <!-- any thing between slot will useed as default if not overwrite it -->
                                     <span>(?)</span>`;
    }

    //connectedCallback method used to Work With DOM When This method called 
    connectedCallback() {
        const tooltipIcon = this.shadowRoot.querySelector('span');
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this))
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this))

        this.shadowRoot.appendChild(tooltipIcon); ///////////Shadow Dom \\\\\\\\\ 
        this.style.position = 'relative'
    }
    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = 'This Is A Tooltip Text';
        this.shadowRoot.appendChild(this._tooltipContainer); ///////////Shadow Dom \\\\\\\\\ 
    }
    _hideTooltip() {
        // this._tooltipContainer.remove();
        this.shadowRoot.removeChild(this._tooltipContainer); ///////////Shadow Dom \\\\\\\\\ 

    }

}

///the name of tag name (HTML element) , the name of constructor (class) of that element & must be aconstructor not any other method.
customElements.define('mmr-tooltip', Tooltip);