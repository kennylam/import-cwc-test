/**
 * Copyright IBM Corp. 2016, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles.scss';

import ArrowRight20 from '@carbon/icons-react/es/arrow--right/20';
import { Card } from '@carbon/ibmdotcom-react/es/components/Card';
import ReactDom from 'react-dom';

const card = {
  eyebrow: "eyebrow text",
  heading: "Lorem ipsum dolor sit amet",
};

const cta = {
  type: "local",
  href: "https://example.com",
  icon: {
    src: ArrowRight20,
  },
};

const App = () => (
  <div className="bx--grid">
    <div className="bx--row">
      <div className="bx--col-sm-4 bx--col-lg-6">
        <Card cta={cta} {...card} />
      </div>
    </div>
  </div>
);

ReactDom.render(<App />, document.getElementById('app'));
