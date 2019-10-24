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

export class WkFunnyPrice extends LitElement {
  /**
   * Define properties. Properties defined here will be automatically 
   * observed.
   */
  static get properties() {
    return {
      size: { type: String },
      value: { type: String },
      currencyCode: { type: Boolean, attribute: 'currency-code' },
      animation: { type: String },
    };
  }

  /**  
   * In the element constructor, assign default property values.
   */
  constructor() {
    // Must call superconstructor first.
    super();

    // Initialize properties
    this.loadComplete = false;
    this.size = 'xl';
    this.value = '2000';
    this.currencyCode = 'EUR';
    this.animation = 'standard';
    this.pie = false;

    // @TODO: recovery currency symbol
    this.currencySymbol = '€';
  }

  render() {
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
      </style>

      <div>
        <p>${this.value}</p>
        <span>${this.currencySymbol}</span>
      </div>

    `;
  }

  /**
   * Implement firstUpdated to perform one-time work on first update:
   * - 
   * - Focus the checkbox
   */
  firstUpdated() {

  }

}


customElements.define('wk-funny-price', WkFunnyPrice);
