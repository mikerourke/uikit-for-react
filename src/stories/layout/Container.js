import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../../components';

Container.displayName = 'Container';

// TODO: Update this to better reflect capabilities.
storiesOf('Container', module).add('Size modifiers', () => (
  <Container margin={{ all: 'large' }}>
    <Container small>Small</Container>
    <Container large>Large</Container>
    <Container expand>Expand</Container>
  </Container>
));
