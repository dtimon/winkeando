import { html, css, LitElement } from 'lit-element';

export class WkDmWpProductsWithCoord extends LitElement {
  static get styles() {
    return css`
      :host {
        --wk-dm-wp-products-with-coord-text-color: #000;

        display: block;
        padding: 25px;
        color: var(--wk-dm-wp-products-with-coord-text-color);
      }
    `;
  }

  static get properties() {
    return {
      articles: Array
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.articles) {
      this.fetchArticles();
    }
  }

  async fetchArticles() {
    const username = 'ck_53ccd26ee7ddb6f77b5826317e9ca9ec7e80091b';
    const password = 'cs_c2fe06fdf0b18687315ea5db52237741c1391c5c';
    const urlProducts = 'https://www.winkfy.com/wp-json/wc/v3/products';
    const urlVendors = 'https://www.winkfy.com/wp-json/wcmp/v1/vendors';
    this.articles = [];
    const headers = new Headers();
    headers.set('Authorization', `Basic ${  btoa(`${username  }:${  password}`)}`);

    const response = await fetch(
      urlProducts,
      {
        method: 'GET',
        headers
      }
    );
    const products = await response.json();

    const vendors = {};
    const articles = [];
    for (const p of products) {
      const {
        id, name, images, permalink, price,
        regular_price, vendor, stock_status
      } = p;
      if (vendor && !vendors[vendor]) {
        const urlVendor = `${urlVendors}/${vendor}`;
        const response = await fetch(
          urlVendor,
          {
            method: 'GET',
            headers
          }
        );
        vendors[vendor] = await response.json();
        vendors; debugger;
      }

      articles.push({
        id,
        name,
        images: images.map(i => ({
          src: i.src,
          name: i.name,
          alt: i.alt
        })),
        price: {
          actual: price,
          regular: regular_price
        },
        permalink,
        stock_status,
        vendor,
      });
    }
    this.articles = articles;
  }

  render() {
    return html`
      <pre>${JSON.stringify(this.articles, null, 2)}</pre>
    `;
  }
}
