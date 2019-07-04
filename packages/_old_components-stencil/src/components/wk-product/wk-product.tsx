import { Component, Prop, Element, State } from '@stencil/core';
//import { format } from '../../utils/utils';

@Component({
  tag: 'wk-product',
  styleUrl: 'wk-product.css',
  shadow: true
})
export class WkProduct {

  elements: Array<Element>;

  @Element() private element: HTMLElement;
  @Prop() wkProperties: string;
  @State() innerProperties: any = {};

  constructor() {
  }
  componentDidLoad() {
    this.elements = Array.from(this.element.children);
    this.innerProperties = JSON.parse(this.wkProperties);
    console.log(this.innerProperties);
  }

  render() {
    const { title = "Sin titulo", picture, price = {}, summary } = this.innerProperties;
    const { value } = price;
    return [
      <div class="main">
        <div class="title">{title}</div>
        <div class="picture">{picture}</div>
        <div class="price">
          <div class="value">
            <span>{value}</span>
          </div>
        </div>
        <div class="summary">{summary}</div>
      </div>
    ];
  }
}
