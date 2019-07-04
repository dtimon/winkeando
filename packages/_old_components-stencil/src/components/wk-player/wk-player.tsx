import { Component, Prop, Element } from '@stencil/core';
//import { format } from '../../utils/utils';

@Component({
  tag: 'wk-player',
  styleUrl: 'wk-player.css',
  shadow: true
})
export class WkPlayer {
  playing; Number;
  elements: Array<Element>;

  @Element() private element: HTMLElement;
  /**
   * The first name
   */
  @Prop() schedule: Array<Object>;

  // constructor() {
  //   this.playing = {};
  // }

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
    timer = typeof timer === 'object'? timer: JSON.parse(String(timer));
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

  componentDidLoad() {
/**
 *  chrome://flags/#autoplay-policy
 * 
 */
    this.elements = Array.from(this.element.children);

    this.elements.forEach(el => {
      el.setAttribute('hidden', '');
    });

    this.playing = 0;
    const elPlaying = this.elements[this.playing];
    const options = this._getPlayerAttributes(elPlaying);

    this._renderElement(elPlaying, options);
  }

  render() {
    return [
      <h1>__</h1>,
      <slot>I am wk-player: I am the brain</slot>
    ];
  }
}
