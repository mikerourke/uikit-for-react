import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Placeholder } from '../src/components';

Placeholder.displayName = 'Placeholder';

storiesOf('Placeholder', module).add('Usage', () => (
  <Division margin={{ all: 'large' }}>
    <Placeholder textAlign="center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Placeholder>
  </Division>
));
