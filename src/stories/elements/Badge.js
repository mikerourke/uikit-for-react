import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge, Base } from '../../components';

Badge.displayName = 'Badge';

storiesOf('Badge', module).add('Usage', () => (
  <Base margin={{ all: 'large' }}>
    <Base margin="small">
      <Badge>1</Badge>
    </Base>
    <Base margin="small">
      <Badge>100</Badge>
    </Base>
  </Base>
));
