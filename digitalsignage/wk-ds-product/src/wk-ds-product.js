// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import { TweenLite, TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";

// Extend the LitElement base class
class WkProduct extends LitElement {
  static get properties() {
    return {
      fontSrc: String,
      font: String,
      bg: String,
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

      .image {
        position: absolute;
      }
      
      .summary {
        position: absolute; 
      }

      .title, .desc {
        font-family: --wk-ds-font;
        font-size: 48px;
        position: relative;
        
      }
      .price {
        z-index: 4;
      }
      .amount, .currency {
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
              <link href="${this.fontSrc}" rel="stylesheet">
              <!-- template content -->
              <div class="product">
                <img class="image" src="${this.img}"></img>
              
                <div class="summary">
                  <div class="title">${this.title}</div>
                  <div class="desc">${this.desc}</div>
                  ${this.summary}
                </div>
              
                <div class="price">
                  <span class="amount">${this.price.amount}</span>
                  <span class="currency"> ${this.price.currency}</span>
                </div>
              </div>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    debugger;
    this.renderRoot.host.style.fontFamily = this.font;
    const title = this.renderRoot.querySelector('.title');
    const desc = this.renderRoot.querySelector('.desc');
    const summary = this.renderRoot.querySelector('.summary');
    const price = this.renderRoot.querySelector('.price');
    const image = this.renderRoot.querySelector('.image');

    const AnimationA = TweenLite.to([summary], 2, { left: '50%', width: '100%' });

    TweenLite.to([title], 1, { left: '25%', top: '50%', });
    TweenLite.to([desc], 2, { left: '25%', top: '50%' });

    TweenLite.to([price], 2, { left: '50%', top: 0 });
    TweenLite.to([image], 2, { left: 0, top: 0, width: "50%", height: "100%" });


  }
}
// Register the new element with the browser.
customElements.define('wk-ds-product', WkProduct);