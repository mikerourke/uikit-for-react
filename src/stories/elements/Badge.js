import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge, Block } from '../../components';

Badge.displayName = 'Badge';

storiesOf('Badge', module).add('Basic Usage', () => (
  <Block margin={{ all: 'large' }}>
    <Block margin="small">
      <Badge>1</Badge>
    </Block>
    <Block margin="small">
      <Badge>100</Badge>
    </Block>
  </Block>
));
