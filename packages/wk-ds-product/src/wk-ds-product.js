// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import { TweenLite, TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";

const activePluguins = [CSSPlugin];
// Extend the LitElement base class
class WkProduct extends LitElement {
  static get properties() {
    return {
      fontSrc: {
        type: String,
        atribute: 'font-src'
      },
      font: String,
      bg: String,
      img: String,
      title: String,
      desc: String,
      summary: String,
      price: {
        converter: {
          atribute: false,
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
      :host {
        height: '1080px';
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
    console.log(this.bg)
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
                  <h1 class="amount">${this.price.amount} ${this.price.currency}</h1>
                </div>
              </div>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    console.log(this.bg);
    this.renderRoot.host.style.fontFamily = this.font;


    const product = this.renderRoot.querySelector('.product');
    TweenLite.to([product], 1, { css: { backgroundImage: `url(${this.bg})` } });

    const image = this.renderRoot.querySelector('.image');
    TweenLite.to([image], 2, { css: { position: 'absolute', zIndex: 1, left: '12.5%', top: '12.5%', width: "75%", height: "75%", } });

    const summary = this.renderRoot.querySelector('.summary');
    TweenLite.to([summary], 0, { width: "50%", height: "50%" });

    TweenLite.to([summary], 3, { css: { position: 'absolute', zIndex: 1, width: "50%", height: "50%", left: '25%', top: '25%', backgroundColor: 'rgba(0,0,0,0.7)' } });

    const title = this.renderRoot.querySelector('.title');
    TweenLite.to([title], 1, { left: '25%', top: '50%', });

    const desc = this.renderRoot.querySelector('.desc');
    TweenLite.to([desc], 2, { left: '25%', top: '50%' });

    TweenMax.to([desc], 1, {height: '200px'});
    TweenMax.fromTo([desc], 3, {x:400}, {x:0, ease:Linear.easeNone, repeat:-1});


    const price = this.renderRoot.querySelector('.price');
    TweenLite.to([price], 2, { left: '50%', top: 0, width: '20%', height: '20%', css: { position: 'absolute' } });


  }
}
// Register the new element with the browser.
customElements.define('wk-ds-product', WkProduct);