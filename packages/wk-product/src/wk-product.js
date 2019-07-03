// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class WkProduct extends LitElement {
  static get properties() {
    return {
      title: String,
      desc: String,
      summary: String,
      price: {
        converter: {
          fromAttribute: (value, type) => {
            // `value` is a string
            // Convert it to a value of type `type` and return it
            let valueObject = JSON.parse(value);
            return valueObject;
          }
        }
      }
    }
  }

  static get styles() {
    return css`
      .product {
        z-index: 0;
        position: absolute;
        color: red;
      }
      .title, .desc {
        z-index: 1;
        position: absolute;
        
      }
      .summary {
        z-index:2;
        position: absolute;
        
      }
      .price {
        z-index: 3;
      }
      .amount {
        text-align: center
      }
    `;
  }

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render() {
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    console.log(this.price)
    return html`
      <!-- template content -->
      <div class="product">
        <div class="title">${this.title}</div>
        <div class="desc">${this.desc}</div>
        <div class="summary">${this.summary}</div>
        <div class="price" style="height: 150px; width: 150px;background: url('xxxxxxxxxxxxxxxxxx')">
          <span class="amount">${this.price.amount}</span>
          <span class="currency"> ${this.price.currency}</span>
        </div>
      
      </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('wk-product', WkProduct);