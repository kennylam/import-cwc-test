/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { property, customElement } from 'lit-element';
import BXModalFooter from 'carbon-web-components/es/components/modal/modal-footer.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import styles from './expressive-modal.scss';
import StableSelectorMixin from '../../globals/mixins/stable-selector';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Expressive modal footer.
 *
 * @element dds-expressive-modal-footer
 */
@customElement(`${ddsPrefix}-expressive-modal-footer`)
class DDSExpressiveModalFooter extends StableSelectorMixin(BXModalFooter) {
  /**
   * The slot in parent `<dds-modal>`.
   */
  @property({ reflect: true })
  slot = 'footer';

  static get stableSelector() {
    return `${ddsPrefix}--expressive-modal-footer`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSExpressiveModalFooter;
