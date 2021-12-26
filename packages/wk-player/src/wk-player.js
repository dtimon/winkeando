import { LitElement, html } from 'lit-element';

export class WkPlayer extends LitElement {
  update() {
    super.update();
    /**
     *  chrome://flags/#autoplay-policy
     *
     */
    this.elements = Array.from(this.renderRoot.host.children);
    this.elements.forEach(el => WkPlayer._stopElement(el));

    this.playing = 0;
    const elPlaying = this.elements[this.playing];
    const options = WkPlayer._getWkOptionsAttributes(elPlaying);

    this._renderElement(elPlaying, options);
  }

  static _startElement(el, parent) {
    const playEl = el;
    parent.append(playEl);
    playEl.removeAttribute('hidden');
    if (playEl.tagName === 'VIDEO') {
      playEl.currentTime = 0;
      playEl.play();
    }
  }

  static _stopElement(el) {
    const playEl = el;
    playEl.setAttribute('hidden', '');
    if (playEl.tagName === 'VIDEO') {
      playEl.pause();
    }
    playEl.remove();
  }

  static _getWkOptionsAttributes(elPlaying) {
    let options = elPlaying.getAttribute('data-wk-options');
    options = JSON.parse(options);
    return options;
  }

  _renderElement(el) {
    let playEl = el;
    const options = WkPlayer._getWkOptionsAttributes(playEl);
    WkPlayer._startElement(playEl, this);

    setTimeout(() => {
      WkPlayer._stopElement(playEl);
      this.playing = (this.playing + 1) % this.elements.length;
      playEl = this.elements[this.playing];
      this._renderElement(playEl);
    }, options.timer * 1000);
  }

  /**
   *  Render dynamic slot, but there is not all at DOM
   */
  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      </style>
      <slot>I am wk-player: I am the </slot>
    `;
  }
}

customElements.define('wk-player', WkPlayer);
