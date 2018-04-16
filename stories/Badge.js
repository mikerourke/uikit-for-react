import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge, Division } from '../src/components';

Badge.displayName = 'Badge';

storiesOf('Badge', module).add('Usage', () => (
  <Division margin={{ all: 'large' }}>
    <Division margin="small">
      <Badge>1</Badge>
    </Division>
    <Division margin="small">
      <Badge>100</Badge>
    </Division>
  </Division>
));
