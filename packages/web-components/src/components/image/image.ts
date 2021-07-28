/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, property, internalProperty, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './image.scss';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Image.
 *
 * @element dds-image
 * @slot long-description - The long description content.
 * @slot icon - The icon content.
 */
@customElement(`${ddsPrefix}-image`)
class DDSImage extends StableSelectorMixin(LitElement) {
  /**
   * The image data, harvested from `<dds-image-item>`.
   */
  @internalProperty()
  private _images: HTMLElement[] = [];

  /**
   * Handles `slotchange` event.
   */
  private _handleSlotChange({ target }: Event) {
    const { selectorItem } = this.constructor as typeof DDSImage;
    this._images = (target as HTMLSlotElement)
      .assignedNodes()
      // Supports `<dds-image><slot></slot></dds-image>` rendered in shadow DOM
      .reduce((acc, node) => {
        if ((node as Element).tagName === 'SLOT') {
          acc.push(...(node as HTMLSlotElement).assignedNodes());
        } else {
          acc.push(node);
        }
        return acc;
      }, [] as Node[])
      .filter(node => node.nodeType === Node.ELEMENT_NODE && (node as Element).matches(selectorItem)) as HTMLElement[];
  }

  /**
   * The alternate text.
   */
  @property()
  alt = '';

  /**
   * The image source.
   */
  @property({ attribute: 'default-src' })
  defaultSrc = '';

  render() {
    const { alt, defaultSrc, _images: images, _handleSlotChange: handleSlotChange } = this;
    return html`
      <slot @slotchange="${handleSlotChange}"></slot>
      <picture>
        ${images.map(
          image => html`<source media="${image.getAttribute('media')}" srcset="${image.getAttribute('srcset')}"></source>`
        )}
        <img class="${prefix}--image__img" src="${defaultSrc}" alt="${alt}" aria-describedby="long-description" loading="lazy" />
      </picture>
      <div id="long-description" class="${prefix}--image__longdescription">
        <slot name="long-description"></slot>
      </div>
      <slot name="icon"></slot>
    `;
  }

  /**
   * A selector that will return image items.
   */
  static get selectorItem() {
    return `${ddsPrefix}-image-item`;
  }

  static get stableSelector() {
    return `${ddsPrefix}--image`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSImage;
