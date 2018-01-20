import React from 'react';
import { storiesOf } from '@storybook/react';
import withAlign from '../components/Align';
import Container from '../components/Container';

Align.displayName = 'Align';

storiesOf('Align', module).add('Basic Usage', () => {
  const component = (
    <Container margin={{ all: 'large' }}>
      <span>Test</span>
    </Container>
  );
  return withAlign(component);
});
