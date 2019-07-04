// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import { TweenMax, TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";

// Extend the LitElement base class
class WkProduct extends LitElement {
  static get properties() {
    return {
      img: String,
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
        position: relative;
        color: red;
      }
      .title, .desc {
        z-index: 1;
        position: relative;
        
      }
      .summary {
        z-index:2;
        position: relative;
        
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
        <img class="image" src="${this.img}"></img>
        <div class="title">${this.title} ${this.img}</div>
        <div class="desc">${this.desc}</div>
        <div class="summary">${this.summary}</div>
        <div class="price">
          <span class="amount">${this.price.amount}</span>
          <span class="currency"> ${this.price.currency}</span>
        </div>
      
      </div>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    const title = this.renderRoot.querySelector('.title');
    const desc = this.renderRoot.querySelector('.desc');
    const summary = this.renderRoot.querySelector('.summary');
    const price = this.renderRoot.querySelector('.price');
    const image = this.renderRoot.querySelector('.image');

    TweenMax.to([title, desc], 2, { x: 200, y: 600, width: "200px", height: "150px" });
    TweenMax.to([price], 2, { x: "20%", y: 0, width: "300px", height: "600px" });
    TweenMax.to([image], 2, { x: 0, y: 0, width: "300px", height: "600px" });
  }
}
// Register the new element with the browser.
customElements.define('wk-product', WkProduct);