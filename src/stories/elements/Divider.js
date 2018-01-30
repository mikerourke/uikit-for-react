import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Divider } from '../../components';

Divider.displayName = 'Divider';

storiesOf('Divider', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Divider />
    </Container>
  ))

  .add('Divider icon', () => (
    <Container margin={{ all: 'large' }}>
      <Divider icon />
    </Container>
  ))

  .add('Divider small', () => (
    <Container margin={{ all: 'large' }}>
      <Divider small />
    </Container>
  ));
