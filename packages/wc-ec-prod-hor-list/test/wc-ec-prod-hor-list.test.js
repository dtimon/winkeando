import { html, fixture, expect } from '@open-wc/testing';

import '../wc-ec-prod-hor-list.js';

describe('WcEcProdHorList', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`
      <wc-ec-prod-hor-list></wc-ec-prod-hor-list>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`
      <wc-ec-prod-hor-list></wc-ec-prod-hor-list>
    `);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <wc-ec-prod-hor-list title="attribute title"></wc-ec-prod-hor-list>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('shows initially the text "hey there Nr. 5!" and an "increment" button', async () => {
    const el = await fixture(html`
      <wc-ec-prod-hor-list></wc-ec-prod-hor-list>
    `);

    expect(el).shadowDom.to.equalSnapshot();
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <wc-ec-prod-hor-list></wc-ec-prod-hor-list>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
