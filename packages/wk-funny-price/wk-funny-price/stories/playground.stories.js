/* eslint-disable import/extensions */
import { html } from 'lit-html';
import { withKnobs, withWebComponentsKnobs, text } from '@open-wc/demoing-storybook';

import '../wk-funny-price.js';

export default {
  title: 'WkFunnyPrice|Playground',
  component: 'wk-funny-price',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const singleComponent = () => html`
  <wk-funny-price></wk-funny-price>
`;

export const manualContent = () => html`
  <wk-funny-price>
    <p>${text('Content', 'Some text', 'Properties')}</p>
  </wk-funny-price>
`;
