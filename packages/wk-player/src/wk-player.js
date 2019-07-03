/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */


// Import LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

export class WkPlayer extends LitElement {

  /**
   * Define a template for the new element by implementing LitElement's
   * `render` function. `render` must return a lit-html TemplateResult.
   */
  render() {
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
      </style>
      <slot>I am wk-player: I am the brain</slot>
    `;
  }


  _startElement(el) {
    el.removeAttribute('hidden');
    if (el.tagName === "VIDEO") {
      el['currentTime'] = 0;
      el['play']();
    }
  }

  _stopElement(el) {
    el.setAttribute('hidden', '');
    if (el.tagName === "VIDEO") {
      el['pause']();
    }
  }

  _getPlayerAttributes(elPlaying) {
    let timer = elPlaying.getAttribute('data-wk-player');
    timer = typeof timer === 'object' ? timer : JSON.parse(String(timer));
    return timer;
  }

  _renderElement(elPlaying, options) {

    this._startElement(elPlaying);

    setTimeout(() => {

      this._stopElement(elPlaying);

      this.playing = (this.playing + 1) % this.elements.length;
      elPlaying = this.elements[this.playing];

      const options = this._getPlayerAttributes(elPlaying);

      this._renderElement(elPlaying, options);

    }, options.timer * 1000);

  }

  update() {
    super.update();
    /**
     *  chrome://flags/#autoplay-policy
     * 
     */
    this.elements = Array.from(this.renderRoot.host.children);

    this.elements.forEach(el => {
      el.setAttribute('hidden', '');
    });

    this.playing = 0;
    const elPlaying = this.elements[this.playing];
    const options = this._getPlayerAttributes(elPlaying);

    this._renderElement(elPlaying, options);
  }


}


// Register the element with the browser
customElements.define('wk-player', WkPlayer);
