/**
 * Copyright IBM Corp. 2016, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import ContentGroupCards from '../ContentGroupCards';
import ContentGroupCardsKnobs from './data/ContentGroupCards.knobs';
import React from 'react';
import readme from '../README.stories.mdx';
import { text } from '@storybook/addon-knobs';

const props = () => ({
  heading: text('Heading (heading):', ContentGroupCardsKnobs.heading),
  copy: text('Copy (copy):', ContentGroupCardsKnobs.copy),
  items: ContentGroupCardsKnobs.items,
});

export default {
  title: 'Components/Content group cards',
  parameters: {
    ...readme.parameters,
    percy: {
      name: 'Components|Content group cards: Default',
    },
  },
};

export const Default = () => {
  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-lg-8 bx--col-sm-4 bx--offset-lg-4">
          <ContentGroupCards {...props()} />
        </div>
      </div>
    </div>
  );
};
