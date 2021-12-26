import { html, css, LitElement } from 'lit-element';
import * as L from 'leaflet/dist/leaflet-src.esm';
import { leafletStyles } from './WkWcWooMap-leaflet-styles';

export class WkEcWooMap extends LitElement {

  static get styles() {
    return [
      leafletStyles,
      css`
      :host #mapid { 
          width: var(--wk-ec-woo-map-id-width, 800px); 
          height: var(--wk-ec-woo-map-id-height, 521px); 
          position: relative; 
          outline: none;
        }
      
    `];
  }

  static get properties() {
    return {
      markers: { type: Object },
    };
  }

  constructor() {
    super();
    this.accessToken = 'pk.eyJ1IjoiZHRpbW9uIiwiYSI6ImNrNXNscG9ueTBlaXEzZG53d3phbGFybTUifQ.crd94k3hFg0ksRjaJHkDUA';
    this.x = 1;
    this.y = 1;
    this.z = 1;
    this.id = 'mapbox/streets-v11';
    this.attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
    this.maxZoom = 18;
  }

  firstUpdated(changedProperties) {
    const { id, accessToken, attribution, maxZoom } = this;
    const mapid = this.shadowRoot.querySelector('#mapid');

    const positionArray =[40.408770, -3.738400];
    const mymap = L.map(mapid).setView(positionArray, 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution,
      maxZoom,
      id,
      accessToken
    }).addTo(mymap);

    let icon = L.icon({
      iconUrl: 'images/marcador-tienda.png',
      iconSize: [50, 50], // size of the icon
      //iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
      popupAnchor: [3, -12] // point from which the popup should open relative to the iconAnchor
    });

    const marker = L.marker(positionArray, { icon }).addTo(mymap);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  }


  render() {
    return html`
      <div id="mapid"></div>
    `;
  }
}
