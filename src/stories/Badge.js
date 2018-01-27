import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from '../components/elements/Badge';
import Container from '../components/layout/Container';

Badge.displayName = 'Badge';

storiesOf('Badge', module).add('Basic Usage', () => (
  <Container margin={{ all: 'large' }}>
    <Container margin="small">
      <Badge>1</Badge>
    </Container>
    <Container margin="small">
      <Badge>100</Badge>
    </Container>
  </Container>
));
