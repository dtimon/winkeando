import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

//console.log(videojs);
/**
 * `wk-layout`
 * Video component for polymer 3
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class WkWcVideo extends PolymerElement {
  static get template() {
    return html`

      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[wkZones.video.test]]!</h2>
    `;
  }

  static get properties() {
    return {
      wkZones: {
        type: Object,
        notify: true
      }
    };
  }

  static get observers() {
    return [
      '_initProp(wkZones)'
    ];
  }

  _appendElement(parent, typeElement, keysElement) {

    let parentRef = parent.shadowRoot || parent;
    let newElement = document.createElement(typeElement);

    let map = new Map(Object.entries(keysElement));

    map.forEach((value, key) => {
      let map = new Map(Object.entries(value));
      switch (key) {

        case "$":
          map.forEach(
            (value, key) => {
              if (value) {
                newElement.setAttribute(key, value);
              }
            }
          );
          break;
        case "$$": //childs (is array)
          map.forEach(
            (keysElement, index) => {
              typeElement = Object.keys(keysElement)[0];
              this._appendElement(newElement, typeElement, keysElement[typeElement]);
            }
          );
          break;
        default:
          /////////////////////////////// auotplay not wokrking
          break;
      }
    })

    parentRef.appendChild(newElement);
  }

  _renderElement(elObj, whereAppend) {
    let map = new Map(Object.entries(elObj));
    debugger;
    map.forEach((keysElement, typeElement) => { this._appendElement(whereAppend, typeElement, keysElement) });
  }

  _initProp(wkZones) {
    let prop = wkZones.video.$;
    prop.width = prop.width || this.offsetWidth;
    wkLayout.div.$;
    this._renderElement(wkZones.layout, this.shadowRoot || this);   
    //this._renderElement(wkZones, this.shadowRoot || this);
  }

  // Captura de eventos de recepción
}

window.customElements.define('wk-layout', WkWcVideo);