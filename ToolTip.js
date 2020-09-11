class Tooltip extends HTMLElement {
    constructor() {
        super();
        console.log(" First Component Works Well");
    }
}

///the name of tag name (html elemnt) , the name of constructor (class) of that element & must be aconstructor not any other method
customElements.define('mmr-tooltip', Tooltip);