import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division } from '../src/components';

storiesOf('Padding', module).add('Usage', () => (
  <Division margin={{ all: 'large' }}>
    <Division padding background="muted" width={{ atSm: '1/2' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Division>
  </Division>
));
